import { fetchComponentSource } from '@/lib/fetchComponentSource'
import CodeBlock from '@/components/codeBlock'

export default function ComponentSource({ code }: { code: string }) {
  const compCode = fetchComponentSource(code)
  return (
    <div>
      <CodeBlock code={compCode} />
    </div>
  )
}