import { fetchComponentCode } from '@/lib/fetchComponentSource'
import CodeBlock from './codeBlock'

export default function ComponentSource({ code }: { code: string }) {
  const compCode = fetchComponentCode(code)
  return (
    <div>
      <CodeBlock code={compCode} />
    </div>
  )
}
