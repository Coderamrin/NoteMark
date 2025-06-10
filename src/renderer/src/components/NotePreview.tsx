import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        'cursor-pointer text-black px-2.5 py-0.5 rounded-md transition-colors duration-75 hover:bg-zinc-400/40',
        {
          'bg-zinc-400/40': isActive,
          'text-black ': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 truncate">{title}</h3>
      {/* <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span> */}
    </div>
  )
}
