'use client'

import { Button } from '../ui/button'

const ButtonDemo = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Button Component</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <Button onClick={handleClick} variant="default">
          Click me
        </Button>
      </div>
    </div>
  );
};

export default ButtonDemo;