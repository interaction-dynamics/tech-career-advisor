import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ProfileSelector from './_components/ProfileSelector'

export default function ProfilePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Select your target role</CardTitle>
        <CardDescription>
          Your code will be analyzed to check if it matches the role you are
          targeting.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProfileSelector />
      </CardContent>
      <CardFooter>
        <p className="text-xs text-foreground/50">
          Why only these frontend roles are available?
        </p>
      </CardFooter>
    </Card>
  )
}
