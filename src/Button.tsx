import React from 'react';
import clsx from 'clsx';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonColor = 'red' | 'white' | 'gray';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  leftIcon,
  rightIcon,
  size = 'xs',
  color = 'red',
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={clsx(
        // Base styles
        'inline-flex items-center justify-center font-roboto font-bold capitalize transition-colors duration-200',
        
        // Color variants
        {
          'bg-red-600 text-white hover:bg-red-700': color === 'red',
          'bg-white text-grey-cool-950 border-2 border-white hover:bg-grey-cool-25': color === 'white',
          'bg-grey-cool-950 text-white hover:bg-grey-cool-800': color === 'gray',
        },
        
        // Size variants
        {
          'h-6 text-xs px-3 py-2 rounded-md gap-1.5': size === 'xs',
          'h-8 text-sm px-4 py-2 rounded gap-1.5': size === 'sm',
          'h-11 text-base px-5 py-[11px] rounded-md gap-2': size === 'md',
          'h-14 text-2xl px-6 py-3 rounded-md gap-2.5': size === 'lg',
        },
        
        // State variants
        {
          'opacity-30 cursor-not-allowed': disabled,
          'cursor-pointer': !disabled,
        }
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon && (
        <img src={leftIcon} alt="" className="w-4 h-4 mr-1" />
      )}
      <span>{children}</span>
      {rightIcon && (
        <img src={rightIcon} alt="" className="w-4 h-4 ml-1" />
      )}
    </button>
  );
};

export default Button;
