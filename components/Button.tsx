import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";
  
  const variants = {
    primary: "bg-coffee-800 text-white hover:bg-coffee-700 shadow-md hover:shadow-lg",
    outline: "border-2 border-coffee-800 text-coffee-800 hover:bg-coffee-800 hover:text-white",
    ghost: "text-coffee-800 hover:bg-coffee-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};