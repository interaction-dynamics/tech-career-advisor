import Link from 'next/link'
import { Separator } from '../../components/ui/separator'

export default function Footer() {
  return (
    <div>
      <Separator></Separator>
      <footer className="py-10 px-5 bg-card">
        <nav className="px-10 flex justify-center items-center space-x-10 text-sm">
          <Link href="/home">Home</Link>
          <Link href="/home">Help</Link>
          <Link href="https://medium.com/interaction-dynamics">Blog</Link>
          <Link href="/home">Changelog</Link>
          <Link href="/home">Pricing</Link>
        </nav>
      </footer>
    </div>
  )
}
