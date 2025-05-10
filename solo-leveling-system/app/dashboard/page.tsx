import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Award, Brain, Clock, Heart, Zap, BarChart3, Dumbbell, Flame, Droplets } from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { QuestCard } from "@/components/quest-card"
import { SystemChat } from "@/components/system-chat"

export default function Dashboard() {
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
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-400" />
            <span className="text-gray-400">Last synced: 10 minutes ago</span>
          </div>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <StatCard
            title="Strength"
            value="C+"
            icon={<Dumbbell className="h-5 w-5" />}
            progress={65}
            change="+5% this week"
            color="text-red-500"
          />
          <StatCard
            title="Endurance"
            value="B"
            icon={<Activity className="h-5 w-5" />}
            progress={75}
            change="+2% this week"
            color="text-green-500"
          />
          <StatCard
            title="Agility"
            value="C"
            icon={<Flame className="h-5 w-5" />}
            progress={55}
            change="+1% this week"
            color="text-yellow-500"
          />
          <StatCard
            title="Recovery"
            value="B-"
            icon={<Heart className="h-5 w-5" />}
            progress={70}
            change="+3% this week"
            color="text-blue-500"
          />
        </div>

        <div className="mb-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Tabs defaultValue="daily" className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-3">
                <TabsTrigger value="daily">Daily Quests</TabsTrigger>
                <TabsTrigger value="weekly">Weekly Goals</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              <TabsContent value="daily" className="space-y-4">
                <QuestCard
                  title="Morning Strength Training"
                  description="Complete 3 sets of push-ups, pull-ups, and squats"
                  reward="50 XP + 2 STR"
                  difficulty="Normal"
                  progress={0}
                  status="pending"
                  icon={<Dumbbell className="h-5 w-5 text-red-500" />}
                />
                <QuestCard
                  title="10,000 Steps Challenge"
                  description="Walk at least 10,000 steps today"
                  reward="30 XP + 1 END"
                  difficulty="Easy"
                  progress={65}
                  status="in-progress"
                  icon={<Activity className="h-5 w-5 text-green-500" />}
                />
                <QuestCard
                  title="Hydration Quest"
                  description="Drink 2 liters of water throughout the day"
                  reward="20 XP + 1 REC"
                  difficulty="Easy"
                  progress={50}
                  status="in-progress"
                  icon={<Droplets className="h-5 w-5 text-blue-500" />}
                />
              </TabsContent>
              <TabsContent value="weekly" className="space-y-4">
                <QuestCard
                  title="Weekly Running Goal"
                  description="Run a total of 20km this week"
                  reward="150 XP + 3 END"
                  difficulty="Hard"
                  progress={35}
                  status="in-progress"
                  icon={<Activity className="h-5 w-5 text-green-500" />}
                />
                <QuestCard
                  title="Strength Milestone"
                  description="Increase your max bench press by 5kg"
                  reward="100 XP + 2 STR"
                  difficulty="Normal"
                  progress={0}
                  status="pending"
                  icon={<Dumbbell className="h-5 w-5 text-red-500" />}
                />
              </TabsContent>
              <TabsContent value="achievements" className="space-y-4">
                <QuestCard
                  title="Early Riser"
                  description="Wake up before 6 AM for 5 consecutive days"
                  reward="Badge + 50 XP"
                  difficulty="Normal"
                  progress={60}
                  status="in-progress"
                  icon={<Clock className="h-5 w-5 text-yellow-500" />}
                />
                <QuestCard
                  title="Marathon Runner"
                  description="Complete a half-marathon distance"
                  reward="Badge + 200 XP"
                  difficulty="Hard"
                  progress={0}
                  status="locked"
                  icon={<Award className="h-5 w-5 text-purple-500" />}
                />
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="border-gray-700 bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-blue-500" />
                  Level Progress
                </CardTitle>
                <CardDescription>750 XP to Level 8</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Level 7</span>
                    <span className="text-sm text-gray-400">Level 8</span>
                  </div>
                  <Progress value={62} className="h-3 bg-gray-700" indicatorClassName="bg-blue-500" />
                  <div className="mt-2 text-center text-sm text-gray-400">1,250 / 2,000 XP (62%)</div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-700 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Today's XP</span>
                      </div>
                      <span className="text-sm font-medium">+85 XP</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-700 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">Weekly Average</span>
                      </div>
                      <span className="text-sm font-medium">+120 XP/day</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="border-gray-700 bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  Activity Timeline
                </CardTitle>
                <CardDescription>Your recent activities and stats</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <TimelineItem
                    time="8:30 AM"
                    title="Morning Run"
                    description="5.2 km in 28 minutes"
                    stats={[
                      { label: "Pace", value: "5:23 min/km" },
                      { label: "Heart Rate", value: "142 bpm" },
                      { label: "Calories", value: "320 kcal" },
                    ]}
                    icon={<Activity className="h-5 w-5 text-green-500" />}
                  />
                  <TimelineItem
                    time="12:15 PM"
                    title="Strength Training"
                    description="Upper body workout"
                    stats={[
                      { label: "Duration", value: "45 min" },
                      { label: "Sets", value: "12" },
                      { label: "Calories", value: "280 kcal" },
                    ]}
                    icon={<Dumbbell className="h-5 w-5 text-red-500" />}
                  />
                  <TimelineItem
                    time="3:45 PM"
                    title="Walking"
                    description="Afternoon walk break"
                    stats={[
                      { label: "Steps", value: "2,450" },
                      { label: "Distance", value: "1.8 km" },
                      { label: "Duration", value: "22 min" },
                    ]}
                    icon={<Activity className="h-5 w-5 text-blue-500" />}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <SystemChat />
          </div>
        </div>
      </main>
    </div>
  )
}

function TimelineItem({ time, title, description, stats, icon }) {
  return (
    <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">{icon}</div>
          <div>
            <h4 className="font-medium">{title}</h4>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
        <span className="text-sm text-gray-400">{time}</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {stats.map((stat, index) => (
          <div key={index} className="rounded bg-gray-800 p-2 text-center">
            <p className="text-xs text-gray-400">{stat.label}</p>
            <p className="text-sm font-medium">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
