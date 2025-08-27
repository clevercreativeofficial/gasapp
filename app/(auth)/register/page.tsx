"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/public/assets.js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailOrNumber: "",
    password: "",
    confirmPassword: ""
  });
  
  const [errors, setErrors] = useState({
    fullName: false,
    emailOrNumber: false,
    password: false,
    confirmPassword: false,
    server: false
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate all fields
    const newErrors = {
      fullName: !formData.fullName.trim(),
      emailOrNumber: !formData.emailOrNumber.trim(),
      password: !formData.password.trim(),
      confirmPassword: !formData.confirmPassword.trim(),
      server: false
    };

    setErrors(newErrors);
    
    // Check if passwords match
    const passwordsMatch = formData.password === formData.confirmPassword;
    setPasswordMatchError(!passwordsMatch);

    if (Object.values(newErrors).some(error => error) || !passwordsMatch) return;

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
    
    // Clear password match error when either password field changes
    if ((name === "password" || name === "confirmPassword") && passwordMatchError) {
      setPasswordMatchError(false);
    }
  };

  // Reusable input styling
  const getInputClassName = (isValid: boolean) => 
    `w-full p-4 outline-none bg-secondary focus:border-accent border ${
      isValid ? "border-secondary" : "border-red-500"
    } text-foreground rounded-lg`;

  return (
    <div className='w-full min-h-screen bg-background flex items-center justify-center p-4'>
      <div className='w-full max-w-sm'>
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
            <p className='text-md text-foreground'>Sign up to Yoonda</p>
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
                name='fullName'
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder='Full Name'
                aria-invalid={errors.fullName}
                className={getInputClassName(!errors.fullName)}
              />
              {errors.fullName && (
                <small className='text-red-500 block'>
                  Please enter your full name.
                </small>
              )}
            </div>

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
            <div className="flex sm:flex-row flex-col gap-4">
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
                  Enter a password.
                </small>
              )}
            </div>

            <div className="space-y-2">
              <Input
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder='Confirm Password'
                aria-invalid={errors.confirmPassword || passwordMatchError}
                className={getInputClassName(!errors.confirmPassword && !passwordMatchError)}
              />
              {errors.confirmPassword && (
                <small className='text-red-500 block'>
                  Confirm your password.
                </small>
              )}
              {passwordMatchError && (
                <small className='text-red-500 block'>
                  Passwords do not match.
                </small>
              )}
            </div>
            </div>

            <small className='block my-3 text-foreground/80'>
              By clicking Sign Up, you agree to our{" "}
              <Link className="text-accent hover:underline" href="/">
                Terms, Privacy and Policy
              </Link>{" "}
              and{" "}
              <Link className="text-accent hover:underline" href="/">
                Cookies Policy.
              </Link>
              You may receive SMS notifications from us and can opt out any
              time.
            </small>

            <Button 
              type="submit"
              className='w-full p-4 bg-accent hover:bg-accent/80 text-foreground rounded-lg font-medium'>
              Sign Up
            </Button>
          </form>

          <div className='mt-6 text-center'>
            <small className='text-foreground/80'>
              Already have an account?{" "}
              <Link className="text-accent hover:underline" href="/login">
                Log In
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;