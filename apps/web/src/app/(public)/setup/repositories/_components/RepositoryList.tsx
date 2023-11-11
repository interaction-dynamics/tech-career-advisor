import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import Repository from '@/types/Repository'
import RepositoryProviderIcon from '@/app/_components/RepositoryProviderIcon'
import ImportRepositoryButton from './ImportRepositoryButton'

export interface RepositoryListProps {
  repositories: Repository[]
}

export default function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <Table>
      <TableBody>
        {repositories.map(repository => (
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
  )
}
