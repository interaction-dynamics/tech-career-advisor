import Link from 'next/link'

export const title = 'tech_Advisor'

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="font-bold sm:inline-block">{title}</h1>
    </Link>
  )
}
