import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/courses.ts';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'What is Luxe Échelon Orbit?',
    answer: 'Luxe Échelon Orbit is an online digital courses and skills marketplace designed to help students, freelancers, creators, and business owners build real, income-generating digital capabilities. Our motto is Learn | Grow | Earn, focusing on practical skills, digital opportunities, and step-by-step implementation.'
  },
  {
    question: 'What digital courses are currently offered?',
    answer: 'We offer 11 structured digital courses: PayPal Creation Course, Ultimate Web Design Course, Ghostwriting Goldmine, Cartoon Animation, Video and Photo Editing Mastery, Content Creation Hacks, ChatGPT Cash Flow, AI Video Creation Mastery, BAB-Beginner\'s Affiliate Blueprint, The Ultimate Copywriting Guide, and Female Cyber Friend Income Blueprint.'
  },
  {
    question: 'What is the BAB-Beginner\'s Affiliate Blueprint?',
    answer: 'The BAB-Beginner\'s Affiliate Blueprint is an in-depth course on affiliate marketing. It teaches how to choose winning products, understand affiliate commission structures, build organic audience traffic on social media and WhatsApp, and generate revenue by recommending vetted solutions to buyers.'
  },
  {
    question: 'What is the Female Cyber Friend Income Blueprint?',
    answer: 'The Female Cyber Friend Income Blueprint is an informative, safety-first guide explaining the cyber friend and virtual conversation opportunity. It covers verified international platforms, strict personal boundary and privacy protocols, communication etiquette, and setting up legitimate payment reception channels.'
  },
  {
    question: 'Are course prices one-time or recurring subscriptions?',
    answer: 'All course prices on Luxe Échelon Orbit are strictly one-time payments clearly displayed in Nigerian naira (₦). There are no hidden fees, recurring charges, or surprise monthly subscriptions.'
  },
  {
    question: 'How do I receive my course materials after enrolment?',
    answer: 'Upon submitting your enrolment request or connecting with our admissions desk, you will receive full access to the video modules, downloadable PDF guides, templates, and frameworks via your designated email address.'
  },
  {
    question: 'How do I contact admissions for enquiries before enrolling?',
    answer: 'You can submit your questions directly using our on-site Contact & Course Enquiry Form, or connect directly with our admissions coordinator on WhatsApp for immediate guidance.'
  }
];

interface FaqSectionProps {
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-[#FCF9F8] dark:bg-[#0d1117] border-b border-[#F0EAE1] dark:border-[#30363d] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFBF7] dark:bg-[#21262d] border border-[#C5A059] text-[#4A0E2E] dark:text-[#DFB76C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-white tracking-tight">
            Frequently Addressed Questions
          </h2>
          <p className="font-sans text-sm text-[#524348] dark:text-neutral-300 mt-2">
            Clear information about our digital skills platform, courses, and enrolment.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#F0EAE1] dark:border-[#30363d] bg-white dark:bg-[#161b22] rounded-lg overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full py-4 px-5 text-left flex items-center justify-between hover:bg-[#FDFBF7] dark:hover:bg-[#21262d] transition-colors cursor-pointer"
              >
                <span className="font-serif text-base font-bold text-[#1A1A1A] dark:text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#4A0E2E] dark:text-[#DFB76C] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#718096] dark:text-neutral-400 shrink-0" />
                )}
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#524348] dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-[#30363d] bg-[#FCF9F8]/40 dark:bg-[#0d1117]/40">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-10 p-5 rounded-lg bg-white dark:bg-[#161b22] border border-[#DFB76C] dark:border-[#C5A059] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-serif font-bold text-base text-[#1A1A1A] dark:text-white">
              Have another question about a course?
            </div>
            <div className="text-xs text-[#718096] dark:text-neutral-400">
              Our admissions team is available to assist you.
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-md bg-[#4A0E2E] hover:bg-[#380C24] dark:bg-[#721847] dark:hover:bg-[#5b1339] text-white text-xs font-bold transition-all shrink-0 cursor-pointer"
          >
            Send a Course Enquiry &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
