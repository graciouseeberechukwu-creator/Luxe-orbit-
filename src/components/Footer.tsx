import React from 'react';
import { COURSES, BUSINESS_DETAILS } from '../data/courses.ts';
import { BookOpen, Mail, ShieldCheck, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './Icons.tsx';

interface FooterProps {
  onSelectCourse?: (courseId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B0018] dark:bg-[#0a0207] text-[#FCF9F8] border-t border-[#4A0E2E] dark:border-neutral-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 rounded-md bg-[#4A0E2E] dark:bg-[#5b1339] flex items-center justify-center text-[#DFB76C] font-serif font-bold text-xl border border-[#C5A059]/50">
                L
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-tight text-white block">
                  {BUSINESS_DETAILS.brandName}
                </span>
                <span className="text-xs text-[#DFB76C] font-mono tracking-wider">
                  {BUSINESS_DETAILS.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed max-w-sm">
              Luxe Échelon Orbit is an online digital courses and skills marketplace. We empower individuals, freelancers, and entrepreneurs with practical training in web design, copywriting, AI, video editing, affiliate marketing, and digital business opportunities.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#DFB76C]" />
                <span>{BUSINESS_DETAILS.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="font-mono">{BUSINESS_DETAILS.whatsappDisplay}</span>
              </div>
              <div className="pt-1 border-t border-white/10 text-[11px] text-neutral-300">
                <span className="text-[#DFB76C] font-semibold">Direct Settlement:</span> {BUSINESS_DETAILS.bankName} &bull; <span className="font-mono font-bold text-white">{BUSINESS_DETAILS.accountNumber}</span> &bull; {BUSINESS_DETAILS.accountName}
              </div>
            </div>
          </div>

          {/* Course Catalogue Quick Links (Col 6-9) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#DFB76C] uppercase tracking-wider">
              Course Catalogue (11 Courses)
            </h4>
            <ul className="grid grid-cols-1 gap-1.5 text-xs text-neutral-300">
              {COURSES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => scrollTo('courses-section')}
                    className="hover:text-white transition-colors text-left flex items-center justify-between w-full pr-4"
                  >
                    <span className="truncate">{c.title}</span>
                    <span className="font-mono text-[#DFB76C] text-[11px] shrink-0 ml-2">
                      ₦{c.finalPrice.toLocaleString()}
                    </span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('courses-section')}
                  className="text-[#DFB76C] hover:underline font-semibold text-[11px] pt-1"
                >
                  View all 11 courses &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Platform Navigation (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#DFB76C] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <button onClick={() => scrollTo('courses-section')} className="hover:text-white transition-colors text-left">
                  Course Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('what-to-expect')} className="hover:text-white transition-colors text-left">
                  What to Expect
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('enrolment-guide')} className="hover:text-white transition-colors text-left">
                  Pricing &amp; Enrolment Guide
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact-section')} className="hover:text-white transition-colors text-left">
                  Contact &amp; Enquiry Form
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq-section')} className="hover:text-white transition-colors text-left">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Regulatory Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="text-[11px]">
            &copy; {new Date().getFullYear()} {BUSINESS_DETAILS.brandName}. All rights reserved. Learn | Grow | Earn.
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <button onClick={() => scrollTo('faq-section')} className="hover:text-white transition-colors">
              Terms &amp; Policies
            </button>
            <button onClick={() => scrollTo('contact-section')} className="hover:text-white transition-colors">
              Admissions Support
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-1"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
