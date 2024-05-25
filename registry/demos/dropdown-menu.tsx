import React, { useState } from 'react';
import Dropdown from '@/components/ui/dropdown';

const DropdownDemo: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = [
    { value: 'math', label: 'Math Resources' },
    { value: 'science', label: 'Science Projects' },
    { value: 'history', label: 'History Lessons' },
  ];

  return (
    <div>
      <h2>Dropdown Component</h2>
      <Dropdown
        options={options}
        onChange={(option) => setSelectedOption(option.value)}
        placeholder="Select a category"
        className="dropdown-primary"
      />
      {selectedOption && <p>Selected category: {selectedOption}</p>}
    </div>
  );
};

export default DropdownDemo;
