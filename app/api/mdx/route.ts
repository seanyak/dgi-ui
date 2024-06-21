import { NextResponse } from 'next/server';
import { getMdxBySlug } from '@/lib/mdx';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const directory = url.searchParams.get('directory') || '';
  const slug = url.searchParams.get('slug') || '';

  const doc = await getMdxBySlug(directory, slug);
  return NextResponse.json(doc);
}
