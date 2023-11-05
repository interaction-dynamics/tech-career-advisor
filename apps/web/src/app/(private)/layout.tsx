import Footer from '@/app/_components/Footer'
import Layout from '@/app/_components/Layout'
import Header from '../_components/Header'
import PrivateNavigation from './_components/PrivateNavigation'

export default function PrivateLayout({ children }) {
  return (
    <Layout
      header={
        <div className="bg-background">
          <Header
            className="m-auto max-w-screen-2xl"
            navigation={<PrivateNavigation />}
          />
        </div>
      }
      footer={<Footer />}
    >
      <div className="pt-20">{children}</div>
    </Layout>
  )
}
