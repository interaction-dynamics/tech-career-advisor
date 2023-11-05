import { GeistSans } from 'geist/font'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import { cn } from '@/lib/utils'
import { title } from './_components/Logo'

export const metadata = {
  title,
  description: 'The best tech career advisor',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={cn(GeistSans.variable, 'min-h-max font-sans')}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
