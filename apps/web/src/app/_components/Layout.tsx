export interface LayoutProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
}

export default function Layout({ header, footer, children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-x-0">{header}</div>
      <div className="flex-1">{children}</div>
      {footer}
    </div>
  )
}
