'use client';

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const AccordionDemo: React.FC = () => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>Math Resources</AccordionTrigger>
      <AccordionContent>
        Explore a variety of math resources, including lesson plans, worksheets, and interactive activities.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Science Projects</AccordionTrigger>
      <AccordionContent>
        Discover exciting science projects and experiments to engage your homeschoolers.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>History Lessons</AccordionTrigger>
      <AccordionContent>
        Dive into history with lessons, activities, and resources for all ages.
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof Accordion.Trigger> {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={`AccordionTrigger ${className || ''} p-4 bg-gray-100 dark:bg-gray-800 dark:text-white`}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = 'AccordionTrigger';

interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof Accordion.Content> {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={`AccordionContent ${className || ''} p-4 bg-gray-50 dark:bg-gray-700 dark:text-white`}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText  dark:text-white">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = 'AccordionContent';

export default AccordionDemo;
