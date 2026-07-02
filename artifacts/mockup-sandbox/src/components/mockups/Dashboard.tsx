import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Total Revenue", value: "$48,250", change: "+12.5%", up: true },
  { label: "Active Users", value: "2,847", change: "+8.2%", up: true },
  { label: "Bounce Rate", value: "24.3%", change: "-3.1%", up: false },
  { label: "Avg Session", value: "4m 32s", change: "+1.4%", up: true },
]

const activities = [
  { user: "Sarah Chen", action: "created a new project", project: "Website Redesign", time: "2 min ago" },
  { user: "Mike Torres", action: "deployed to production", project: "API v2", time: "15 min ago" },
  { user: "Aisha Patel", action: "commented on", project: "Homepage Mockup", time: "1 hour ago" },
  { user: "James Wilson", action: "approved", project: "Q3 Budget", time: "3 hours ago" },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-500 text-sm">Welcome back, here is your overview.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Download Report</Button>
            <Button size="sm">New Project</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardContent className="pt-6">
                <p className="text-sm text-slate-500 mb-1">{s.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900">{s.value}</span>
                  <Badge variant={s.up ? "default" : "destructive"} className="text-xs">
                    {s.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((a) => (
                <div key={`${a.user}-${a.time}`} className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">
                    {a.user.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span className="flex-1">
                    <span className="font-medium text-slate-900">{a.user}</span>{" "}
                    <span className="text-slate-500">{a.action}</span>{" "}
                    <span className="font-medium text-slate-700">{a.project}</span>
                  </span>
                  <span className="text-slate-400 text-xs">{a.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
