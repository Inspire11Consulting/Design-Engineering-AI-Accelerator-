import React from 'react';
import clsx from 'clsx';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonColor = 'red' | 'white' | 'primary'; // primary is the base color (#848da1)

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
  size = 'md', // Default to medium, as in Figma
  color = 'primary', // Default to base color (primary #848da1)
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
          'bg-grey-cool-700 text-white hover:bg-grey-cool-600': color === 'primary',
        },

        // Size variants (from Figma, adjust as needed)
        {
          'h-6 text-xs px-3 py-2 rounded-md gap-1.5': size === 'xs', // 24px
          'h-8 text-sm px-4 py-2 rounded gap-1.5': size === 'sm',    // 32px
          'h-11 text-base px-5 py-3 rounded-md gap-2': size === 'md', // 44px (Figma medium)
          'h-14 text-2xl px-6 py-4 rounded-md gap-2.5': size === 'lg', // 56px
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
