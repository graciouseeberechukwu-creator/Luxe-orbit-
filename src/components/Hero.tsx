import React from 'react';
import { BookOpen, ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/courses.ts';

interface HeroProps {
  onExploreCourses: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onOpenContact }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-[#FCF9F8] dark:bg-[#0d1117] border-b border-[#F0EAE1] dark:border-[#30363d] transition-colors">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#C5A059]/10 via-[#FFD8E5]/10 to-transparent dark:from-[#C5A059]/5 dark:via-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Tagline Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDFBF7] dark:bg-[#161b22] border border-[#C5A059] text-[#4A0E2E] dark:text-[#DFB76C] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[11px] font-bold tracking-widest uppercase font-mono">
              {BUSINESS_DETAILS.brandName} • {BUSINESS_DETAILS.tagline}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#21262d] border border-[#E2E8F0] dark:border-[#30363d] text-[#1A1A1A] dark:text-neutral-300 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
            <span>Digital Courses &amp; Skills Marketplace</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            
            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#1A1A1A] dark:text-white leading-[1.15] tracking-[-0.02em]">
              Learn Real Digital Skills.{' '}
              <span className="italic font-normal text-[#4A0E2E] dark:text-[#DFB76C] relative inline-block">
                Explore New Opportunities.
              </span>{' '}
              Build Your Future.
            </h1>

            {/* Subheading */}
            <p className="font-sans text-base sm:text-lg text-[#524348] dark:text-neutral-300 leading-relaxed max-w-2xl">
              <strong className="text-[#1A1A1A] dark:text-white font-semibold">Luxe Échelon Orbit</strong> offers practical learning opportunities for students, business owners, freelancers, and aspiring creators. Explore actionable courses in website design, copywriting, ghostwriting, animation, video editing, artificial intelligence, affiliate marketing, and online business opportunities.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreCourses}
                className="h-12 px-7 rounded-md bg-[#4A0E2E] hover:bg-[#380C24] dark:bg-[#721847] dark:hover:bg-[#5b1339] text-white text-[15px] font-semibold transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 flex items-center justify-center gap-2 cursor-pointer group active:scale-98"
              >
                <span>Browse Course Catalogue</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="h-12 px-6 rounded-md border-[1.5px] border-[#C5A059] bg-transparent hover:bg-[#FDFBF7] dark:hover:bg-[#161b22] text-[#4A0E2E] dark:text-[#DFB76C] text-[15px] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Course Enquiries</span>
              </button>
            </div>

            {/* Feature Highlights Grid */}
            <div className="pt-6 border-t border-[#F0EAE1] dark:border-[#30363d] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#524348] dark:text-neutral-300">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#FDFBF7] dark:bg-[#21262d] border border-[#C5A059]/50 flex items-center justify-center text-[#4A0E2E] dark:text-[#DFB76C] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A] dark:text-white">Practical &amp; Action-Oriented</div>
                  <div className="text-[11px] text-[#718096] dark:text-neutral-400">Step-by-step guides for real implementation</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#FDFBF7] dark:bg-[#21262d] border border-[#C5A059]/50 flex items-center justify-center text-[#4A0E2E] dark:text-[#DFB76C] shrink-0 mt-0.5">
                  <Layers className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A] dark:text-white">11 Curated Blueprints</div>
                  <div className="text-[11px] text-[#718096] dark:text-neutral-400">Web, AI, Writing, Media &amp; Affiliate Skills</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#FDFBF7] dark:bg-[#21262d] border border-[#C5A059]/50 flex items-center justify-center text-[#4A0E2E] dark:text-[#DFB76C] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A] dark:text-white">Clear Naira Pricing</div>
                  <div className="text-[11px] text-[#718096] dark:text-neutral-400">Transparent final prices without hidden fees</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Featured Overview Widget */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-[#161b22] rounded-xl p-6 border border-[#F0EAE1] dark:border-[#30363d] shadow-sm space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EAE1] dark:border-[#30363d]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-[#4A0E2E] dark:bg-[#5b1339] text-[#DFB76C] flex items-center justify-center font-serif font-bold text-sm">
                    L
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1A1A1A] dark:text-white">Digital Skills Catalogue</h3>
                    <p className="text-[11px] text-[#718096] dark:text-neutral-400">Luxe Échelon Orbit Marketplace</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  Ready
                </span>
              </div>

              <div className="space-y-2 text-xs text-[#524348] dark:text-neutral-300">
                <div className="p-3 rounded-lg bg-[#F8F9FA] dark:bg-[#21262d] border border-[#E2E8F0] dark:border-[#30363d] space-y-1">
                  <div className="font-semibold text-[#1A1A1A] dark:text-white flex items-center justify-between">
                    <span>BAB-Beginner's Affiliate Blueprint</span>
                    <span className="font-mono text-[#4A0E2E] dark:text-[#DFB76C] font-bold">₦10,000</span>
                  </div>
                  <p className="text-[11px] text-[#718096] dark:text-neutral-400">
                    Affiliate marketing fundamentals, traffic sources, and commission strategies.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#F8F9FA] dark:bg-[#21262d] border border-[#E2E8F0] dark:border-[#30363d] space-y-1">
                  <div className="font-semibold text-[#1A1A1A] dark:text-white flex items-center justify-between">
                    <span>Ghostwriting Goldmine</span>
                    <span className="font-mono text-[#4A0E2E] dark:text-[#DFB76C] font-bold">₦22,000</span>
                  </div>
                  <p className="text-[11px] text-[#718096] dark:text-neutral-400">
                    Writing high-value content and articles for busy clients and authors.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#F8F9FA] dark:bg-[#21262d] border border-[#E2E8F0] dark:border-[#30363d] space-y-1">
                  <div className="font-semibold text-[#1A1A1A] dark:text-white flex items-center justify-between">
                    <span>Ultimate Web Design Course</span>
                    <span className="font-mono text-[#4A0E2E] dark:text-[#DFB76C] font-bold">₦10,000</span>
                  </div>
                  <p className="text-[11px] text-[#718096] dark:text-neutral-400">
                    Responsive website creation, visual UI, and launching client portals.
                  </p>
                </div>
              </div>

              <button
                onClick={onExploreCourses}
                className="w-full py-2.5 px-4 rounded-md bg-[#4A0E2E] hover:bg-[#380C24] dark:bg-[#721847] dark:hover:bg-[#5b1339] text-white text-xs font-semibold text-center transition-colors cursor-pointer"
              >
                View All 11 Digital Courses &rarr;
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
