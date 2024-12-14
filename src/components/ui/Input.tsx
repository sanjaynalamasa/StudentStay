import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  label,
  className = '',
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={props.id} className="sr-only">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          className={`appearance-none rounded-lg relative block w-full ${
            Icon ? 'pl-10' : 'pl-3'
          } px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;