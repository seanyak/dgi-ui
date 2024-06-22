import type { MDXComponents } from 'mdx/types';
import PreviewComponent from '@/components/previewComponent';
import SelectDemo from '@/components/demos/SelectDemo';
import PreviewCodeBlock from '@/components/previewCodeBlock';
import CodeBlock from '@/components/codeBlock';
import BadgeDemo from '@/components/demos/BadgeDemo';
import { Button } from '@/components/ui/button';
import Description from '@/components/description';
import ButtonDemo from '@/components/demos/ButtonDemo';
import TabsDemo from '@/components/demos/TabsDemo';
import CollapsibleDemo from '@/components/demos/CollapsibleDemo';
import FlexGroup from '@/components/ui/flexGroup';
import DownloadUiButton from '@/components/downloadUiButton';
import NextImage from '@/components/nextImage';
import Step from '@/components/step';
import NextLink from '@/components/nextLink';
import ExternalLink from '@/components/externalLink';
import Community from '@/components/community';
import ButtonProps from '@/components/componentProps/buttonProps';
import BadgeProps from '@/components/componentProps/badgeProps';
import TabsProps from '@/components/componentProps/tabsProps';

import CardDemo from '@/components/demos/CardDemo';
import DropdownDemo from '@/components/demos/DropdownDemo';
import InputDemo from '@/components/demos/InputDemo';
import ModalDemo from '@/components/demos/ModalDemo';
import TooltipDemo from '@/components/demos/TooltipDemo';
import AccordionDemo from '@/components/demos/AccordionDemo';
import NotificationDemo from '@/components/demos/NotificationDemo';

import CardProps from '@/components/componentProps/CardProps';
import DropdownProps from '@/components/componentProps/DropdownProps';
import InputProps from '@/components/componentProps/InputProps';
import ModalProps from '@/components/componentProps/ModalProps';
import TooltipProps from '@/components/componentProps/TooltipProps';
import AccordionProps from '@/components/componentProps/AccordionProps';
import NotificationProps from '@/components/componentProps/NotificationProps';

import ComponentSource from '@/components/componentSource'; // Ensure this import

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Wrapper: ({ children }) => (
      <div className='flex flex-col gap-12'>{children}</div>
    ),
    h1: ({ children }) => (
      <h1 className='text-3xl font-bold lg:text-4xl'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-xl font-bold lg:text-2xl'>{children}</h2>
    ),
    h3: ({ children }) => <h3 className='text-lg lg:text-xl font-semibold'>{children}</h3>,
    h4: ({ children }) => <h4 className='text-lg font-medium'>{children}</h4>,
    p: ({ children }) => <p className='text-base'>{children}</p>,
    ol: ({ children }) => (
      <ol className='list-inside list-decimal'>{children}</ol>
    ),
    ul: ({ children }) => <ul className='ml-10 list-disc'>{children}</ul>,
    code: ({ children }) => (
      <code className='rounded-sm bg-muted p-1 text-[14px] shadow-sm'>
        {children}
      </code>
    ),
    strong: ({ children }) => (
      <strong className='font-semibold'>{children}</strong>
    ),
    PreviewComponent,
    PreviewCodeBlock,
    CodeBlock,
    Button,
    Description,
    FlexGroup,
    DownloadUiButton,
    NextImage,
    Step,
    NextLink,
    ExternalLink,
    Community,
    AccordionProps,
    ButtonProps,
    BadgeProps,
    CardProps,
    DropdownProps,
    InputProps,
    ModalProps,
    NotificationProps,
    TabsProps,
    TooltipProps,
    AccordionDemo,
    BadgeDemo,
    ButtonDemo,
    CardDemo,
    CollapsibleDemo,
    DropdownDemo,
    InputDemo,
    ModalDemo,
    NotificationDemo,
    SelectDemo,
    TabsDemo,
    TooltipDemo,
    ComponentSource, // Ensure this is included
    ...components,
  };
}
