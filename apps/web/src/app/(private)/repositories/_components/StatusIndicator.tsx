import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import ParsingStatus from '@/types/ParsingStatus'

export interface StatusIndicatorProps {
  status: ParsingStatus
}

export const statusColors: Record<ParsingStatus, string> = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  pending: 'bg-gray-400 animate-[pulse_1s_ease-in-out_infinite]',
}

export default function StatusIndicator({ status }: StatusIndicatorProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={cn(
              'inline-flex w-3 h-3 rounded-full',
              statusColors[status],
            )}
            title={status}
          />
        </TooltipTrigger>
        <TooltipContent>{status}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
