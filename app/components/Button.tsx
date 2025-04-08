import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button = ({ children, loading, ...props }: ButtonProps) => (
  <button
    className="w-full bg-[#8B80FF] hover:bg-purple-400 text-white py-2 px-4 rounded"
    {...props}
    disabled={loading}
  >
    {loading ? 'Loading...' : children}
  </button>
);