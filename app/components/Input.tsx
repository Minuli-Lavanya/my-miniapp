import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: InputProps) => (
  <div className="mb-4">
    <label className="block text-white mb-1">{label}</label>
    <input className="w-full p-2 rounded bg-gray-800 text-white" {...props} />
  </div>
);
