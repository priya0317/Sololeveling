"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Activity,
  Award,
  Brain,
  ChevronLeft,
  ChevronRight,
  Clock,
  Dumbbell,
  Flame,
  Heart,
  Home,
  List,
  Mic,
  Pause,
  Zap,
} from "lucide-react"

export function SmartWatchPreview() {
  const [activeScreen, setActiveScreen] = useState<
    "home" | "stats" | "quests" | "training" | "system" | "heartRate" | "workout"
  >("home")
  const [time, setTime] = useState(() => {
    const now = new Date()
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
    }
  })

  // Update time every minute
  useState(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
      })
    }, 60000)

    return () => clearInterval(interval)
  })

  const formatTime = (hours: number, minutes: number) => {
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        {/* Watch body */}
        <div className="relative h-[400px] w-[350px] rounded-[45px] bg-gray-800 p-6 shadow-xl">
          {/* Watch band top */}
          <div className="absolute -top-20 left-1/2 h-20 w-[100px] -translate-x-1/2 rounded-t-[50px] bg-gray-700"></div>
          {/* Watch band bottom */}
          <div className="absolute -bottom-20 left-1/2 h-20 w-[100px] -translate-x-1/2 rounded-b-[50px] bg-gray-700"></div>

          {/* Watch crown */}
          <div className="absolute -right-3 top-1/2 h-6 w-3 -translate-y-1/2 rounded-r-md bg-gray-600"></div>
          <div className="absolute -right-3 top-[60%] h-6 w-3 -translate-y-1/2 rounded-r-md bg-gray-600"></div>

          {/* Watch screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[35px] bg-black">
            {/* Screen content */}
            <div className="h-full w-full p-3">
              {activeScreen === "home" && (
                <HomeScreen time={formatTime(time.hours, time.minutes)} onNavigate={setActiveScreen} />
              )}
              {activeScreen === "stats" && <StatsScreen onBack={() => setActiveScreen("home")} />}
              {activeScreen === "quests" && <QuestsScreen onBack={() => setActiveScreen("home")} />}
              {activeScreen === "training" && <TrainingScreen onBack={() => setActiveScreen("home")} />}
              {activeScreen === "system" && <SystemScreen onBack={() => setActiveScreen("home")} />}
              {activeScreen === "heartRate" && <HeartRateScreen onBack={() => setActiveScreen("home")} />}
              {activeScreen === "workout" && <WorkoutScreen onBack={() => setActiveScreen("training")} />}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Smartwatch Interface Preview</p>
        <p className="mt-1">Navigate between screens to see different features</p>
      </div>
    </div>
  )
}

interface ScreenProps {
  onBack: () => void
}

interface HomeScreenProps {
  time: string
  onNavigate: (screen: "home" | "stats" | "quests" | "training" | "system" | "heartRate" | "workout") => void
}

function HomeScreen({ time, onNavigate }: HomeScreenProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 text-center text-2xl font-bold text-white">{time}</div>
      <div className="mb-3 flex items-center justify-center gap-2">
        <div className="flex items-center gap-1">
          <Award className="h-4 w-4 text-yellow-500" />
          <span className="text-xs text-white">Lv.7</span>
        </div>
        <div className="flex items-center gap-1">
          <Zap className="h-4 w-4 text-blue-500" />
          <span className="text-xs text-white">1,250 XP</span>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-2">
        <WatchButton
          icon={<Activity className="h-5 w-5 text-green-500" />}
          label="Stats"
          onClick={() => onNavigate("stats")}
        />
        <WatchButton
          icon={<List className="h-5 w-5 text-yellow-500" />}
          label="Quests"
          onClick={() => onNavigate("quests")}
        />
        <WatchButton
          icon={<Dumbbell className="h-5 w-5 text-red-500" />}
          label="Training"
          onClick={() => onNavigate("training")}
        />
        <WatchButton
          icon={<Brain className="h-5 w-5 text-blue-500" />}
          label="System"
          onClick={() => onNavigate("system")}
        />
      </div>

      <div className="mt-2 flex justify-center">
        <WatchButton
          icon={<Heart className="h-5 w-5 text-red-500" />}
          label="Heart Rate"
          onClick={() => onNavigate("heartRate")}
          className="w-full"
        />
      </div>
    </div>
  )
}

function StatsScreen({ onBack }: ScreenProps) {
  return (
    <div className="flex h-full flex-col">
      <WatchHeader title="Stats" onBack={onBack} />

      <div className="flex-1 space-y-2 overflow-y-auto py-1">
        <WatchStatItem icon={<Dumbbell className="h-4 w-4 text-red-500" />} label="Strength" value="C+" progress={65} />
        <WatchStatItem
          icon={<Activity className="h-4 w-4 text-green-500" />}
          label="Endurance"
          value="B"
          progress={75}
        />
        <WatchStatItem icon={<Flame className="h-4 w-4 text-yellow-500" />} label="Agility" value="C" progress={55} />
        <WatchStatItem icon={<Heart className="h-4 w-4 text-blue-500" />} label="Recovery" value="B-" progress={70} />
      </div>

      <div className="mt-2 rounded-lg bg-blue-500/10 p-2">
        <div className="flex items-center gap-1">
          <Brain className="h-3 w-3 text-blue-500" />
          <span className="text-xs text-blue-500">System</span>
        </div>
        <p className="text-[10px] text-white">Your strength has improved by 5% this week.</p>
      </div>
    </div>
  )
}

