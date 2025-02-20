import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SafetySpot</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:underline">
                  Map
                </Link>
              </li>
              <li>
                <Link href="/report" className="hover:underline">
                  Report Hazard
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:underline">
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to SafetySpot</h2>
          <p className="text-xl mb-6">AI-powered crowdsourced platform revolutionizing community safety management</p>
          <Button asChild>
            <Link href="/map">Explore Safety Map</Link>
          </Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Report Hazards</h3>
            <p>Submit geotagged photos of safety issues in your community.</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">AI Classification</h3>
            <p>Our algorithm automatically classifies and prioritizes reported hazards.</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Community Voting</h3>
            <p>Vote on issues to help prioritize resource allocation.</p>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SafetySpot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

