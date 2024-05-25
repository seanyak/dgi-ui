'use client'

import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onChange: (option: Option) => void;
  className?: string;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, className, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={`dropdown-toggle ${className}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="dropdown-menu">
        {options.map((option) => (
          <DropdownMenu.Item key={option.value} className="dropdown-item" onSelect={() => handleSelect(option)}>
            {option.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
