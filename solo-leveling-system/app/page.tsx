import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Activity, Award, Brain, Calendar, Zap, Watch } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl font-bold">The System</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link href="/dashboard" className="hover:text-blue-400">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/quests" className="hover:text-blue-400">
                  Quests
                </Link>
              </li>
              <li>
                <Link href="/stats" className="hover:text-blue-400">
                  Stats
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-blue-400">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/smartwatch" className="hover:text-blue-400">
                  Smartwatch
                </Link>
              </li>
            </ul>
          </nav>
          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-950">
            Connect Watch
          </Button>
        </div>
      </header>

      <main className="container mx-auto flex-1 py-12">
        <section className="mb-20 text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight">
            <span className="text-blue-500">Level Up</span> Your Life
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            An AI-powered fitness system that tracks your stats, assigns quests, and helps you become the strongest
            version of yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dashboard">
              <Button className="bg-blue-600 px-6 py-6 text-lg hover:bg-blue-700">
                Enter The System <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/smartwatch">
              <Button variant="outline" className="border-gray-600 px-6 py-6 text-lg hover:bg-gray-800">
                <Watch className="mr-2 h-5 w-5" /> View Smartwatch
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Core Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Activity className="h-10 w-10 text-blue-500" />}
              title="Stat Tracking"
              description="Monitor your physical stats like strength, endurance, and agility through smartwatch integration."
            />
            <FeatureCard
              icon={<Calendar className="h-10 w-10 text-blue-500" />}
              title="Daily Quests"
              description="Receive personalized quests and tasks based on your goals and current abilities."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-blue-500" />}
              title="Level System"
              description="Gain XP and level up as you complete quests and improve your physical abilities."
            />
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-blue-500" />}
              title="AI Coaching"
              description="Get real-time feedback and personalized training plans from your AI assistant."
            />
          </div>
        </section>

        <section className="rounded-xl bg-gray-800 p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Ready to Arise?</h2>
              <p className="mb-6 text-gray-300">
                Connect your smartwatch, set your goals, and let The System guide you to becoming the strongest hunter
                you can be.
              </p>
              <Link href="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-40 w-40 rounded-full bg-blue-900/30 p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-blue-500/20 p-4">
                    <div className="h-full w-full rounded-full bg-blue-500/40 p-4">
                      <div className="h-full w-full rounded-full bg-blue-500/60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} The System - Inspired by Solo Leveling</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-xl bg-gray-800 p-6 transition-all hover:bg-gray-700">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
