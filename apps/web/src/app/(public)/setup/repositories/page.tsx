import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import GithubRepositoryList from './_components/GithubRepostoryList'

export default async function RepositoriesPage() {
  return (
    <div className="self-stretch">
      <div className="max-w-2xl m-auto">
        <Card>
          <CardHeader>
            <CardTitle>Import Git repositories</CardTitle>
            <CardDescription>
              We will analyze the code from these repositories.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 items-stretch">
              <Select>
                <SelectTrigger className="flex-[1_1_100%]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Search..." />
            </div>
            <div className="rounded-md border mt-3">
              {/* @ts-expect-error Server Component */}
              <GithubRepositoryList />
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  )
}
