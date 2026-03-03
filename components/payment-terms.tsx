export default function PaymentTermsSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                Simple Payment Terms
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Pay with confidence. Results first, then balance payment.
            </p>
          </div>

          {/* Payment Flow */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Step 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card border border-accent/30 rounded-xl p-6 md:p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 md:w-16 h-14 md:h-16 bg-gradient-to-br from-accent to-orange-400 text-black rounded-full font-bold text-xl md:text-2xl mb-6">
                  1
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">50% Advance Payment</h3>
                <p className="text-muted-foreground text-sm md:text-base mb-4">
                  Pay half upfront to secure your slot and start campaign setup
                </p>
                <div className="pt-4 border-t border-purple-500/20">
                  <p className="text-accent font-bold text-base md:text-lg">
                    Instant Campaign Launch
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card border border-purple-500/30 rounded-xl p-6 md:p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 md:w-16 h-14 md:h-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full font-bold text-xl md:text-2xl mb-6">
                  2
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Remaining After Results</h3>
                <p className="text-muted-foreground text-sm md:text-base mb-4">
                  Pay the balance once you're satisfied with the leads delivered
                </p>
                <div className="pt-4 border-t border-purple-500/20">
                  <p className="text-accent font-bold text-base md:text-lg">
                    100% Satisfaction Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why This Model */}
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-xl p-6 md:p-8 lg:p-12">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Why We Work This Way</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-accent text-xl md:text-2xl mt-1 flex-shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-sm md:text-base mb-1">Risk-Free for You</p>
                  <p className="text-muted-foreground text-xs md:text-sm">Only pay full amount after seeing real results and being completely satisfied</p>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-accent text-xl md:text-2xl mt-1 flex-shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-sm md:text-base mb-1">We're Confident in Our Work</p>
                  <p className="text-muted-foreground text-xs md:text-sm">We know we deliver. This payment structure proves it.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-accent text-xl md:text-2xl mt-1 flex-shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-sm md:text-base mb-1">Daily Proof & Transparency</p>
                  <p className="text-muted-foreground text-xs md:text-sm">Get daily screenshots showing every lead, so you know exactly what you're paying for</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
