import classNames from 'classnames'

interface MaxWidthContainerProps {
  children?: React.ReactNode
  className?: string
}

export default function MaxWidthContainer({
  children,
  className,
}: MaxWidthContainerProps) {
  return (
    <div className={classNames('m-auto px-3 md:px-10', className)}>
      {children}
    </div>
  )
}
