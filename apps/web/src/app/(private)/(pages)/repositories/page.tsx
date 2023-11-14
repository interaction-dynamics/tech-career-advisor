import { Button } from '@/components/ui/button'
import SectionTitle from '../../_components/SectionTitle'
import RepositoryList from './_components/RepositoryList'

export default function DashboardPage() {
  return (
    <>
      <SectionTitle title="Repositories">
        <Button>Add Repository</Button>
      </SectionTitle>
      <RepositoryList />
    </>
  )
}
