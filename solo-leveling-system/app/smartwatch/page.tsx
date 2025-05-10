import { SmartWatchPreview } from "@/components/smartwatch-preview"

export default function SmartWatchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto py-12">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold">The System: Smartwatch</h1>
          <p className="text-xl text-gray-400">Your Solo Leveling companion on your wrist</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <SmartWatchPreview />
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">Smartwatch Features</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Real-time Stat Tracking"
              description="Monitor your strength, endurance, agility, and recovery stats directly from your wrist."
            />
            <FeatureCard
              title="Quest Management"
              description="View and manage your daily quests and achievements without pulling out your phone."
            />
            <FeatureCard
              title="Training Mode"
              description="Start workouts, track sets and reps, and get real-time feedback during your training."
            />
            <FeatureCard
              title="System AI Assistant"
              description="Communicate with your AI coach through voice commands or quick responses."
            />
            <FeatureCard
              title="Biometric Monitoring"
              description="Track heart rate, calories burned, and other vital stats during activities."
            />
            <FeatureCard
              title="Notifications"
              description="Receive quest alerts, achievement notifications, and training reminders."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }) {
  return (
    <div className="rounded-xl bg-gray-800 p-6 transition-all hover:bg-gray-700">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
