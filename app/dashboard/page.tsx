'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../store/auth';

export default function DashboardPage() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome, you’re logged in.</h1>
      <button
        onClick={() => {
          logout();
          router.push('/login');
        }}
        className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
      >
        Logout
      </button>
    </div>
  );
}