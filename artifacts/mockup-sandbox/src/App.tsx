import { useEffect, useState, type ComponentType } from "react"
import { modules as discoveredModules } from "./.generated/mockup-components"

type ModuleMap = Record<string, () => Promise<Record<string, unknown>>>

function resolveComponent(
  mod: Record<string, unknown>,
  name: string,
): ComponentType | undefined {
  const fns = Object.values(mod).filter(
    (v) => typeof v === "function",
  ) as ComponentType[]
  return (
    (mod.default as ComponentType) ||
    (mod.Preview as ComponentType) ||
    (mod[name] as ComponentType) ||
    fns[fns.length - 1]
  )
}

function getComponentName(key: string): string {
  return key
    .replace("./components/mockups/", "")
    .replace(".tsx", "")
}

function PreviewRenderer({
  componentPath,
  modules,
}: {
  componentPath: string
  modules: ModuleMap
}) {
  const [Component, setComponent] = useState<ComponentType | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setComponent(null)
    setError(null)

    async function loadComponent() {
      const key = `./components/mockups/${componentPath}.tsx`
      const loader = modules[key]
      if (!loader) {
        setError(`No component found at ${componentPath}.tsx`)
        return
      }

      try {
        const mod = await loader()
        if (cancelled) return
        const name = componentPath.split("/").pop()!
        const comp = resolveComponent(mod, name)
        if (!comp) {
          setError(
            `No exported React component found in ${componentPath}.tsx\n\nMake sure the file has at least one exported function component.`,
          )
          return
        }
        setComponent(() => comp)
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e)
        setError(`Failed to load preview.\n${message}`)
      }
    }

    void loadComponent()
    return () => {
      cancelled = true
    }
  }, [componentPath, modules])

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-xl shadow-sm border border-red-100 p-8 max-w-lg">
          <div className="text-red-500 text-lg font-semibold mb-2">Error</div>
          <pre className="text-red-600/80 text-sm whitespace-pre-wrap font-sans">{error}</pre>
        </div>
      </div>
    )
  }

  if (!Component) return null

  return <Component />
}

function Gallery() {
  const keys = Object.keys(discoveredModules)

  const [search, setSearch] = useState("")

  const filtered = keys.filter((k) =>
    getComponentName(k).toLowerCase().includes(search.toLowerCase()),
  )

  if (keys.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">No Mockups Yet</h1>
          <p className="text-slate-500 mb-6">
            Add a <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">.tsx</code> file to{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">src/components/mockups/</code>{" "}
            to see it appear here.
          </p>
          <pre className="bg-slate-900 text-slate-200 text-sm rounded-lg p-4 text-left">
{`import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return <Button>Hello</Button>
}`}
          </pre>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Mockup Gallery</h1>
              <p className="text-sm text-slate-500">{keys.length} component{keys.length !== 1 ? "s" : ""}</p>
            </div>
            <a
              href="https://github.com/SkittlesGod-cmd/Peach/tree/main/artifacts/mockup-sandbox/src/components/mockups"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-slate-600 underline underline-offset-2"
            >
              Source
            </a>
          </div>
          <input
            type="search"
            placeholder="Search mockups..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
          />
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-8 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            No mockups matching "{search}"
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((key) => {
              const name = getComponentName(key)
              return (
                <a
                  key={key}
                  href={`/preview/${name}`}
                  className="block p-5 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold mb-3 group-hover:scale-110 transition-transform">
                    {name[0]}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{name}</h3>
                  <p className="text-sm text-slate-400 truncate">Preview →</p>
                </a>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}

function getPreviewPath(): string | null {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "")
  const { pathname } = window.location
  const local =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname
  const match = local.match(/^\/preview\/(.+)$/)
  return match ? match[1] : null
}

export default function App() {
  const previewPath = getPreviewPath()

  if (previewPath) {
    return (
      <PreviewRenderer
        componentPath={previewPath}
        modules={discoveredModules}
      />
    )
  }

  return <Gallery />
}
