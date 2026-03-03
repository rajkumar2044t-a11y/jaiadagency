'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Jai Ads Agency" 
              width={140}
              height={45}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Why Us
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#proofs" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Results
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <a 
              href="https://t.me/+fEvB_DdocCA2Y2Jl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block px-3 md:px-5 py-2 text-xs md:text-sm bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-200 whitespace-nowrap"
            >
              Join Channel
            </a>
            <a 
              href="https://t.me/money_055" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block px-4 md:px-6 py-2 text-sm md:text-base bg-gradient-to-r from-accent to-orange-400 text-black font-bold rounded-lg hover:from-orange-300 hover:to-orange-500 transition-all duration-200 whitespace-nowrap"
            >
              Contact Us
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-purple-500/20 space-y-4">
            <a 
              href="#services" 
              className="block text-muted-foreground hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#why-us" 
              className="block text-muted-foreground hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </a>
            <a 
              href="#pricing" 
              className="block text-muted-foreground hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#proofs" 
              className="block text-muted-foreground hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Results
            </a>
            <a 
              href="https://t.me/+fEvB_DdocCA2Y2Jl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-sm mb-2"
            >
              Join Channel
            </a>
            <a 
              href="https://t.me/money_055" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 bg-gradient-to-r from-accent to-orange-400 text-black font-bold rounded-lg text-sm"
            >
              Contact Us
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
