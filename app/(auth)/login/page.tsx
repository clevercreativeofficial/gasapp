"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/public/assets.js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrNumber: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    emailOrNumber: false,
    password: false,
    server: false
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors = {
      emailOrNumber: !formData.emailOrNumber.trim(),
      password: !formData.password.trim(),
      server: false
    };

    setErrors(newErrors);

    if (newErrors.emailOrNumber || newErrors.password) return;

    console.log("Form submitted:", formData);
    setErrors(prev => ({ ...prev, server: true }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (value.trim() !== "" && errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false, server: false }));
    }
  };

  // Reusable input styling
  const getInputClassName = (isValid: boolean) => 
    `w-full p-4 outline-none bg-secondary focus:border-accent border ${
      isValid ? "border-secondary" : "border-red-500"
    } text-foreground rounded-lg`;

  return (
    <div className='w-full min-h-screen bg-background flex items-center justify-center p-4'>
      <div className='w-full max-w-xs'>
        <div className='bg-secondary/30 backdrop-blur-sm px-6 py-8 rounded-2xl shadow-lg'>
          <div className='flex flex-col items-center gap-3 mb-6'>
            <Link href='/'>
              <div className='w-14'>
                <Image
                  src={assets.logo}
                  alt='logo'
                  priority
                />
              </div>
            </Link>
            <p className='text-md text-foreground'>Sign in to Yoonda</p>
          </div>

          {errors.server && (
            <div className='p-4 bg-red-100 text-red-950 border border-red-300 text-sm mb-4 rounded-lg'>
              Sorry, an unknown error occurred, please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className="space-y-2">
              <Input
                type='text'
                name='emailOrNumber'
                value={formData.emailOrNumber}
                onChange={handleInputChange}
                placeholder='Mobile number or email'
                aria-invalid={errors.emailOrNumber}
                className={getInputClassName(!errors.emailOrNumber)}
              />
              {errors.emailOrNumber && (
                <small className='text-red-500 block'>
                  Please enter an email or phone number.
                </small>
              )}
            </div>

            <div className="space-y-2">
              <Input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Password'
                aria-invalid={errors.password}
                className={getInputClassName(!errors.password)}
              />
              {errors.password && (
                <small className='text-red-500 block'>
                  Please enter a password.
                </small>
              )}
            </div>

            <Button 
              type="submit"
              className='w-full p-4 bg-accent hover:bg-accent/80 text-foreground rounded-lg font-medium'>
              Log in
            </Button>
          </form>

          <div className='mt-4 space-y-4'>
            <div className='text-center'>
              <Link href='/forgot-password' passHref>
                <Button variant='link' className='text-accent text-sm'>
                  Forgot password?
                </Button>
              </Link>
            </div>
            
            <Link href='/register' passHref>
              <Button variant='outline' className='w-full p-4 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg'>
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;