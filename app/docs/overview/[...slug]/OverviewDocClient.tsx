'use client';

import React, { useState, useEffect } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMDXComponents } from '@/app/mdx-components';

interface DocPageProps {
  params: {
    slug: string[];
  };
}

const OverviewDocClient: React.FC<DocPageProps> = ({ params }) => {
  const [doc, setDoc] = useState<any>(null);
  const components = useMDXComponents({});

  useEffect(() => {
    const fetchDoc = async () => {
      const slug = params.slug?.join('/') || '';
      const response = await fetch(`/api/mdx?directory=overview&slug=${slug}`);
      const fetchedDoc = await response.json();
      setDoc(fetchedDoc);
    };

    fetchDoc();
  }, [params]);

  if (!doc) return <div>Loading...</div>;

  const Component = getMDXComponent(doc.code);

  return (
    <div className='flex justify-center lg:ml-[250px] min-[1395px]:ml-[0px]'>
      <div className='mb-[100px] mt-[70px] h-full w-full max-w-4xl px-5 py-7 lg:mt-[100px]'>
        <div className='flex flex-col justify-center gap-14'>
          <Component components={components as any} />
        </div>
      </div>
    </div>
  );
};

export default OverviewDocClient;
