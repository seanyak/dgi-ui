import React, { useState } from 'react';
import Input from '@/components/ui/input';

const InputDemo: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <h2>Input Component</h2>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your name"
        className="input-primary"
        error={value.length < 5 ? "Name must be at least 5 characters" : ""}
      />
    </div>
  );
};

export default InputDemo;
