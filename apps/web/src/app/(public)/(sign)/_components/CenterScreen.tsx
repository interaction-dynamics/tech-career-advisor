export interface CenterScreenProps {
  title: React.ReactNode
  children: React.ReactNode
}

export default function CenterScreen({ title, children }) {
  return (
    <div className="flex items-stretch flex-col justify-center">
      <h2 className="text-4xl font-bold text-center leading-snug">{title}</h2>
      <div className="py-10 flex flex-col items-stretch">{children}</div>
    </div>
  )
}
