'use client';

import { useState } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import WhyChooseUs from '@/components/why-choose-us';
import PaymentTermsSection from '@/components/payment-terms';
import ProofsSection from '@/components/proofs-section';
import FinalCTA from '@/components/final-cta';
import ImageModal from '@/components/image-modal';

export default function Home() {
  const [isProofsOpen, setIsProofsOpen] = useState(false);
  const [currentProofIndex, setCurrentProofIndex] = useState(0);

  const proofImages = [
    { src: '/proof-1.png', alt: 'Meta Ads Campaign Results - Multiple campaigns showing leads at ₹6-8.75 cost per result' },
    { src: '/proof-2.png', alt: 'Saurya Leads Campaign - Results showing 916 subscribers at ₹6.17 and other campaign metrics' },
    { src: '/proof-3.png', alt: 'Detailed performance metrics showing cost per result ranging from ₹0.04 to ₹12.33' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <ImageModal 
        isOpen={isProofsOpen}
        images={proofImages}
        initialIndex={currentProofIndex}
        onClose={() => setIsProofsOpen(false)}
      />
      <Header />
      <main className="pt-24">
        <HeroSection onViewResults={() => {
          setCurrentProofIndex(0);
          setIsProofsOpen(true);
        }} />
        <ServicesSection />
        <WhyChooseUs />
        <PaymentTermsSection />
        <ProofsSection onImageClick={(image) => {
          const index = proofImages.findIndex(img => img.src === image);
          setCurrentProofIndex(index >= 0 ? index : 0);
          setIsProofsOpen(true);
        }} />
        <FinalCTA />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/40 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h4 className="font-bold text-lg mb-4">Jai Ads Agency</h4>
              <p className="text-muted-foreground text-sm">
                Expert Meta Ads management for Telegram channel growth
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-white transition-colors">Meta Ads Management</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Landing Pages</a></li>
                <li><a href="#proofs" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="https://t.me/money_055" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://t.me/+fEvB_DdocCA2Y2Jl" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    Telegram Channel
                  </a>
                </li>
                <li>
                  <a href="https://t.me/money_055" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    DM @money_055
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Jai Ads Agency. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Specializing in Meta Ads for Telegram Channel Growth
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
