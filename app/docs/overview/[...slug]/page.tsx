import React from 'react';
import type { Metadata } from 'next';
import OverviewDocClient from './OverviewDocClient';
import { getMdxBySlug } from '@/lib/mdx';

interface DocPageProps {
  params: {
    slug: string[];
  };
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const doc = await getMdxBySlug('overview', params.slug.join('/'));

  return {
    title: doc.frontmatter.metaTitle,
    description: doc.frontmatter.metaDescription,
    openGraph: {
      title: doc.frontmatter.metaTitle,
      description: doc.frontmatter.metaDescription,
      url: `http://localhost:3000/docs/overview/${doc.frontmatter.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.frontmatter.metaTitle,
      description: doc.frontmatter.metaDescription,
      creator: '@yaksean',
    },
    metadataBase: new URL('http://localhost:3000'),
  };
}

const OverviewDoc: React.FC<DocPageProps> = (props) => {
  return <OverviewDocClient {...props} />;
};

export default OverviewDoc;
