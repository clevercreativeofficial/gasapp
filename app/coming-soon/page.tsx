"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ComingSoon = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center px-4 py-10">
            <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Animated Illustration Section */}
                <div className="relative w-full md:w-1/2 flex justify-center">
                    <div className="relative w-72 h-72">
                        {/* Main orb with gradient and shine */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-xl border border-accent/30 shadow-2xl shadow-accent/10 flex items-center justify-center">
                            <div className="w-44 h-44 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border border-accent/20"></div>

                            {/* Floating elements */}
                            <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-accent/20 border border-accent/30 animate-float-1">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-10 right-6 w-8 h-8 rounded-full bg-accent/30 border border-accent/40 animate-float-2">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute top-12 right-10 w-6 h-6 rounded-full bg-accent/40 border border-accent/50 animate-float-3">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            </div>

                            {/* Shine effect */}
                            <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/10 blur-xl"></div>
                        </div>

                        {/* Coming Soon text overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl font-bold text-accent/30 tracking-wider">SOON</span>
                        </div>
                    </div>

                    {/* Subtle background elements */}
                    <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                            Feature in Development
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Something Amazing is <span className="block text-accent">Coming Soon</span>
                    </h1>

                    <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                        We&apos;re working hard to bring you an incredible new feature. Our team is putting the finishing touches on something special that will enhance your experience.
                    </p>

                    <div className="mb-8">
                        <p className="text-sm text-foreground/60 mb-2">Stay tuned for updates</p>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-accent/50 to-transparent mx-auto md:mx-0"></div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                        <Link href="/">
                            <Button className="sm:w-fit w-full p-4 bg-accent hover:bg-accent/80 text-foreground rounded-lg font-medium">
                                Return Home
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="sm:w-fit w-full p-4 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg"
                            onClick={() => window.history.back()}
                        >
                            Go Back
                        </Button>
                    </div>

                    <div className="mt-10 pt-6 border-t border-foreground/10">
                        <p className="text-sm text-foreground/50 mb-2">
                            Want to be the first to know when it&apos;s ready?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-4 py-2 text-sm bg-background border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                            />
                            <Button className="sm:w-fit w-full p-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg font-medium">
                                Notify Me
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated background elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                {mounted && (
                    <>
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slower"></div>
                    </>
                )}
            </div>

            <style jsx global>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default ComingSoon;