'use client'

import { cn } from '@/lib/utils'
import { useRef } from 'react'

export interface CircularProgressBarProps {
  percent: number
  className?: string
}

export default function CircularProgressBar({
  percent,
  className,
}: CircularProgressBarProps) {
  const ref = useRef<SVGCircleElement>()

  const width = 80
  const height = 80
  const radius = 30
  const circumference = 2 * Math.PI * radius
  const middle = { x: width / 2, y: height / 2 }

  return (
    <div className="  inline-flex items-center justify-center overflow-hidden rounded-full">
      <svg
        className={cn('h-20 w-20', className)}
        viewBox={`0 0 ${width} ${height}`}
      >
        <circle
          className="text-border"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={middle.x}
          cy={middle.y}
        />
        <circle
          className="text-foreground"
          strokeWidth="5"
          strokeDasharray={String(circumference)}
          strokeDashoffset={String(
            circumference - (percent / 100) * circumference,
          )}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={middle.x}
          cy={middle.y}
          ref={ref}
        />
      </svg>
      <span className="absolute text-xl font-semibold text-foreground">
        {percent}%
      </span>
    </div>
  )
}
