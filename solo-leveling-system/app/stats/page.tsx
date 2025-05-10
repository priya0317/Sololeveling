import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Award, Brain, Dumbbell, Flame, Heart, Zap } from "lucide-react"

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl font-bold">The System</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">Level 7</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-500" />
              <span className="font-medium">1,250 XP</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Stats & Abilities</h1>
          <p className="text-gray-400">Track your progress and physical attributes</p>
        </div>

        <Tabs defaultValue="physical" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-4">
            <TabsTrigger value="physical">Physical Stats</TabsTrigger>
            <TabsTrigger value="health">Health Metrics</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="physical">
            <div className="grid gap-6 md:grid-cols-2">
              <StatDetailCard
                title="Strength"
                grade="C+"
                level={65}
                icon={<Dumbbell className="h-6 w-6 text-red-500" />}
                color="text-red-500"
                description="Your ability to exert force against physical objects"
                metrics={[
                  { label: "Max Bench Press", value: "65 kg" },
                  { label: "Max Squat", value: "85 kg" },
                  { label: "Pull-ups", value: "8 reps" },
                  { label: "Push-ups", value: "25 reps" },
                ]}
                history={[60, 62, 63, 65, 65, 67, 65]}
                insights={[
                  "Your strength is improving steadily",
                  "Upper body strength is developing faster than lower body",
                  "Consider adding more leg exercises to your routine",
                ]}
              />

              <StatDetailCard
                title="Endurance"
                grade="B"
                level={75}
                icon={<Activity className="h-6 w-6 text-green-500" />}
                color="text-green-500"
                description="Your ability to sustain prolonged physical activity"
                metrics={[
                  { label: "5K Run Time", value: "25:30 min" },
                  { label: "Max HR Recovery", value: "65 sec" },
                  { label: "Resting HR", value: "62 bpm" },
                  { label: "VO2 Max (est.)", value: "42 ml/kg/min" },
                ]}
                history={[68, 70, 72, 73, 75, 75, 75]}
                insights={[
                  "Your endurance is above average",
                  "Cardio recovery rate has improved by 12% in the last month",
                  "Consistent running has shown positive results",
                ]}
              />

              <StatDetailCard
                title="Agility"
                grade="C"
                level={55}
                icon={<Flame className="h-6 w-6 text-yellow-500" />}
                color="text-yellow-500"
                description="Your ability to change direction quickly and maintain balance"
                metrics={[
                  { label: "Reaction Time", value: "285 ms" },
                  { label: "Shuttle Run", value: "12.5 sec" },
                  { label: "Vertical Jump", value: "45 cm" },
                  { label: "Balance Test", value: "28 sec" },
                ]}
                history={[50, 52, 53, 54, 55, 55, 55]}
                insights={[
                  "Your agility needs the most improvement",
                  "Consider adding plyometric exercises to your routine",
                  "Balance training would be beneficial",
                ]}
              />

              <StatDetailCard
                title="Recovery"
                grade="B-"
                level={70}
                icon={<Heart className="h-6 w-6 text-blue-500" />}
                color="text-blue-500"
                description="Your ability to recuperate after physical exertion"
                metrics={[
                  { label: "Sleep Quality", value: "85%" },
                  { label: "HRV", value: "68 ms" },
                  { label: "Stress Level", value: "Medium" },
                  { label: "Recovery Score", value: "7.2/10" },
                ]}
                history={[65, 67, 68, 69, 70, 70, 70]}
                insights={[
                  "Your recovery rate is good but could be improved",
                  "Sleep quality has been consistent",
                  "Consider adding meditation to reduce stress levels",
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="health">
            <div className="text-center">
              <p className="text-gray-400">Connect your smartwatch to view detailed health metrics</p>
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className="text-center">
              <p className="text-gray-400">Skills tracking will be unlocked at Level 10</p>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="text-center">
              <p className="text-gray-400">Historical data will appear here as you use The System</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function StatDetailCard({ title, grade, level, icon, color, description, metrics, history, insights }) {
  return (
    <Card className="border-gray-700 bg-gray-800">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={color}>{icon}</div>
            <CardTitle>{title}</CardTitle>
          </div>
          <div className={`text-3xl font-bold ${color}`}>{grade}</div>
        </div>
        <p className="text-sm text-gray-400">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-gray-400">Level</span>
            <span className={color}>{level}/100</span>
          </div>
          <div className="h-2 rounded-full bg-gray-700">
            <div className={`h-2 rounded-full ${color.replace("text", "bg")}`} style={{ width: `${level}%` }}></div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="mb-2 text-sm font-medium">Key Metrics</h4>
          <div className="grid grid-cols-2 gap-2">
            {metrics.map((metric, index) => (
              <div key={index} className="rounded bg-gray-700 p-2">
                <p className="text-xs text-gray-400">{metric.label}</p>
                <p className="font-medium">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="mb-2 text-sm font-medium">7-Day Trend</h4>
          <div className="flex h-16 items-end justify-between">
            {history.map((value, index) => (
              <div key={index} className={`w-8 ${color.replace("text", "bg")}`} style={{ height: `${value}%` }}></div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-medium">System Insights</h4>
          <ul className="space-y-1 text-sm">
            {insights.map((insight, index) => (
              <li key={index} className="flex items-start gap-2">
                <Brain className="mt-0.5 h-4 w-4 text-blue-500" />
                <span className="text-gray-300">{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
