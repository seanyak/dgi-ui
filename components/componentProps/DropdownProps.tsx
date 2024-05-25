// DropdownProps.tsx
import React from 'react';

interface Props {
  variantName: string;
  variantProps: string[];
}

const DropdownProps: React.FC<Props> = ({ variantName, variantProps }) => {
  return (
    <div>
      <h3>{variantName.charAt(0).toUpperCase() + variantName.slice(1)}</h3>
      <ul>
        {variantProps.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownProps;
