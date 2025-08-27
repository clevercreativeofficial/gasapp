"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/public/assets.js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // Validate email
    if (!email.trim() || !validateEmail(email)) {
      setIsEmailValid(false);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Password reset requested for:", email);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value.trim() !== "") {
      setIsEmailValid(true);
    }
  };

  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-xs">
        <div className="bg-secondary/30 backdrop-blur-sm px-6 py-8 rounded-2xl shadow-lg">
          <div className="flex flex-col items-center gap-3 mb-6">
            <Link href="/">
              <div className="w-14">
                <Image
                  src={assets.logo}
                  alt="logo"
                  priority
                />
              </div>
            </Link>
            <h1 className="text-xl font-semibold text-foreground">Reset your password</h1>
            <p className="text-sm text-foreground/70 text-center">
              {isSubmitted 
                ? "Check your email for further instructions" 
                : "Enter your email and we'll send you a link to reset your password"
              }
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  aria-invalid={!isEmailValid}
                  className={`w-full p-4 outline-none bg-secondary focus:border-accent border ${
                    isEmailValid ? "border-secondary" : "border-red-500"
                  } text-foreground rounded-lg`}
                  disabled={isLoading}
                />
                {!isEmailValid && (
                  <small className="text-red-500 block">
                    Please enter a valid email address.
                  </small>
                )}
              </div>

              <Button
                type="submit"
                className="w-full p-4 bg-accent hover:bg-accent/80 text-foreground rounded-lg font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-foreground/80">
                We&apos;ve sent a password reset link to <span className="font-medium">{email}</span>
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="w-full p-4 bg-accent hover:bg-accent/80 text-foreground rounded-lg font-medium mt-4"
              >
                Resend Email
              </Button>
            </div>
          )}

          <div className="mt-6 text-center">
            <small className="text-foreground/80">
              Remember your password?{" "}
              <Link className="block text-accent hover:underline" href="/login">
                Back to Login
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;