'use client';

import React, { useState } from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import CodeBlock from '../codeBlock';
import { Button } from '../ui/button';
import { Expand } from 'lucide-react';

type ExampleComponentProps = {
  variantName: 'variant' | 'shape' | 'size';
  variantProps: string[];
};

type variantProps =
  | 'link'
  | 'default'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | null
  | undefined;

type shapeProps = 'square' | 'rounded' | 'pill' | null | undefined;

type sizeProps =
  | 'default'
  | 'icon'
  | 'xs'
  | 'sm'
  | 'lg'
  | 'xl'
  | null
  | undefined;

const ButtonProps: React.FC<ExampleComponentProps> = ({
  variantName,
  variantProps,
}) => {
  const [activeProp, setActiveProp] = useState(variantProps[0]);
  const [activeVariantProp, setActiveVariantProp] = useState<variantProps>('default');
  const [activeShapeProp, setActiveShapeProp] = useState<shapeProps>('square');
  const [activeSizeProp, setActiveSizeProp] = useState<sizeProps>('default');

  function handleActiveProp(prop: any) {
    setActiveProp(prop);
    if (variantName === 'variant') {
      setActiveVariantProp(prop);
    } else if (variantName === 'shape') {
      setActiveShapeProp(prop);
    } else setActiveSizeProp(prop);
  }

  return (
    <div className=''>
      <Tabs
        defaultValue={variantProps[0]}
        orientation='vertical'
        className='bg-background'
      >
        <TabsList aria-label='tabs example' className='border-none'>
          {variantProps.map((prop) => (
            <TabsTrigger
              key={prop} // Add key prop
              value={prop}
              asChild
              className='text-xs'
              variant='button'
            >
              <button onClick={() => handleActiveProp(prop)}>{prop}</button>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className='relative overflow-hidden rounded-lg border border-border'>
          <div className='flex items-center justify-center px-5 py-12 text-sm'>
            {variantName === 'variant' ? (
              <Button variant={activeVariantProp}>{activeVariantProp}</Button>
            ) : variantName === 'shape' ? (
              <Button shape={activeShapeProp}>{activeShapeProp}</Button>
            ) : variantName === 'size' && activeProp === 'icon' ? (
              <Button size={activeSizeProp}>
                <Expand strokeWidth={1.5} size={16} />
              </Button>
            ) : variantName === 'size' ? (
              <Button size={activeSizeProp}>{`${activeSizeProp} button`}</Button>
            ) : (
              ''
            )}
          </div>

          {variantProps.map((prop) => (
            <TabsContent
              key={prop} // Add key prop
              value={prop}
              className='border-t border-border'
            >
              <CodeBlock
                code={
                  variantName === 'size' && prop === 'default'
                    ? `<Button>default button</Button>`
                    : prop === 'default'
                    ? `<Button>default</Button>`
                    : variantName === 'size' && prop === 'icon'
                    ? `<Button ${variantName}='${prop}'><Expand strokeWidth={1.5} size={16} /></Button>`
                    : variantName === 'size'
                    ? `<Button ${variantName}='${prop}'>${prop} button</Button>`
                    : `<Button ${variantName}='${prop}'>${prop}</Button>`
                }
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

ButtonProps.displayName = 'ButtonProps'; // Add a display name for debugging

export default ButtonProps;
