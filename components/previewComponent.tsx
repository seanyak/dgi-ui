'use client';

import React, { useEffect, useState } from 'react';

interface PreviewComponentProps {
  componentPath: string;
}

const PreviewComponent: React.FC<PreviewComponentProps> = ({ componentPath }) => {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    const fetchSource = async () => {
      const response = await fetch(`/api/fetch-component-source?path=${componentPath}`);
      const data = await response.json();
      if (data.source) {
        setSource(data.source);
      }
    };

    fetchSource();
  }, [componentPath]);

  if (!source) {
    return <div>Loading...</div>;
  }

  return (
    <pre>
      <code>{source}</code>
    </pre>
  );
};

export default PreviewComponent;