function QuestsScreen({ onBack }: ScreenProps) {
  return (
    <div className="flex h-full flex-col">
      <WatchHeader title="Quests" onBack={onBack} />

      <div className="flex-1 space-y-2 overflow-y-auto py-1">
        <WatchQuestItem
          icon={<Dumbbell className="h-4 w-4 text-red-500" />}
          title="Morning Workout"
          description="3 sets of exercises"
          progress={0}
          status="pending"
        />
        <WatchQuestItem
          icon={<Activity className="h-4 w-4 text-green-500" />}
          title="10,000 Steps"
          description="Daily walking goal"
          progress={65}
          status="in-progress"
        />
        <WatchQuestItem
          icon={<Heart className="h-4 w-4 text-blue-500" />}
          title="Hydration"
          description="Drink 2L of water"
          progress={50}
          status="in-progress"
        />
        <WatchQuestItem
          icon={<Clock className="h-4 w-4 text-yellow-500" />}
          title="Early Riser"
          description="5 days streak"
          progress={60}
          status="in-progress"
        />
      </div>

      <div className="mt-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full border-blue-500/30 bg-blue-500/10 text-xs text-blue-500 hover:bg-blue-500/20"
        >
          Start Quest
        </Button>
      </div>
    </div>
  )
}

function TrainingScreen({ onBack }: ScreenProps) {
  return (
    <div className="flex h-full flex-col">
      <WatchHeader title="Training" onBack={onBack} />

      <div className="flex-1 space-y-3 py-2">
        <div className="text-center">
          <h3 className="text-sm font-medium text-white">Ready to train?</h3>
          <p className="text-[10px] text-gray-400">Select a workout to begin</p>
        </div>

        <div className="space-y-2">
          <WatchTrainingItem
            icon={<Dumbbell className="h-4 w-4 text-red-500" />}
            title="Strength"
            subtitle="Upper Body"
            onClick={() => {}}
          />
          <WatchTrainingItem
            icon={<Activity className="h-4 w-4 text-green-500" />}
            title="Cardio"
            subtitle="Running"
            onClick={() => {}}
          />
          <WatchTrainingItem
            icon={<Flame className="h-4 w-4 text-yellow-500" />}
            title="HIIT"
            subtitle="Full Body"
            onClick={() => {}}
          />
        </div>
      </div>

      <div className="mt-2">
        <Button variant="default" size="sm" className="w-full bg-blue-600 text-xs hover:bg-blue-700" onClick={() => {}}>
          Start Workout
        </Button>
      </div>
    </div>
  )
}

function SystemScreen({ onBack }: ScreenProps) {
  return (
    <div className="flex h-full flex-col">
      <WatchHeader title="System" onBack={onBack} />

      <div className="flex-1 space-y-2 py-1">
        <div className="rounded-lg bg-blue-500/10 p-2">
          <div className="flex items-center gap-1">
            <Brain className="h-3 w-3 text-blue-500" />
            <span className="text-xs text-blue-500">System</span>
          </div>
          <p className="text-[10px] text-white">
            Good morning, Hunter. Your physical condition has improved by 3% since yesterday.
          </p>
        </div>

        <div className="mt-2 space-y-1">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start border-gray-700 bg-gray-800 text-xs text-white hover:bg-gray-700"
          >
            <Brain className="mr-1 h-3 w-3 text-blue-500" />
            Show today's stats
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start border-gray-700 bg-gray-800 text-xs text-white hover:bg-gray-700"
          >
            <Brain className="mr-1 h-3 w-3 text-blue-500" />
            Recommend workout
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start border-gray-700 bg-gray-800 text-xs text-white hover:bg-gray-700"
          >
            <Brain className="mr-1 h-3 w-3 text-blue-500" />
            Start training mode
          </Button>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-gray-700 bg-gray-800 text-xs text-white hover:bg-gray-700"
        >
          <Mic className="h-3 w-3" />
        </Button>
        <Button variant="default" size="sm" className="flex-1 bg-blue-600 text-xs hover:bg-blue-700">
          Respond
        </Button>
      </div>
    </div>
  )
}

