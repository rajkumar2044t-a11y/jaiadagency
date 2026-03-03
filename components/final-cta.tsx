export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-accent bg-clip-text text-transparent">
              Ready to Scale Your Telegram Channel?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
            Join 100+ satisfied clients growing their communities with our proven Meta Ads strategies. 
            Start your campaign today and see results within days.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center mb-8 md:mb-12">
            <a 
              href="https://t.me/money_055" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl transform hover:scale-105 text-sm md:text-base"
            >
              Start My Campaign
            </a>
            <a 
              href="https://t.me/+fEvB_DdocCA2Y2Jl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 md:px-10 py-3 md:py-4 border-2 border-accent text-accent hover:bg-accent/10 font-bold rounded-lg transition-all duration-200 transform hover:scale-105 text-sm md:text-base"
            >
              Join Our Channel
            </a>
          </div>

          {/* Telegram Contact */}
          <div className="bg-card border border-purple-500/30 rounded-xl p-6 md:p-8 lg:p-12 mb-8 md:mb-12">
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
              Have questions? Message us directly on Telegram
            </p>
            <a 
              href="https://t.me/money_055" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 text-sm md:text-base"
            >
              <span>💬</span>
              <span>DM @money_055</span>
            </a>
          </div>

          {/* Trust Elements */}
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 text-xs md:text-sm">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🛡️</div>
              <p className="font-semibold mb-1">100% Secure</p>
              <p className="text-muted-foreground text-xs">Safe payment with results guarantee</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">📱</div>
              <p className="font-semibold mb-1">Quick Response</p>
              <p className="text-muted-foreground text-xs">24/7 customer support on Telegram</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">✅</div>
              <p className="font-semibold mb-1">Proven Results</p>
              <p className="text-muted-foreground text-xs">100+ successful campaigns</p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-purple-500/20">
          <div className="text-center">
            <p className="text-accent font-bold mb-2 text-sm md:text-base">Limited Slots Available This Month</p>
            <p className="text-muted-foreground text-xs md:text-sm">
              Due to high demand, we accept only 5-10 new clients per month to maintain quality standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
