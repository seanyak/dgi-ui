import { NextResponse } from 'next/server';
import { getMdxBySlug } from '@/lib/mdx';

export async function GET(req: Request) {
  console.log('Request received:', req.url);

  const url = new URL(req.url);
  const directory = url.searchParams.get('directory') || '';
  const slug = url.searchParams.get('slug') || '';
  console.log('Directory:', directory, 'Slug:', slug);

  try {
    const doc = await getMdxBySlug(directory, slug);
    console.log('MDX document fetched successfully');
    return NextResponse.json(doc);
  } catch (error) {
    console.error('Error fetching MDX document:', error);
    return NextResponse.json({ error: 'Error fetching MDX document' }, { status: 500 });
  }
}
