import Image from 'next/image';

export default function ProofsSection({ onImageClick }: { onImageClick: (image: string) => void }) {
  const proofs = [
    {
      metric: "1,000+",
      label: "Leads Delivered",
      icon: "👥"
    },
    {
      metric: "₹3–₹6",
      label: "Cost Per Lead",
      icon: "💰"
    },
    {
      metric: "100%",
      label: "Active, Real Users",
      icon: "✓"
    },
    {
      metric: "24hrs",
      label: "Quick Turnaround",
      icon: "⚡"
    }
  ];

  const campaigns = [
    {
      title: "Trading Community Growth",
      leads: "2,500+ leads",
      cost: "₹3.5/lead",
      growth: "From 5K to 12K members"
    },
    {
      title: "Betting Group Expansion",
      leads: "1,800+ leads",
      cost: "₹4/lead",
      growth: "From 3K to 9K members"
    },
    {
      title: "Course Creator Telegram",
      leads: "3,200+ leads",
      cost: "₹3.8/lead",
      growth: "From 8K to 18K members"
    }
  ];

  return (
    <section id="proofs" className="py-16 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Real Results, Daily Proof
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Backed by real campaigns. Real leads. Real growth.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {proofs.map((proof, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              <div className="relative bg-card border border-purple-500/20 rounded-xl p-4 md:p-8 text-center hover:border-accent/50 transition-all duration-300">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{proof.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">{proof.metric}</div>
                <p className="text-xs md:text-sm text-muted-foreground">{proof.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Campaign Examples */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Meta Ads Manager Real Screenshots</h3>
          <p className="text-center text-muted-foreground text-sm md:text-base mb-8">
            Daily proof directly from Meta Ads Manager showing actual campaign performance
          </p>
          <div className="space-y-6 md:space-y-8">
            {/* Screenshot 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              <div className="relative bg-card border border-purple-500/20 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 cursor-pointer" onClick={() => onImageClick('/proof-1.png')}>
                <div className="relative w-full h-auto">
                  <Image 
                    src="/proof-1.png" 
                    alt="Meta Ads Campaign Results - Multiple campaigns showing leads at ₹6-8.75 cost per result" 
                    width={1200}
                    height={400}
                    className="w-full h-auto hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-6 bg-black/30">
                  <p className="text-sm md:text-base font-semibold mb-2">Campaign Performance</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Multiple "Jani Babu Leads Campaign" showing 25-3,471 results with cost per result between ₹6-₹8.75. Daily budget ₹500, all campaigns ongoing.
                  </p>
                  <p className="text-xs text-accent mt-2">Click to view full screenshot</p>
                </div>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card border border-purple-500/20 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 cursor-pointer" onClick={() => onImageClick('/proof-2.png')}>
                <div className="relative w-full h-auto">
                  <Image 
                    src="/proof-2.png" 
                    alt="Saurya Leads Campaign - Results showing 916 subscribers at ₹6.17 and other campaign metrics" 
                    width={1200}
                    height={400}
                    className="w-full h-auto hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-6 bg-black/30">
                  <p className="text-sm md:text-base font-semibold mb-2">Website Subscriber Leads</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    "Saurya Leads campaign by jay agency" delivering 916 subscribers at ₹6.17 cost per result with 61,185 reach. Budget ₹400-800 daily.
                  </p>
                  <p className="text-xs text-accent mt-2">Click to view full screenshot</p>
                </div>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card border border-purple-500/20 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 cursor-pointer" onClick={() => onImageClick('/proof-3.png')}>
                <div className="relative w-full h-auto">
                  <Image 
                    src="/proof-3.png" 
                    alt="Detailed performance metrics showing cost per result ranging from ₹0.04 to ₹12.33 with impressions and reach data" 
                    width={1200}
                    height={400}
                    className="w-full h-auto hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-6 bg-black/30">
                  <p className="text-sm md:text-base font-semibold mb-2">Detailed Performance Metrics</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Close-up view showing cost per result as low as ₹0.04-₹12.33 with impressive reach metrics from 2,617 to 47,587 per campaign.
                  </p>
                  <p className="text-xs text-accent mt-2">Click to view full screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Examples - Old Cards Version */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Recent Campaign Summary</h3>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {campaigns.map((campaign, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card border border-purple-500/20 rounded-xl p-4 md:p-8 hover:border-accent/30 transition-all duration-300">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs font-bold mb-4">
                      Campaign #{index + 1}
                    </div>
                    <h4 className="text-base md:text-xl font-bold mb-2">{campaign.title}</h4>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="p-3 md:p-4 bg-black/20 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Leads Delivered</p>
                      <p className="text-base md:text-lg font-bold text-accent">{campaign.leads}</p>
                    </div>
                    <div className="p-3 md:p-4 bg-black/20 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Average Cost</p>
                      <p className="text-base md:text-lg font-bold">{campaign.cost}</p>
                    </div>
                    <div className="p-3 md:p-4 bg-gradient-to-r from-accent/10 to-purple-600/10 border border-accent/20 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Channel Growth</p>
                      <p className="text-base md:text-lg font-bold text-accent">{campaign.growth}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proof Statement */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-l-4 border-accent rounded-xl p-6 md:p-8 lg:p-12 text-center">
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            "Every lead we deliver comes with daily proof. Screenshots, timestamps, and user details. 
            We believe in 100% transparency."
          </p>
          <p className="text-accent font-bold text-sm md:text-base">— Jai Ads Agency Team</p>
        </div>
      </div>
    </section>
  );
}
