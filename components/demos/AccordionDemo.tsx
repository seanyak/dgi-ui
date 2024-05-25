'use client';

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const AccordionDemo = () => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    {/* Accordion root element that holds all accordion items. 
        type="single" ensures only one item can be open at a time.
        defaultValue="item-1" sets the first item as open by default.
        collapsible allows collapsing all items, including the currently open one. */}
    
    {/* Accordion item */}
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>Math Resources</AccordionTrigger>
      <AccordionContent>
        Explore a variety of math resources, including lesson plans, worksheets, and interactive activities.
      </AccordionContent>
    </Accordion.Item>

    {/* Accordion item */}
    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Science Projects</AccordionTrigger>
      <AccordionContent>
        Discover exciting science projects and experiments to engage your homeschoolers.
      </AccordionContent>
    </Accordion.Item>

    {/* Accordion item */}
    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>History Lessons</AccordionTrigger>
      <AccordionContent>
        Dive into history with lessons, activities, and resources for all ages.
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

// Defining the interface for the AccordionTrigger component's props.
interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof Accordion.Trigger> {
  children: React.ReactNode;
  className?: string;
}

// The AccordionTrigger component that acts as the clickable header to open or close the accordion item.
const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={`AccordionTrigger ${className || ''}`}
        {...props}
        ref={forwardedRef}
      >
        {children}
        {/* ChevronDownIcon provides a visual cue to indicate the expandable nature of the accordion item. */}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

// Defining the interface for the AccordionContent component's props.
interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof Accordion.Content> {
  children: React.ReactNode;
  className?: string;
}

// The AccordionContent component that contains the actual content of the accordion item.
const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={`AccordionContent ${className || ''}`}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

// Exporting AccordionDemo component as the default export.
export default AccordionDemo;
