import React from 'react';

const Spinner = ({ size = 'md' }) => {
  const sizes = { sm: 'h-4 w-4 border-2', md: 'h-8 w-8 border-2', lg: 'h-12 w-12 border-4' };
  return (
    <div className="flex justify-center items-center p-4">
      <div className={`animate-spin rounded-full border-t-transparent border-amber-500 ${sizes[size]}`}></div>
    </div>
  );
};

export default Spinner;