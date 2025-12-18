import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = "font-bold py-3 px-6 rounded-lg transition duration-300";
  
  const variantClasses = variant === 'primary' 
    ? "bg-primary hover:bg-blue-600 text-white" 
    : "bg-secondary hover:bg-green-600 text-gray-900";
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}