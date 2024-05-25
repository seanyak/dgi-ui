import DownloadUiButtonClient from './downloadUIButtonClient'
import { fetchUIFolderData } from '@/lib/fetchUIFolderData'

export default function DownloadUiBUtton() {
  const data = fetchUIFolderData()

  return (
    <DownloadUiButtonClient fileData={data}>
      Download Components
    </DownloadUiButtonClient>
  )
}
