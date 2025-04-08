import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button = ({ children, loading, ...props }: ButtonProps) => (
  <button
    className="w-full bg-purple-400 hover:bg-purple-600 text-white py-2 px-4 rounded"
    {...props}
    disabled={loading}
  >
    {loading ? 'Loading...' : children}
  </button>
);