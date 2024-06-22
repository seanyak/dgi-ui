import { NextResponse } from 'next/server';
import { fetchUIFolderData } from '@/lib/fetchUIFolderData';

export async function GET(req: Request) {
  console.log('Request received:', req.url);

  const url = new URL(req.url);
  const folderPath = url.searchParams.get('path');
  console.log('Folder path:', folderPath);

  if (!folderPath) {
    console.log('Using default folder path');
  }

  try {
    const data = fetchUIFolderData(folderPath || undefined);
    console.log('UI folder data fetched successfully');
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching UI folder data:', error);
    return NextResponse.json({ error: 'Error fetching UI folder data' }, { status: 500 });
  }
}
