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
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { mockRepositories } from '@/__mocks__/mockRepositories.mock'
import RepositoryProviderIcon from '@/app/_components/RepositoryProviderIcon'
import ImportRepositoryButton from './_components/ImportRepositoryButton'

const data = mockRepositories()

export default function RepositoriesPage() {
  const table = data

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
              <Table>
                <TableBody>
                  {table.map(repository => (
                    <TableRow key={repository.url}>
                      <TableCell width={10} className="py-3 pl-3">
                        <RepositoryProviderIcon
                          providerName={repository.provider}
                          className="h-5 w-5"
                        />
                      </TableCell>
                      <TableCell className="py-3">{repository.name}</TableCell>
                      <TableCell className="py-3 pr-3">
                        <div className="text-right">
                          <ImportRepositoryButton />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  )
}
