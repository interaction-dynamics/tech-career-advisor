import Footer from '@/app/_components/Footer'
import Layout from '@/app/_components/Layout'
import PrivateHeader from './_components/PrivateHeader'

export default function PrivateLayout({ children }) {
  return (
    <Layout header={<PrivateHeader />} footer={<Footer />}>
      <div className="pt-14">{children}</div>
    </Layout>
  )
}
