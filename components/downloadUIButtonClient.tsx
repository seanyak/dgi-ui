'use client'

import { cn } from '@/lib/utils'
import { ButtonVariants } from './ui/button'
import { generateZip } from '@/lib/generateZip'

type DownloadUiButtonClientProps = {
  fileData: string
  children: string
}

export default function DownloadUiBUttonClient({
  fileData,
  children,
}: DownloadUiButtonClientProps) {
  return (
    <button
      className={cn(
        ButtonVariants({
          variant: 'default',
          size: 'sm',
          shape: 'rounded',
        }),
        'w-fit'
      )}
      onClick={() => generateZip(fileData)}
    >
      {children}
    </button>
  )
}
