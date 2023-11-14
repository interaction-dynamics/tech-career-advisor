'use client'

export default function RealtimeRepositoryList() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <Spinner className="h-5 w-5 text-white" />
            <div className="pl-2">loading results...</div>
          </div>
        </div>
      }
    >
      <div className="rounded-md border flex-1 flex flex-col items-stretch justify-stretch">
        {/* @ts-expect-error Server Component */}
        <RepositoryListWrapper />
      </div>
    </Suspense>
  )
}
