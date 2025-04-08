'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useAuth } from '../store/auth';
import { isValidEmail } from '../utils/validate';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (!email || !password) {
        setError('All fields are required.');
      } else if (!isValidEmail(email)) {
        setError('Invalid email format.');
      } else if (email === 'test@visionexdigital.com.au' && password === 'password123') {
        login();
        router.push('/dashboard');
      } else {
        setError('Incorrect email or password.');
      }
      setLoading(false);
    }, 1000);
  };

return (
    <div className="min-h-screen flex">
      {/* Left - Login */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="p-12 rounded-lg w-full max-w text-white">
          <div className="flex items-center mb-6 space-x-2">
            <img src="/img/Navigation-item.png" alt="Room.me Logo" className="w-6 h-6" />
            <h2 className="text-white font-semibold text-lg">ROOM.ME</h2>
          </div>
          <h1 className="text-[40px] font-semibold mb-2">Welcome back to Room.me!</h1>
          <p className="text-gray-400 mb-6 text-[20px]">
            Room.me is an innovative video conference product that revolutionizes virtual meetings.
          </p>
          <form onSubmit={handleLogin}>
            <Input label="Email address" type="email" placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input label="Password" type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
            <Button type="submit" loading={loading}>Sign in</Button>
          </form>
          <button className="w-full mt-3 bg-white text-black py-2 px-4 rounded flex items-center justify-center">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-2" alt="Google icon" />
            Sign in with Google
          </button>
          <div className="flex justify-between items-center mt-3 text-sm">
            <label><input type="checkbox" className="mr-1 text-[14px]" /> Remember for 30 days</label>
            <a href="#" className="text-[#8B80FF] hover:underline text-[14px]">Forgot password</a>
          </div>
          <p className="mt-4 text-[16px] text-center">Doesn’t have account? <a href="#" className="text-[#8B80FF] hover:underline">Sign up</a></p>
        </div>
      </div>
  
      {/* Right - Testimonial */}
      <div className="hidden md:flex flex-1 bg-cover p-20 bg-center relative">
        <div className="absolute inset-0 bg-opacity-40 flex items-end p-4 m-8 text-white rounded-lg bg-cover  justify-center " style={{ backgroundImage: `url('/img/image.png')` }} >
          <div className="max-w items-center m-7 backdrop-blur-lg bg-opacity-30 p-5 rounded-lg">
            <p className="text-2xl">
              “We love the screen sharing and whiteboarding features, which have improved our presentations. Room.me has become an essential tool for our team, allowing us to collaborate effectively. Highly recommended!”
            </p>
            <p className="mt-4 font-semibold">Sarah Markivoc - Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
  
}
