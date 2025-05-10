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
  Filter,
  Plus,
  Calendar,
  Trophy,
} from "lucide-react"
import { QuestCard } from "@/components/quest-card"

export default function QuestsPage() {
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
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Quests & Challenges</h1>
            <p className="text-gray-400">Complete quests to gain XP and improve your stats</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-gray-700 bg-gray-800 hover:bg-gray-700">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Custom Quest
            </Button>
          </div>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-4">
            <TabsTrigger value="active">Active Quests</TabsTrigger>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-gray-700 bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    Today's Quests
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                    icon={<Heart className="h-5 w-5 text-blue-500" />}
                  />
                </CardContent>
              </Card>

              <Card className="border-gray-700 bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Weekly Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                  <QuestCard
                    title="Consistency Challenge"
                    description="Complete all daily quests for 5 consecutive days"
                    reward="200 XP + Badge"
                    difficulty="Hard"
                    progress={60}
                    status="in-progress"
                    icon={<Award className="h-5 w-5 text-purple-500" />}
                  />
                </CardContent>
              </Card>
            </div>

            <Card className="border-gray-700 bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-blue-500" />
                  Special Quests
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <QuestCard
                  title="Shadow Training"
                  description="Complete a high-intensity interval training session"
                  reward="100 XP + 2 AGI + 1 END"
                  difficulty="Hard"
                  progress={0}
                  status="pending"
                  icon={<Flame className="h-5 w-5 text-orange-500" />}
                />
                <QuestCard
                  title="Recovery Day"
                  description="Focus on stretching, meditation, and proper nutrition"
                  reward="75 XP + 3 REC"
                  difficulty="Normal"
                  progress={0}
                  status="pending"
                  icon={<Heart className="h-5 w-5 text-blue-500" />}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="daily">
            <div className="grid gap-6 md:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <QuestCard
                  key={index}
                  title={
                    [
                      "Morning Workout",
                      "Hydration Goal",
                      "Meditation Session",
                      "Protein Intake",
                      "Posture Check",
                      "Evening Walk",
                    ][index]
                  }
                  description={
                    [
                      "Complete a 20-minute workout routine",
                      "Drink 2 liters of water throughout the day",
                      "Complete a 10-minute guided meditation",
                      "Consume at least 100g of protein today",
                      "Maintain proper posture during work hours",
                      "Take a 30-minute walk after dinner",
                    ][index]
                  }
                  reward={
                    ["30 XP + 1 STR", "20 XP + 1 REC", "25 XP + 1 REC", "25 XP + 1 STR", "15 XP", "25 XP + 1 END"][
                      index
                    ]
                  }
                  difficulty={["Normal", "Easy", "Easy", "Normal", "Easy", "Easy"][index]}
                  progress={[0, 50, 0, 30, 70, 0][index]}
                  status={["pending", "in-progress", "pending", "in-progress", "in-progress", "pending"][index]}
                  icon={
                    [
                      <Dumbbell key={0} className="h-5 w-5 text-red-500" />,
                      <Heart key={1} className="h-5 w-5 text-blue-500" />,
                      <Brain key={2} className="h-5 w-5 text-purple-500" />,
                      <Dumbbell key={3} className="h-5 w-5 text-red-500" />,
                      <Activity key={4} className="h-5 w-5 text-green-500" />,
                      <Activity key={5} className="h-5 w-5 text-green-500" />,
                    ][index]
                  }
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weekly">
            <div className="grid gap-6 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <QuestCard
                  key={index}
                  title={
                    ["Weekly Running Goal", "Strength Milestone", "Consistency Challenge", "Skill Development"][index]
                  }
                  description={
                    [
                      "Run a total of 20km this week",
                      "Increase your max bench press by 5kg",
                      "Complete all daily quests for 5 consecutive days",
                      "Learn a new exercise technique",
                    ][index]
                  }
                  reward={["150 XP + 3 END", "100 XP + 2 STR", "200 XP + Badge", "75 XP + 1 AGI"][index]}
                  difficulty={["Hard", "Normal", "Hard", "Normal"][index]}
                  progress={[35, 0, 60, 50][index]}
                  status={["in-progress", "pending", "in-progress", "in-progress"][index]}
                  icon={
                    [
                      <Activity key={0} className="h-5 w-5 text-green-500" />,
                      <Dumbbell key={1} className="h-5 w-5 text-red-500" />,
                      <Award key={2} className="h-5 w-5 text-purple-500" />,
                      <Brain key={3} className="h-5 w-5 text-blue-500" />,
                    ][index]
                  }
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid gap-6 md:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <QuestCard
                  key={index}
                  title={
                    [
                      "Early Riser",
                      "Marathon Runner",
                      "Strength Master",
                      "Perfect Week",
                      "Meditation Guru",
                      "Endurance Champion",
                    ][index]
                  }
                  description={
                    [
                      "Wake up before 6 AM for 5 consecutive days",
                      "Complete a half-marathon distance",
                      "Bench press 1.5x your body weight",
                      "Complete all daily and weekly quests for an entire week",
                      "Complete 50 meditation sessions",
                      "Run 5km in under 25 minutes",
                    ][index]
                  }
                  reward={
                    [
                      "Badge + 50 XP",
                      "Badge + 200 XP",
                      "Badge + 150 XP",
                      "Badge + 300 XP",
                      "Badge + 100 XP",
                      "Badge + 150 XP",
                    ][index]
                  }
                  difficulty={["Normal", "Hard", "Hard", "Hard", "Normal", "Hard"][index]}
                  progress={[60, 0, 0, 0, 30, 50][index]}
                  status={["in-progress", "locked", "locked", "locked", "in-progress", "in-progress"][index]}
                  icon={
                    [
                      <Clock key={0} className="h-5 w-5 text-yellow-500" />,
                      <Award key={1} className="h-5 w-5 text-purple-500" />,
                      <Dumbbell key={2} className="h-5 w-5 text-red-500" />,
                      <Trophy key={3} className="h-5 w-5 text-yellow-500" />,
                      <Brain key={4} className="h-5 w-5 text-purple-500" />,
                      <Activity key={5} className="h-5 w-5 text-green-500" />,
                    ][index]
                  }
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
