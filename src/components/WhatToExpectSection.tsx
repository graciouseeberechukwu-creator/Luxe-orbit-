import React from 'react';
import { Wrench, Tag, Download, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';
import { WHAT_TO_EXPECT, BUSINESS_DETAILS } from '../data/courses.ts';

interface WhatToExpectSectionProps {
  onExploreCourses: () => void;
}

export const WhatToExpectSection: React.FC<WhatToExpectSectionProps> = ({ onExploreCourses }) => {
  return (
    <section id="what-to-expect" className="py-16 md:py-24 bg-[#FAFAFA] dark:bg-[#0d1117] border-b border-[#F0EAE1] dark:border-[#30363d] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FDFBF7] dark:bg-[#161b22] border border-[#C5A059] text-[#4A0E2E] dark:text-[#DFB76C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            LEARNING WITH LUXE ÉCHELON ORBIT
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-white tracking-tight">
            What You Can Expect From Our Platform
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#524348] dark:text-neutral-300 mt-3 leading-relaxed">
            We provide structured, self-paced digital courses designed to help students, freelancers, and business owners build practical skills and explore income-generating opportunities.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="bg-white dark:bg-[#161b22] rounded-xl p-6 border border-[#F0EAE1] dark:border-[#30363d] hover:border-[#DFB76C] dark:hover:border-[#C5A059] transition-all space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-md bg-[#4A0E2E]/10 dark:bg-[#5b1339]/30 flex items-center justify-center text-[#4A0E2E] dark:text-[#DFB76C]">
              <Wrench className="w-5 h-5 text-[#4A0E2E] dark:text-[#DFB76C]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-white">
              Practical Skill Building
            </h3>
            <p className="text-xs text-[#524348] dark:text-neutral-300 leading-relaxed">
              Focus on actual implementation: setting up websites, writing client copy, editing videos, generating AI assets, and configuring accounts correctly.
            </p>
          </div>

          <div className="bg-white dark:bg-[#161b22] rounded-xl p-6 border border-[#F0EAE1] dark:border-[#30363d] hover:border-[#DFB76C] dark:hover:border-[#C5A059] transition-all space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-md bg-[#4A0E2E]/10 dark:bg-[#5b1339]/30 flex items-center justify-center text-[#4A0E2E] dark:text-[#DFB76C]">
              <TrendingUp className="w-5 h-5 text-[#4A0E2E] dark:text-[#DFB76C]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-white">
              Digital Opportunities
            </h3>
            <p className="text-xs text-[#524348] dark:text-neutral-300 leading-relaxed">
              Understand modern online business models, affiliate marketing, freelance client acquisition, and cross-border digital services.
            </p>
          </div>

          <div className="bg-white dark:bg-[#161b22] rounded-xl p-6 border border-[#F0EAE1] dark:border-[#30363d] hover:border-[#DFB76C] dark:hover:border-[#C5A059] transition-all space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-md bg-[#4A0E2E]/10 dark:bg-[#5b1339]/30 flex items-center justify-center text-[#4A0E2E] dark:text-[#DFB76C]">
              <Download className="w-5 h-5 text-[#4A0E2E] dark:text-[#DFB76C]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-white">
              Actionable Resources
            </h3>
            <p className="text-xs text-[#524348] dark:text-neutral-300 leading-relaxed">
              Every course provides step-by-step PDF guides, checklists, swipe files, and templates to assist your day-to-day workflow.
            </p>
          </div>

          <div className="bg-white dark:bg-[#161b22] rounded-xl p-6 border border-[#F0EAE1] dark:border-[#30363d] hover:border-[#DFB76C] dark:hover:border-[#C5A059] transition-all space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-md bg-[#4A0E2E]/10 dark:bg-[#5b1339]/30 flex items-center justify-center text-[#4A0E2E] dark:text-[#DFB76C]">
              <Tag className="w-5 h-5 text-[#4A0E2E] dark:text-[#DFB76C]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-white">
              Clear, Direct Pricing
            </h3>
            <p className="text-xs text-[#524348] dark:text-neutral-300 leading-relaxed">
              Fixed Nigerian naira (₦) prices clearly stated across all product cards with no hidden fees or forced subscriptions.
            </p>
          </div>

        </div>

        {/* Call to Action Banner */}
        <div className="rounded-xl bg-[#2B0018] dark:bg-[#1a0010] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#4A0E2E] dark:border-[#30363d]">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold">
              Ready to Expand Your Digital Capabilities?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              Explore our catalogue of 11 practical courses covering Web Design, Copywriting, AI Video, Ghostwriting, Affiliate Marketing, and more.
            </p>
          </div>

          <button
            onClick={onExploreCourses}
            className="h-11 px-6 rounded-md bg-[#C5A059] hover:bg-[#b08d46] text-[#2B0018] text-xs font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
