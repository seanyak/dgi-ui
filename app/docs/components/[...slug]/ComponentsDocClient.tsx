'use client';

import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMDXComponents } from '@/app/mdx-components';

interface DocPageProps {
  params: {
    slug: string[];
  };
  doc: any; // Define a type for your doc data
}

const ComponentsDocClient: React.FC<DocPageProps> = ({ doc }) => {
  const components = useMDXComponents({});

  const Component = getMDXComponent(doc.code);

  return (
    <div className="flex justify-center lg:ml-[250px] min-[1395px]:ml-[0px]">
      <div className="mb-[100px] mt-[70px] h-full w-full max-w-4xl px-5 py-7 lg:mt-[100px]">
        <div className="flex flex-col justify-center gap-14">
          <Component components={components as any} />
        </div>
      </div>
    </div>
  );
};

export default ComponentsDocClient;
