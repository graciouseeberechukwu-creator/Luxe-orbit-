import React, { useState } from 'react';
import { Sun, Moon, Menu, X, BookOpen, MessageSquare, HelpCircle, Sparkles, CheckCircle, ShoppingBag } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/courses.ts';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenCart?: () => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenCart,
  cartCount = 0
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Brand Notification Banner */}
      <div className="bg-[#2B0018] dark:bg-[#18000e] text-[#FDFBF7] text-xs py-2 px-4 border-b border-[#4A0E2E] dark:border-neutral-800 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="font-mono text-[11px] text-[#DFB76C] uppercase tracking-wider font-semibold">
              {BUSINESS_DETAILS.brandName}
            </span>
            <span className="hidden sm:inline text-neutral-300">
              • {BUSINESS_DETAILS.tagline} • Practical Digital Courses &amp; Skills Marketplace
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[11px]">
            <span className="text-[#DFB76C] hidden md:inline font-medium">
              11 Complete Digital Blueprints Available
            </span>
            <span className="text-white/30 hidden md:inline">•</span>
            <button
              onClick={() => scrollTo('courses-section')}
              className="text-[#DFB76C] hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Browse Catalogue
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 h-[72px] bg-white/95 dark:bg-[#161b22]/95 backdrop-blur-md border-b border-[#F0EAE1] dark:border-[#30363d] shadow-[0_1px_3px_rgba(74,14,46,0.03)] dark:shadow-none transition-colors">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Mark Left */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-md bg-[#4A0E2E] dark:bg-[#5b1339] flex items-center justify-center text-[#DFB76C] font-serif font-bold text-xl border border-[#C5A059]/50 shadow-xs group-hover:scale-105 transition-transform">
              L
            </div>
            <div>
              <div className="font-serif font-bold text-lg sm:text-xl tracking-tight text-[#1A1A1A] dark:text-white leading-tight flex items-center gap-1.5">
                <span>Luxe Échelon Orbit</span>
              </div>
              <p className="text-[10px] text-[#718096] dark:text-neutral-400 font-sans font-medium tracking-wide">
                Learn | Grow | Earn
              </p>
            </div>
          </div>

          {/* Centered Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7 text-[14px] font-medium text-[#1A1A1A] dark:text-neutral-200">
            <button
              onClick={() => scrollTo('courses-section')}
              className="hover:text-[#4A0E2E] dark:hover:text-[#DFB76C] transition-colors py-1 cursor-pointer"
            >
              Course Catalogue
            </button>
            <button
              onClick={() => scrollTo('what-to-expect')}
              className="hover:text-[#4A0E2E] dark:hover:text-[#DFB76C] transition-colors py-1 cursor-pointer"
            >
              What to Expect
            </button>
            <button
              onClick={() => scrollTo('enrolment-guide')}
              className="hover:text-[#4A0E2E] dark:hover:text-[#DFB76C] transition-colors py-1 cursor-pointer"
            >
              Enrolment Guide
            </button>
            <button
              onClick={() => scrollTo('contact-section')}
              className="hover:text-[#4A0E2E] dark:hover:text-[#DFB76C] transition-colors py-1 cursor-pointer"
            >
              Contact &amp; Enquiry
            </button>
            <button
              onClick={() => scrollTo('faq-section')}
              className="hover:text-[#4A0E2E] dark:hover:text-[#DFB76C] transition-colors py-1 cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} mode`}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} mode`}
              className="p-2 rounded-md border border-[#E2E8F0] dark:border-[#30363d] bg-white dark:bg-[#21262d] text-[#1A1A1A] dark:text-[#DFB76C] hover:bg-neutral-50 dark:hover:bg-[#30363d] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-4 h-4 text-[#4A0E2E]" />
                  <span className="text-[11px] text-[#718096]">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] text-neutral-300">Light</span>
                </>
              )}
            </button>

            {/* Browse CTA Button */}
            <button
              onClick={() => scrollTo('courses-section')}
              className="h-10 px-4 rounded-md text-xs font-semibold bg-[#4A0E2E] hover:bg-[#380C24] dark:bg-[#721847] dark:hover:bg-[#5b1339] text-white shadow-xs transition-all flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <BookOpen className="w-4 h-4 text-[#DFB76C]" />
              <span>Explore Courses</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center space-x-2">
            {/* Light/Dark Toggle for Mobile */}
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} mode`}
              className="p-2 rounded-md border border-[#E2E8F0] dark:border-[#30363d] bg-white dark:bg-[#21262d] text-[#1A1A1A] dark:text-[#DFB76C]"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#1A1A1A] dark:text-white hover:bg-neutral-100 dark:hover:bg-[#21262d] border border-[#E2E8F0] dark:border-[#30363d]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Width Menu Canvas */}
        {mobileMenuOpen && (
          <div className="sm:hidden fixed inset-x-0 top-[108px] bg-white dark:bg-[#161b22] border-b border-[#F0EAE1] dark:border-[#30363d] shadow-xl p-5 z-50 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollTo('courses-section')}
                className="text-left py-2 font-serif text-base font-semibold text-[#1A1A1A] dark:text-white border-b border-neutral-100 dark:border-[#30363d] flex items-center justify-between"
              >
                <span>Course Catalogue (11 Courses)</span>
                <span className="text-xs text-[#C5A059] font-sans">View</span>
              </button>
              <button
                onClick={() => scrollTo('what-to-expect')}
                className="text-left py-2 font-serif text-base font-semibold text-[#1A1A1A] dark:text-white border-b border-neutral-100 dark:border-[#30363d] flex items-center justify-between"
              >
                <span>What to Expect</span>
                <span className="text-xs text-[#C5A059] font-sans">Overview</span>
              </button>
              <button
                onClick={() => scrollTo('enrolment-guide')}
                className="text-left py-2 font-serif text-base font-semibold text-[#1A1A1A] dark:text-white border-b border-neutral-100 dark:border-[#30363d] flex items-center justify-between"
              >
                <span>Enrolment &amp; Pricing Guide</span>
                <span className="text-xs text-[#C5A059] font-sans">Guide</span>
              </button>
              <button
                onClick={() => scrollTo('contact-section')}
                className="text-left py-2 font-serif text-base font-semibold text-[#1A1A1A] dark:text-white border-b border-neutral-100 dark:border-[#30363d] flex items-center justify-between"
              >
                <span>Contact &amp; Enquiry Form</span>
                <span className="text-xs text-[#C5A059] font-sans">Enquire</span>
              </button>
              <button
                onClick={() => scrollTo('faq-section')}
                className="text-left py-2 font-serif text-base font-semibold text-[#1A1A1A] dark:text-white border-b border-neutral-100 dark:border-[#30363d] flex items-center justify-between"
              >
                <span>Frequently Asked Questions</span>
                <span className="text-xs text-[#C5A059] font-sans">FAQ</span>
              </button>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#718096] dark:text-neutral-400">
                  Theme Appearance:
                </span>
                <button
                  onClick={onToggleTheme}
                  className="px-3 py-1.5 rounded-md border border-[#E2E8F0] dark:border-[#30363d] text-xs font-semibold flex items-center gap-1 text-[#1A1A1A] dark:text-white"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="w-3.5 h-3.5" />
                      <span>Switch to Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Switch to Light Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
