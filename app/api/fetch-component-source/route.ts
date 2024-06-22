import { NextResponse } from 'next/server';
import { fetchComponentSource } from '@/lib/fetchComponentSource'; // Updated import path

export async function GET(req: Request) {
  const url = new URL(req.url);
  const componentPath = url.searchParams.get('path');

  if (!componentPath) {
    return NextResponse.json({ error: 'Component path is required' }, { status: 400 });
  }

  try {
    const source = fetchComponentSource(componentPath);
    return NextResponse.json({ source });
  } catch (error) {
    console.error('Error fetching component source:', error);
    return NextResponse.json({ error: 'Error fetching component source' }, { status: 500 });
  }
}
