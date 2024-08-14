// src/components/InputText.js
import React from 'react';

const InputText = ({
  label,
  type = 'text',
  name,
  id,
  placeholder,
  icon = null,
}) => {
  return (
    <div className="mb-2 relative">
      <label htmlFor={id} className="block text-gray-700 font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full px-10 py-3 border border-stokelightblue rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1EFFC]"
      />
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 top-8 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputText;
