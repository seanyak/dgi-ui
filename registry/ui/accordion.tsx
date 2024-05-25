import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) => (
        <Collapsible.Root key={index} open={openIndexes.includes(index)} onOpenChange={() => handleToggle(index)}>
          <Collapsible.Trigger asChild>
            <div className="accordion-header" onClick={() => handleToggle(index)}>
              {item.title}
            </div>
          </Collapsible.Trigger>
          <Collapsible.Content className="accordion-content">
            {item.content}
          </Collapsible.Content>
        </Collapsible.Root>
      ))}
    </div>
  );
};

export default Accordion;
