import AddRepostory from '@/app/_components/AddRepository/AddRepository'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function AddRepositoryButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Repository</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Git repositories</DialogTitle>
          <DialogDescription>
            We will analyze the code from these repositories.
          </DialogDescription>
        </DialogHeader>
        {/* @ts-expect-error Server Component */}
        <AddRepostory />
      </DialogContent>
    </Dialog>
  )
}
