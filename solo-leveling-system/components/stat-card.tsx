import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
  progress: number
  change: string
  color: string
}

export function StatCard({ title, value, icon, progress, change, color }: StatCardProps) {
  return (
    <Card className="border-gray-700 bg-gray-800">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`${color}`}>{icon}</div>
            <h3 className="font-medium">{title}</h3>
          </div>
          <div className={`text-2xl font-bold ${color}`}>{value}</div>
        </div>
        <div className="mb-2">
          <Progress value={progress} className="h-2 bg-gray-700" indicatorClassName={color.replace("text", "bg")} />
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Progress</span>
          <span className="text-gray-400">{change}</span>
        </div>
      </CardContent>
    </Card>
  )
}
