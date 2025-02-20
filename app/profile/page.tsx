import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  // This would typically come from a database
  const user = {
    name: "John Doe",
    email: "john@example.com",
    reportsSubmitted: 15,
    upvotesReceived: 42,
    level: 3,
    experience: 75,
    badges: ["First Report", "Community Hero", "Eagle Eye"],
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-secondary p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-4">{user.email}</p>
        <p>Reports Submitted: {user.reportsSubmitted}</p>
        <p>Upvotes Received: {user.upvotesReceived}</p>
      </div>
      <div className="bg-secondary p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-2">Level {user.level}</h3>
        <Progress value={user.experience} className="mb-2" />
        <p>{user.experience}/100 XP to next level</p>
      </div>
      <div className="bg-secondary p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Badges</h3>
        <div className="flex flex-wrap gap-2">
          {user.badges.map((badge) => (
            <Button key={badge} variant="outline">
              {badge}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

