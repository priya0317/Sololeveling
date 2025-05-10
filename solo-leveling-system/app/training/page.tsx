import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  Award,
  Brain,
  Clock,
  Dumbbell,
  Flame,
  Heart,
  Zap,
  Pause,
  SkipForward,
  Volume2,
  Plus,
} from "lucide-react"

export default function TrainingPage() {
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
          <h1 className="text-3xl font-bold">Training Mode</h1>
          <p className="text-gray-400">Real-time tracking and guidance for your workouts</p>
        </div>

        <Tabs defaultValue="workout" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-3">
            <TabsTrigger value="workout">Workout</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="workout">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="border-gray-700 bg-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Dumbbell className="h-5 w-5 text-red-500" />
                      Active Workout
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 text-center">
                      <h2 className="mb-2 text-2xl font-bold">Strength Training: Upper Body</h2>
                      <p className="text-gray-400">Focus on chest, shoulders, and arms</p>
                    </div>

                    <div className="mb-6">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-blue-500" />
                          <span className="text-xl font-medium">32:45</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Flame className="h-5 w-5 text-orange-500" />
                          <span className="text-xl font-medium">245 kcal</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="h-5 w-5 text-red-500" />
                          <span className="text-xl font-medium">135 bpm</span>
                        </div>
                      </div>

                      <div className="flex justify-center gap-4">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-12 w-12 rounded-full border-gray-600 bg-gray-700 hover:bg-gray-600"
                        >
                          <SkipForward className="h-6 w-6" />
                        </Button>
                        <Button size="icon" className="h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-700">
                          <Pause className="h-8 w-8" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-12 w-12 rounded-full border-gray-600 bg-gray-700 hover:bg-gray-600"
                        >
                          <Volume2 className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Current Exercise: Bench Press</h3>

                      <div className="rounded-lg bg-gray-700 p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Set 2 of 4</h4>
                            <p className="text-sm text-gray-400">8-10 reps at 60kg</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">Rest</p>
                            <p className="text-sm text-gray-400">45 seconds remaining</p>
                          </div>
                        </div>

                        <div className="h-2 rounded-full bg-gray-600">
                          <div className="h-2 rounded-full bg-blue-500" style={{ width: "35%" }}></div>
                        </div>
                      </div>

                      <div className="rounded-lg bg-gray-900 p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <Brain className="h-5 w-5 text-blue-500" />
                          <h4 className="font-medium">System Feedback</h4>
                        </div>
                        <p className="text-gray-300">
                          Your form was excellent on the last set. Maintain the same tempo for the next set, focusing on
                          full range of motion. Your heart rate is in the optimal zone.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Coming Up Next</h4>
                        <div className="grid grid-cols-3 gap-2">
                          <ExerciseCard
                            name="Incline Dumbbell Press"
                            sets="3 sets"
                            reps="10 reps"
                            icon={<Dumbbell className="h-5 w-5 text-red-500" />}
                          />
                          <ExerciseCard
                            name="Shoulder Press"
                            sets="3 sets"
                            reps="12 reps"
                            icon={<Dumbbell className="h-5 w-5 text-red-500" />}
                          />
                          <ExerciseCard
                            name="Tricep Extensions"
                            sets="3 sets"
                            reps="15 reps"
                            icon={<Dumbbell className="h-5 w-5 text-red-500" />}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="mb-6 border-gray-700 bg-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-green-500" />
                      Real-time Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <StatItem
                        label="Heart Rate"
                        value="135 bpm"
                        status="optimal"
                        icon={<Heart className="h-5 w-5 text-red-500" />}
                      />
                      <StatItem
                        label="Calories"
                        value="245 kcal"
                        status="good"
                        icon={<Flame className="h-5 w-5 text-orange-500" />}
                      />
                      <StatItem
                        label="Duration"
                        value="32:45"
                        status="normal"
                        icon={<Clock className="h-5 w-5 text-blue-500" />}
                      />
                      <StatItem
                        label="Sets Completed"
                        value="5 / 16"
                        status="normal"
                        icon={<Dumbbell className="h-5 w-5 text-red-500" />}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-700 bg-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-blue-500" />
                      System Coach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 rounded-lg bg-gray-900 p-4">
                      <p className="text-gray-300">
                        "Your form is excellent today. I notice your right shoulder has better stability than last
                        session. For the next exercise, focus on controlled eccentric movement."
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-medium">Workout Insights</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Brain className="mt-0.5 h-4 w-4 text-blue-500" />
                          <span className="text-gray-300">Your strength is 5% higher than last session</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Brain className="mt-0.5 h-4 w-4 text-blue-500" />
                          <span className="text-gray-300">Recovery between sets is improving</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Brain className="mt-0.5 h-4 w-4 text-blue-500" />
                          <span className="text-gray-300">Consider increasing weight by 2.5kg next session</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-medium">Voice Commands</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-700 bg-gray-700 text-xs hover:bg-gray-600"
                        >
                          "Next exercise"
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-700 bg-gray-700 text-xs hover:bg-gray-600"
                        >
                          "Start timer"
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-700 bg-gray-700 text-xs hover:bg-gray-600"
                        >
                          "Log set"
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-700 bg-gray-700 text-xs hover:bg-gray-600"
                        >
                          "Form check"
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="programs">
            <div className="grid gap-6 md:grid-cols-3">
              <WorkoutProgramCard
                title="Strength Builder"
                description="Focus on building raw strength and power"
                level="Intermediate"
                duration="8 weeks"
                frequency="4x per week"
                focus="Strength"
                icon={<Dumbbell className="h-6 w-6 text-red-500" />}
              />
              <WorkoutProgramCard
                title="Endurance Master"
                description="Improve cardiovascular fitness and stamina"
                level="All Levels"
                duration="6 weeks"
                frequency="5x per week"
                focus="Endurance"
                icon={<Activity className="h-6 w-6 text-green-500" />}
              />
              <WorkoutProgramCard
                title="Agility & Speed"
                description="Enhance reaction time and explosive power"
                level="Advanced"
                duration="4 weeks"
                frequency="3x per week"
                focus="Agility"
                icon={<Flame className="h-6 w-6 text-yellow-500" />}
              />
              <WorkoutProgramCard
                title="Recovery Focus"
                description="Optimize recovery and prevent injuries"
                level="All Levels"
                duration="4 weeks"
                frequency="7x per week"
                focus="Recovery"
                icon={<Heart className="h-6 w-6 text-blue-500" />}
              />
              <WorkoutProgramCard
                title="Full Body Recomp"
                description="Balanced approach to strength and endurance"
                level="Beginner"
                duration="12 weeks"
                frequency="5x per week"
                focus="Balanced"
                icon={<Award className="h-6 w-6 text-purple-500" />}
              />
              <div className="flex items-center justify-center rounded-xl border border-dashed border-gray-700 p-6">
                <div className="text-center">
                  <Plus className="mx-auto mb-2 h-8 w-8 text-gray-500" />
                  <p className="text-gray-500">Custom Program</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="text-center">
              <p className="text-gray-400">Connect your smartwatch to view your workout history</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function ExerciseCard({ name, sets, reps, icon }) {
  return (
    <div className="rounded-lg bg-gray-700 p-3">
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <h4 className="text-sm font-medium">{name}</h4>
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>{sets}</span>
        <span>{reps}</span>
      </div>
    </div>
  )
}

function StatItem({ label, value, status, icon }) {
  const getStatusColor = () => {
    switch (status) {
      case "optimal":
        return "text-green-500"
      case "good":
        return "text-blue-500"
      case "warning":
        return "text-yellow-500"
      case "danger":
        return "text-red-500"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="rounded-lg bg-gray-700 p-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="text-sm font-medium">{label}</h4>
        </div>
        <span className="font-medium">{value}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">Status</span>
        <span className={`text-xs ${getStatusColor()}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
      </div>
    </div>
  )
}

function WorkoutProgramCard({ title, description, level, duration, frequency, focus, icon }) {
  return (
    <Card className="border-gray-700 bg-gray-800 transition-all hover:border-gray-600 hover:bg-gray-750">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700">{icon}</div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>

        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Level:</span>
            <span>{level}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Duration:</span>
            <span>{duration}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Frequency:</span>
            <span>{frequency}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Focus:</span>
            <span>{focus}</span>
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">View Program</Button>
      </CardContent>
    </Card>
  )
}
