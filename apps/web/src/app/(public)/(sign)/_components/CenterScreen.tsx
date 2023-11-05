export interface CenterScreenProps {
  title: string
  children: React.ReactNode
}

export default function CenterScreen({ title, children }) {
  return (
    <div className="flex items-center flex-col justify-center">
      <h2 className="text-3xl font-bold text-center leading-relaxed	">
        {title}
      </h2>
      <div className="pt-10 flex flex-col items-stretch">{children}</div>
    </div>
  )
}
