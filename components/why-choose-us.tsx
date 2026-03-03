export default function WhyChooseUs() {
  const features = [
    {
      icon: "🎯",
      title: "High Quality, Real & Active Leads",
      description: "100% verified Telegram users who are genuinely interested in your channel"
    },
    {
      icon: "📊",
      title: "Daily Result Proofs",
      description: "Transparent daily reporting with screenshots of all leads delivered"
    },
    {
      icon: "🚀",
      title: "Scalable Campaign Strategy",
      description: "Grow from 1,000 to 100,000+ members with our proven framework"
    },
    {
      icon: "💰",
      title: "Low Cost Per Lead",
      description: "Industry-leading rates at just ₹3–₹6 per high-quality lead"
    },
    {
      icon: "🔒",
      title: "Transparent Payment System",
      description: "50% advance, 50% after results. No hidden fees, full accountability"
    },
    {
      icon: "⚡",
      title: "Expert Meta Ads Team",
      description: "Certified specialists with years of Telegram growth experience"
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Why Choose Jai Ads Agency
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            The most trusted Meta Ads agency for Telegram channel growth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card border border-purple-500/20 rounded-xl p-4 md:p-6 hover:border-accent/50 transition-all duration-300 h-full">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{feature.icon}</div>
                <h3 className="text-base md:text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-sm md:text-base">
            Ready to see results for yourself?
          </p>
          <a 
            href="https://t.me/money_055" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl text-sm md:text-base"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
