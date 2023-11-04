export default function SetupLayout({ children }) {
  return (
    <div className="min-h-screen pt-20 flex justify-center items-stretch flex-col">
      <div>
        <div className="max-w-2xl m-auto py-10">
          <h2 className="text-3xl font-bold mb-10">
            Let's setup your profile.
          </h2>
          {children}
        </div>
      </div>
    </div>
  )
}
