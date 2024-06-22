# DGI-UI: Your Ultimate UI Component Library

Welcome to **DGI-UI**, an open-source UI component library built with Radix UI and Tailwind CSS. Designed to help you build high-quality, accessible design systems and web apps, DGI-UI is a treasure trove of pre-styled components that can be seamlessly integrated into any project. 

## Introduction

### What is DGI-UI?

DGI-UI is an open-source UI component library built with Radix UI and Tailwind CSS. It provides a collection of pre-styled, accessible components that can be easily integrated into any project, reducing the hassle of managing dependencies. With a focus on accessibility and composability, DGI-UI empowers you to create a top-notch, customizable component library with ease.

### Why Choose DGI-UI?

Building user interfaces often involves trade-offs. Here’s how DGI-UI addresses common challenges:

- **Normal Component Libraries**: These offer ready-to-use components but often limit customization.
- **Custom Components**: Provide complete control but are labor-intensive and can pose accessibility challenges.
- **Unstyled Component Libraries**: Offer flexibility but require significant effort to maintain design cohesion.

DGI-UI strikes a balance by offering pre-defined styles with the flexibility to customize components as needed. It leverages Radix UI for robust functionality and Tailwind CSS for easy styling, ensuring your projects are both functional and visually appealing.

### Meet DGI-UI

DGI-UI is your toolkit of copy-paste UI components crafted with the precision of Radix UI and the style of Tailwind CSS. It provides unstyled, accessible components that you can easily style to fit your project’s needs. With DGI-UI, you get the raw, uncut open-source code that you can adapt and extend as per your requirements.

## Installation

### Frameworks

DGI-UI is designed for Next.js/React projects. Follow these steps to set up the necessary dependencies and files for your project.

1. **Create a Next.js Project**: Start by creating a new Next.js project with TypeScript, Tailwind CSS, and ESLint.

    ```bash
    npx create-next-app@latest my-app --typescript --tailwind --eslint
    ```

    For more details, check the [Next.js Documentation](https://nextjs.org/docs/getting-started/installation).

### TypeScript

DGI-UI components are built with TypeScript, ensuring type safety and better developer experience. TypeScript helps catch errors early and provides a smoother development experience with autocompletion and type checking. While our components are currently in TypeScript, support for JavaScript is on the horizon.

For more details, check the [TypeScript Documentation](https://www.typescriptlang.org/download).

### Tailwind CSS

DGI-UI uses Tailwind CSS for styling. This utility-first CSS framework makes it easy to create responsive and consistent designs. We plan to add support for CSS and SASS in the future.

For more details, check the [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation).

### Global CSS

DGI-UI leverages CSS variables for a unified design system, making future tweaks or overhauls straightforward. Add the following code to your `global.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Font Faces */
@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Regular.woff2') format('woff2'),
       url('/fonts/Satoshi-Regular.woff') format('woff');
  font-style: normal;
  font-weight: 400;
}

/* ... additional font-face rules ... */

/* Root Variables */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 6%;
    /* ... other variables ... */
  }

  .dark {
    --background: 240 10% 6%;
    --foreground: 0 0% 98%;
    /* ... other dark mode variables ... */
  }
}

/* Base Styles */
@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply overflow-x-hidden bg-background text-foreground;
  }
  /* ... additional styles ... */
}

/* Utility Styles */
@layer utilities {
  .scrollbar-light::-webkit-scrollbar {
    width: 10px;
  }
  /* ... additional utility styles ... */
}
```

### Tailwind Configuration

Update your `tailwind.config.js` file to include the following configuration:

```js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        satoshi: ['satoshi'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        /* ... additional colors ... */
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        /* ... additional animations ... */
      },
    },
  },
  plugins: [],
};
```

For more details, check the [Tailwind Configuration Documentation](https://tailwindcss.com/docs/configuration).

### Helper Function Dependencies

Install the following dependencies to handle class name merging and styling:

```bash
npm i class-variance-authority tailwind-merge clsx
```

### Class Variance Authority

The `cva` function allows you to manage component style variants effortlessly, ensuring consistency across your design. Enable autocompletion within `cva` for a smoother development experience.

For more details, check the [CVA Documentation](https://cva.style/docs).

### Tailwind Merge

Tailwind Merge helps avoid style conflicts by ensuring only the necessary Tailwind CSS classes are applied.

For more details, check the [Tailwind Merge Documentation](https://www.npmjs.com/package/tailwind-merge).

### clsx

The `clsx` library allows you to conditionally merge class names efficiently.

For more details, check the [clsx Documentation](https://github.com/lukeed/clsx).

### Helper Function

Create a `utils.ts` file in your `lib` folder and add the following helper function:

```ts
import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Lucid Icons

Some components use Lucid Icons. Install the dependency to get started:

```bash
npm install lucide-react
```

For more details, check the [Lucid Icons Documentation](https://lucide.dev/guide/packages/lucide-react).

## Getting Started

### Building Your UI Library

After installation, you can start crafting your UI library. You can either download all components or manually add them as needed.

### Downloading All Components

If you’re starting a new project, download the entire UI library for a comprehensive set of components. Unzip the downloaded file and move the components into your project’s `components` folder.

### Manually Adding Components

For a minimal UI, manually add only the components you need. Here’s how:

1. **Create Your Components Folder**: Structure your components as follows:

    ```plaintext
    ├── app
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   ├── ui
    │   │   ├── accordion.tsx
    │   │   ├── badge.tsx
    │   │   ├── button.tsx
    │   │   └── ...
    ├── lib
    │   └── utils.ts
    ├── styles
    │   └── globals.css
    ├── next.config.js
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    └── tsconfig.json
    ```

2. **Select a Component**: Choose the component you want to add. For example, the `Modal` component.

3. **Create the Component File**: Create a new file inside your `components/ui` folder named `modal.tsx`.

4. **Install Necessary Dependencies**: Follow the installation instructions for the specific component.

    ```bash
    npm install @radix-ui/react-dialog
    ```

5. **Add the Component Code**: Copy the provided code into your `modal.tsx` file and adjust import paths as needed.

```ts
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => (
  <Dialog

.Root open={isOpen} onOpenChange={onClose}>
    <Dialog.Overlay className="modal-overlay" />
    <Dialog.Content className="modal">
      <Dialog.Title className="modal-header">
        {title}
        <Dialog.Close asChild>
          <button onClick={onClose} className="modal-close-button">&times;</button>
        </Dialog.Close>
      </Dialog.Title>
      <Dialog.Description className="modal-body">
        {children}
      </Dialog.Description>
      <div className="modal-footer">
        <Dialog.Close asChild>
          <button onClick={onClose} className="btn-primary mr-7">Close</button>
        </Dialog.Close>
      </div>
    </Dialog.Content>
  </Dialog.Root>
);

export default Modal;
```

## Optional Installs

### Automatic Class Sorting with Prettier

Use the Tailwind CSS plugin for Prettier to sort your classes automatically.

For more details, check the [Prettier Tailwind Plugin Documentation](https://github.com/tailwindlabs/prettier-plugin-tailwindcss).

## Conclusion

DGI-UI is designed to make building user interfaces simpler and more efficient. Whether you're starting a new project or enhancing an existing one, DGI-UI provides the tools and flexibility you need. Enjoy crafting beautiful, accessible UIs with ease!

---

For more information and detailed documentation, please visit our [official website](https://dgi-ui.com).