'use client'

import React, { useState } from 'react';
import Input from '@/components/ui/input';

export default function InputDemo() {
  const [value, setValue] = useState('');

  return (
    <div className='flex flex-col items-center justify-center gap-5 lg:flex-row'>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your name"
        className="input-primary"
        label="Student Name"
        error={value.length < 2 ? "Name must be at least 2 characters" : ""}
      />
    </div>
  );
}