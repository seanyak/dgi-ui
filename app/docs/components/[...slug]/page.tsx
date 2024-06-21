import React from 'react';
import ComponentsDocClient from './ComponentsDocClient';
import { getMdxBySlug } from '@/lib/mdx';

interface DocPageProps {
  params: {
    slug: string[];
  };
  doc: any; // Define a type for your doc data
}

export async function getServerSideProps({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const doc = await getMdxBySlug('components', slug);

  return {
    props: {
      params,
      doc,
    },
  };
}

const ComponentsDoc: React.FC<DocPageProps> = ({ params, doc }) => {
  return <ComponentsDocClient params={params} doc={doc} />;
};

export default ComponentsDoc;