function HeartRateScreen({ onBack }: ScreenProps) {
  return (
    <div className="flex h-full flex-col">
      <WatchHeader title="Heart Rate" onBack={onBack} />

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="relative mb-2 flex h-32 w-32 items-center justify-center rounded-full">
          <div className="absolute inset-0 rounded-full border-4 border-gray-800"></div>
          <div
            className="absolute inset-0 rounded-full border-4 border-red-500"
            style={{
              clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)",
              transform: "rotate(90deg)",
            }}
          ></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">135</div>
            <div className="text-xs text-gray-400">BPM</div>
          </div>
        </div>

        <div className="mt-2 w-full space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-gray-800 p-2">
            <span className="text-xs text-gray-400">Zone</span>
            <span className="text-xs font-medium text-green-500">Aerobic</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-gray-800 p-2">
            <span className="text-xs text-gray-400">Calories</span>
            <span className="text-xs font-medium text-white">245 kcal</span>
          </div>
        </div>
      </div>

      <div className="mt-2 rounded-lg bg-blue-500/10 p-2">
        <div className="flex items-center gap-1">
          <Brain className="h-3 w-3 text-blue-500" />
          <span className="text-xs text-blue-500">System</span>
        </div>
        <p className="text-[10px] text-white">Your heart rate is in the optimal training zone.</p>
      </div>
    </div>
  )
}

function WorkoutScreen({ onBack }: ScreenProps) {
  return (
    <div className="flex h-full flex-col">
      <WatchHeader title="Workout" onBack={onBack} />

      <div className="flex-1">
        <div className="mb-3 text-center">
          <h3 className="text-sm font-medium text-white">Strength Training</h3>
          <p className="text-[10px] text-gray-400">Upper Body Focus</p>
        </div>

        <div className="mb-3 flex items-center justify-between">
          <div className="text-center">
            <div className="text-xs text-gray-400">Time</div>
            <div className="text-sm font-medium text-white">32:45</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400">HR</div>
            <div className="text-sm font-medium text-red-500">135</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400">Cals</div>
            <div className="text-sm font-medium text-white">245</div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-2">
          <div className="mb-1 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Dumbbell className="h-3 w-3 text-red-500" />
              <span className="text-xs font-medium text-white">Bench Press</span>
            </div>
            <span className="text-[10px] text-gray-400">Set 2/4</span>
          </div>
          <div className="mb-1">
            <Progress value={35} className="h-1 bg-gray-700" indicatorClassName="bg-blue-500" />
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-gray-400">Rest: 45s</span>
            <span className="text-gray-400">8-10 reps @ 60kg</span>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full border-gray-700 bg-gray-800 hover:bg-gray-700"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="default" size="icon" className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700">
          <Pause className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full border-gray-700 bg-gray-800 hover:bg-gray-700"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

interface WatchHeaderProps {
  title: string
  onBack: () => void
}

function WatchHeader({ title, onBack }: WatchHeaderProps) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <Button variant="ghost" size="icon" className="h-6 w-6 p-0 text-white hover:bg-gray-800" onClick={onBack}>
        <Home className="h-4 w-4" />
      </Button>
      <h2 className="text-xs font-medium text-white">{title}</h2>
      <div className="h-6 w-6"></div> {/* Spacer for alignment */}
    </div>
  )
}

interface WatchButtonProps {
  icon: React.ReactNode
  label: string
  onClick: () => void
  className?: string
}

function WatchButton({ icon, label, onClick, className }: WatchButtonProps) {
  return (
    <Button
      variant="outline"
      className={`flex h-auto flex-col items-center justify-center gap-1 border-gray-700 bg-gray-800 p-2 hover:bg-gray-700 ${
        className || ""
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-[10px] text-white">{label}</span>
    </Button>
  )
}

interface WatchStatItemProps {
  icon: React.ReactNode
  label: string
  value: string
  progress: number
}

function WatchStatItem({ icon, label, value, progress }: WatchStatItemProps) {
  return (
    <div className="rounded-lg bg-gray-800 p-2">
      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {icon}
          <span className="text-xs text-white">{label}</span>
        </div>
        <span className="text-xs font-medium text-white">{value}</span>
      </div>
      <Progress value={progress} className="h-1 bg-gray-700" indicatorClassName="bg-blue-500" />
    </div>
  )
}

interface WatchQuestItemProps {
  icon: React.ReactNode
  title: string
  description: string
  progress: number
  status: "pending" | "in-progress" | "completed"
}

function WatchQuestItem({ icon, title, description, progress, status }: WatchQuestItemProps) {
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-blue-500"
      case "pending":
        return "bg-yellow-500"
    }
  }

  return (
    <div className="rounded-lg bg-gray-800 p-2">
      <div className="mb-1 flex items-center gap-1">
        {icon}
        <div>
          <div className="text-xs text-white">{title}</div>
          <div className="text-[10px] text-gray-400">{description}</div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="flex-1">
          <Progress value={progress} className="h-1 bg-gray-700" indicatorClassName={getStatusColor()} />
        </div>
        <span className="text-[10px] text-gray-400">{progress}%</span>
      </div>
    </div>
  )
}

interface WatchTrainingItemProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  onClick: () => void
}

function WatchTrainingItem({ icon, title, subtitle, onClick }: WatchTrainingItemProps) {
  return (
    <Button
      variant="outline"
      className="flex w-full items-center justify-between border-gray-700 bg-gray-800 p-2 text-left hover:bg-gray-700"
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {icon}
        <div>
          <div className="text-xs font-medium text-white">{title}</div>
          <div className="text-[10px] text-gray-400">{subtitle}</div>
        </div>
      </div>
      <ChevronRight className="h-3 w-3 text-gray-400" />
    </Button>
  )
}
