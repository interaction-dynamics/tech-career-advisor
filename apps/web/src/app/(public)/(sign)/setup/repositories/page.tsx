import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AddRepostory from '@/app/_components/AddRepository/AddRepository'
import Link from 'next/link'

export default async function RepositoriesPage() {
  return (
    <div className="min-h-screen pt-20 flex justify-center items-stretch flex-col">
      <div>
        <div className="max-w-2xl m-auto py-10">
          <h2 className="text-3xl font-bold mb-10">
            {"Let's setup your profile."}
          </h2>
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
                  {/* @ts-expect-error Server Component */}
                  <AddRepostory />
                  <div className="flex pt-4 justify-end">
                    <Button variant="outline" asChild>
                      <Link href="/dashboard">Continue</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
