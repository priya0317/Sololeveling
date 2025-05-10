"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, Send, Mic } from "lucide-react"

export function SystemChat() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "Good morning, Hunter. Your physical condition has improved by 3% since yesterday. Would you like to review your current stats or begin today's training?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])
    setInput("")

    // Simulate system response
    setTimeout(() => {
      const responses = [
        "I've analyzed your recent performance. Your strength is improving steadily, but your endurance needs more work. I recommend focusing on cardio exercises today.",
        "Based on your sleep data, your recovery rate is optimal. This is a good day to push for a new personal record in your strength training.",
        "Your movement patterns indicate potential strain in your lower back. Consider adding these specific stretches to your routine today.",
        "You've completed 65% of your daily hydration goal. Remember to drink water regularly throughout your training session.",
      ]

      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: responses[Math.floor(Math.random() * responses.length)],
        },
      ])
    }, 1000)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <Card className="border-gray-700 bg-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-blue-500" />
          System AI
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 h-[300px] overflow-y-auto rounded-lg bg-gray-900 p-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 rounded-lg p-3 ${
                message.role === "system" ? "bg-blue-500/10 text-white" : "bg-gray-700 text-white"
              }`}
            >
              {message.role === "system" && (
                <div className="mb-1 flex items-center gap-1">
                  <Brain className="h-4 w-4 text-blue-500" />
                  <span className="text-xs font-medium text-blue-500">System</span>
                </div>
              )}
              <p className="text-sm">{message.content}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="border-gray-700 bg-gray-700 hover:bg-gray-600">
            <Mic className="h-4 w-4" />
          </Button>
          <Input
            placeholder="Ask the System..."
            className="border-gray-700 bg-gray-700 text-white placeholder:text-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            variant="outline"
            size="icon"
            className="border-gray-700 bg-blue-600 hover:bg-blue-700"
            onClick={handleSend}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4">
          <div className="mb-2 text-xs text-gray-400">Quick Commands:</div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="border-gray-700 bg-gray-700 text-xs hover:bg-gray-600">
              Show today's stats
            </Button>
            <Button variant="outline" size="sm" className="border-gray-700 bg-gray-700 text-xs hover:bg-gray-600">
              Recommend workout
            </Button>
            <Button variant="outline" size="sm" className="border-gray-700 bg-gray-700 text-xs hover:bg-gray-600">
              Start training mode
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
