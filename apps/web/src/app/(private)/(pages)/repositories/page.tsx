import SectionTitle from '../../_components/SectionTitle'
import AddRepositoryButton from './_components/AddRepositoryButton'
import RepositoryList from './_components/RepositoryList'

export default function DashboardPage() {
  return (
    <>
      <SectionTitle title="Repositories">
        <AddRepositoryButton />
      </SectionTitle>
      <RepositoryList />
    </>
  )
}
