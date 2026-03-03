export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/10 to-purple-900/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Our Services & Pricing
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Flexible packages designed for Telegram channel growth at scale
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Meta Ads Management Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
            <div className="relative bg-card border border-purple-500/30 rounded-xl p-6 md:p-8 hover:border-accent/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Meta Ads Management</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Expert campaign setup & optimization
                </p>
              </div>

              <div className="space-y-3 md:space-y-4 mb-8">
                <div className="flex items-center justify-between p-3 md:p-4 bg-black/20 rounded-lg">
                  <span className="font-semibold text-sm md:text-base">1 Week Package</span>
                  <span className="text-xl md:text-2xl font-bold text-accent">₹2,000</span>
                </div>
                <div className="flex items-center justify-between p-3 md:p-4 bg-black/20 rounded-lg">
                  <span className="font-semibold text-sm md:text-base">1 Month Package</span>
                  <span className="text-xl md:text-2xl font-bold text-accent">₹5,000</span>
                </div>
              </div>

              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>Campaign setup & optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>Daily performance tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>High-quality leads guaranteed</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>Real-time reporting</span>
                </li>
              </ul>

              <a 
                href="https://t.me/money_055" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-lg transition-all duration-200 inline-block text-center text-sm"
              >
                Choose Plan
              </a>
            </div>
          </div>

          {/* Landing Page Service Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
            <div className="relative bg-card border border-accent/30 rounded-xl p-6 md:p-8 hover:border-accent/70 transition-all duration-300 ring-1 ring-accent/10">
              <div className="absolute top-0 right-0 px-3 md:px-4 py-1 md:py-2 bg-gradient-to-r from-accent to-orange-400 text-black text-xs font-bold rounded-bl-lg rounded-tr-xl">
                POPULAR
              </div>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Landing Page Service</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Custom domain included
                </p>
              </div>

              <div className="space-y-3 md:space-y-4 mb-8">
                <div className="flex items-center justify-between p-3 md:p-4 bg-accent/10 rounded-lg border border-accent/30">
                  <span className="font-semibold text-sm md:text-base">Custom Landing Page</span>
                  <span className="text-xl md:text-2xl font-bold text-accent">₹1,500</span>
                </div>
              </div>

              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>Custom domain included</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>Professional design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>Mobile responsive</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>Lead capture form</span>
                </li>
              </ul>

              <a 
                href="https://t.me/money_055" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-gradient-to-r from-accent to-orange-400 hover:from-orange-300 hover:to-orange-500 text-black font-bold rounded-lg transition-all duration-200 inline-block text-center text-sm"
              >
                Get Landing Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
