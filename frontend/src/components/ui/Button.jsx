import React from 'react';

const Button = ({ children, variant = 'primary', isLoading, ...props }) => {
  const baseStyle = "w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold transition shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 duration-200";
  const variants = {
    primary: "bg-amber-600 text-neutral-900 hover:bg-amber-500",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} disabled={isLoading} {...props}>
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
      ) : children}
    </button>
  );
};

export default Button;