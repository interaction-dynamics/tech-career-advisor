import Footer from '@/app/_components/Footer'
import Layout from '@/app/_components/Layout'
import Header from '@/app/_components/Header'
import Paddings from '../_components/Paddings'

export default function PublicLayout({ children }) {
  return (
    <Layout
      header={
        <div className="backdrop-blur-md">
          <Header className="m-auto max-w-screen-2xl" />
        </div>
      }
      footer={<Footer />}
    >
      <Paddings>
        <div className="m-auto max-w-screen-xl">{children}</div>
      </Paddings>
    </Layout>
  )
}
