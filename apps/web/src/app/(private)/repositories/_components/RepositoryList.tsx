'use client'

import { Input } from '@/components/ui/input'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { mockParsedRepositories } from '@/__mocks__/mockRepositories.mock'
import StatusIndicator from '@/components/molecules/StatusIndicator'

const data = mockParsedRepositories()

export default function RepositoryList() {
  const table = data

  return (
    <div>
      <MaxWidthContainer className="max-w-screen-xl	py-10">
        <div className="flex items-stretch mb-5">
          <Input placeholder="Filter repositories..." className="max-w-xl" />
          <div className="flex-1" />
          <Button>Add Repository</Button>
        </div>
        <div>
          <div className="rounded-md border">
            <Table>
              <TableBody>
                {table.map(repository => (
                  <TableRow key={repository.url}>
                    <TableCell className="pl-5">{repository.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <StatusIndicator status={repository.parsing.status} />
                        <div className="pl-3 pb-1 text-foreground/80 font-light">
                          {repository.parsing.status}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-right pr-3 text-sm text-foreground/50">
                        {repository.parsing.lastRun}
                      </div>
                    </TableCell>
                    <TableCell style={{ width: 30 }} className="pr-5">
                      <div className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <DotsHorizontalIcon className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => {}}>
                              Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>
                              View payment details
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  )
}
