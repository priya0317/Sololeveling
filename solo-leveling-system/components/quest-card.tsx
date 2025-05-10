import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Lock } from "lucide-react"

interface QuestCardProps {
  title: string
  description: string
  reward: string
  difficulty: string
  progress: number
  status: "pending" | "in-progress" | "completed" | "locked"
  icon: React.ReactNode
}

export function QuestCard({ title, description, reward, difficulty, progress, status, icon }: QuestCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "text-green-500"
      case "in-progress":
        return "text-blue-500"
      case "pending":
        return "text-yellow-500"
      case "locked":
        return "text-gray-500"
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "locked":
        return <Lock className="h-5 w-5 text-gray-500" />
    }
  }

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/20 text-green-500"
      case "Normal":
        return "bg-yellow-500/20 text-yellow-500"
      case "Hard":
        return "bg-red-500/20 text-red-500"
    }
  }

  return (
    <Card className="border-gray-700 bg-gray-800">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700">{icon}</div>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <span className={`text-sm ${getStatusColor()}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
          </div>
        </div>

        {status !== "locked" && (
          <div className="mb-4">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-gray-400">Progress</span>
              <span className="text-gray-400">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-gray-700" indicatorClassName="bg-blue-500" />
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-500">{reward}</span>
            <span className={`rounded-full px-2 py-1 text-xs ${getDifficultyColor()}`}>{difficulty}</span>
          </div>

          {status !== "locked" && status !== "completed" && (
            <Button variant="outline" size="sm" className="border-gray-600 hover:bg-gray-700">
              {status === "pending" ? "Start" : "Track"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
