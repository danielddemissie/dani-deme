"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-black text-main-foreground">
                Page Not Found
              </h2>
              <p className="text-lg text-secondary-foreground">
                We all get lost sometimes. Let's get you back on track!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3  text-main-background rounded-lg font-medium transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          <Button onClick={() => window.history.back()} className="">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
