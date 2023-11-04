import { GeistSans } from 'geist/font'

import './globals.css'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(GeistSans.variable, 'min-h-max font-sans')}>
        {children}
      </body>
    </html>
  )
}
