import { NextResponse } from 'next/server';
import { fetchUIFolderData } from '@/lib/fetchUIFolderData';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const folderPath = url.searchParams.get('path');

  if (!folderPath) {
    return NextResponse.json({ error: 'Folder path is required' }, { status: 400 });
  }

  try {
    const data = fetchUIFolderData(folderPath);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching UI folder data' }, { status: 500 });
  }
}
