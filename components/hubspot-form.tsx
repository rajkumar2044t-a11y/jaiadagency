'use client';

import Script from 'next/script';

export default function HubSpotForm() {
  return (
    <section id="contact-form" className="py-16 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Fill out the form below and we&apos;ll get back to you within 24 hours
            </p>
          </div>

          {/* HubSpot Form Container */}
          <div className="bg-card border border-purple-500/30 rounded-xl p-6 md:p-8 lg:p-10">
            <Script 
              src="https://js-na2.hsforms.net/forms/embed/245807294.js" 
              strategy="lazyOnload"
            />
            <div 
              className="hs-form-frame hubspot-form-wrapper"
              data-region="na2" 
              data-form-id="b5f8e7d6-915c-4514-81cd-45a824822a35" 
              data-portal-id="245807294"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
