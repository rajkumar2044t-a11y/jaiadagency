export default function HeroSection({ onViewResults }: { onViewResults: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20 pb-12 md:pb-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <div className="px-3 md:px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-accent font-semibold text-xs md:text-sm">
              ✨ Scale Your Telegram Channel Fast
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Get High Quality Telegram Leads at Just ₹3–₹6
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-3 md:mt-4 text-accent">Per Lead</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Scale your Telegram channel with expert Meta Ads management. Real, active leads delivered daily with proven results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-8">
            <a 
              href="https://t.me/money_055" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl text-center text-sm md:text-base"
            >
              Join Telegram
            </a>
            <button 
              onClick={onViewResults}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-accent text-accent hover:bg-accent/10 font-bold rounded-lg transition-all duration-200 text-center text-sm md:text-base"
            >
              View Our Results
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center pt-6 md:pt-8 text-xs sm:text-sm md:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-accent text-lg md:text-xl flex-shrink-0">✓</span>
              <span>100+ Satisfied Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent text-lg md:text-xl flex-shrink-0">✓</span>
              <span>Daily Proof Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent text-lg md:text-xl flex-shrink-0">✓</span>
              <span>Transparent & Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
