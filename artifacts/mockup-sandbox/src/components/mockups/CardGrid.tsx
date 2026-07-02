import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const items = [
  { title: "Analytics Dashboard", desc: "Real-time metrics and insights for your business.", tag: "New", color: "bg-blue-500" },
  { title: "User Management", desc: "Manage roles, permissions, and team access.", tag: "Updated", color: "bg-emerald-500" },
  { title: "Notifications", desc: "Multi-channel notification system with templates.", tag: "Beta", color: "bg-amber-500" },
  { title: "File Storage", desc: "Secure cloud storage with version history.", tag: "Stable", color: "bg-violet-500" },
  { title: "API Gateway", desc: "Centralized API management and rate limiting.", tag: "Preview", color: "bg-rose-500" },
  { title: "Audit Logs", desc: "Comprehensive activity tracking and compliance.", tag: "Enterprise", color: "bg-cyan-500" },
]

export default function CardGrid() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Features</h1>
            <p className="text-slate-500 mt-1">Everything you need to scale your product.</p>
          </div>
          <Button>View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center text-white text-sm font-bold`}>
                    {item.title[0]}
                  </div>
                  <Badge variant="outline">{item.tag}</Badge>
                </div>
                <CardTitle className="mt-4 text-lg">{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full">Configure</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
