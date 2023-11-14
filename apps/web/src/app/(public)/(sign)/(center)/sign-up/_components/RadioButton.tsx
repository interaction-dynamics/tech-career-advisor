import { cn } from '@/lib/utils'

interface RadioButtonProps {
  checked: boolean
}

export default function RadioButton({ checked }: RadioButtonProps) {
  return (
    <button
      role="checkbox"
      aria-checked={checked}
      className={cn(
        'focus-visible:ring-1 focus-visible:ring-ring outline-none border-2 border-input rounded-full w-6 h-6 relative overflow-hidden',
        checked ? 'bg-blue-300' : 'bg-transparent',
      )}
    >
      {checked && (
        <svg
          className="absolute h-full w-full inset-0"
          viewBox="0 0 133 133"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="check-group"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <circle
              id="white-circle"
              className="fill-blue-300"
              cx="66.5"
              cy="66.5"
              r="55.5"
            />
            <polyline
              id="check"
              className="stroke-black"
              strokeWidth="10"
              points="41 70 56 85 92 49"
            />
          </g>
        </svg>
      )}
    </button>
  )
}
