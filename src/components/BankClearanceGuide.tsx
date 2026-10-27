import React from 'react';
import { COURSES, BUSINESS_DETAILS } from '../data/courses.ts';
import { BookOpen, CheckCircle2, ShieldCheck, Tag, Info, ArrowRight } from 'lucide-react';

interface BankClearanceGuideProps {
  onOpenContact: () => void;
}

export const BankClearanceGuide: React.FC<BankClearanceGuideProps> = ({ onOpenContact }) => {
  return (
    <section id="enrolment-guide" className="py-16 md:py-24 bg-white dark:bg-[#161b22] border-b border-[#F0EAE1] dark:border-[#30363d] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFBF7] dark:bg-[#21262d] border border-[#C5A059] text-[#4A0E2E] dark:text-[#DFB76C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>TRANSPARENT PRICING &amp; ENROLMENT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-white tracking-tight">
            Course Pricing &amp; Enrolment Guide
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#524348] dark:text-neutral-300 mt-3 leading-relaxed">
            All course selling prices on Luxe Échelon Orbit are fixed and explicitly listed in Nigerian naira (₦). Review the complete price schedule below.
          </p>
        </div>

        {/* 3 Step Enrolment Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          <div className="bg-[#FCF9F8] dark:bg-[#0d1117] rounded-xl p-6 border border-[#F0EAE1] dark:border-[#30363d] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#4A0E2E] dark:bg-[#5b1339] text-white font-mono font-bold text-sm flex items-center justify-center">
              01
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-white">
              Choose Your Course
            </h3>
            <p className="text-xs text-[#524348] dark:text-neutral-300 leading-relaxed">
              Explore the 11 courses in our catalogue, review the modules, deliverables, and choose the skill you wish to master.
            </p>
          </div>

          <div className="bg-[#FCF9F8] dark:bg-[#0d1117] rounded-xl p-6 border border-[#F0EAE1] dark:border-[#30363d] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#C5A059] text-[#2B0018] font-mono font-bold text-sm flex items-center justify-center">
              02
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-white">
              Confirm Exact Final Price
            </h3>
            <p className="text-xs text-[#524348] dark:text-neutral-300 leading-relaxed">
              Every course displays its confirmed final selling price in Nigerian naira with no added surprise charges or mandatory subscriptions.
            </p>
          </div>

          <div className="bg-[#FCF9F8] dark:bg-[#0d1117] rounded-xl p-6 border border-[#F0EAE1] dark:border-[#30363d] space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-mono font-bold text-sm flex items-center justify-center">
              03
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-white">
              Connect &amp; Access Materials
            </h3>
            <p className="text-xs text-[#524348] dark:text-neutral-300 leading-relaxed">
              Submit your enrolment request or connect via WhatsApp to receive your access link and downloadable course resources.
            </p>
          </div>

        </div>

        {/* Complete Verified Pricing Schedule Table */}
        <div className="bg-white dark:bg-[#0d1117] rounded-xl border border-[#F0EAE1] dark:border-[#30363d] overflow-hidden shadow-xs mb-10">
          
          <div className="p-5 bg-[#FCF9F8] dark:bg-[#161b22] border-b border-[#F0EAE1] dark:border-[#30363d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <span className="font-serif font-bold text-base text-[#1A1A1A] dark:text-white">
                Official Course Schedule &amp; Final Prices
              </span>
              <p className="text-xs text-[#718096] dark:text-neutral-400">
                All 11 courses with confirmed final selling prices in Nigerian naira (₦)
              </p>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-[#FDFBF7] dark:bg-[#21262d] text-[#4A0E2E] dark:text-[#DFB76C] border border-[#C5A059]/40">
              11 Official Courses
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#524348] dark:text-neutral-300">
              <thead className="bg-[#F8F9FA] dark:bg-[#161b22] text-[11px] font-mono text-[#718096] dark:text-neutral-400 uppercase border-b border-[#F0EAE1] dark:border-[#30363d]">
                <tr>
                  <th className="py-3 px-6">#</th>
                  <th className="py-3 px-6">Course Name</th>
                  <th className="py-3 px-6">Category</th>
                  <th className="py-3 px-6 text-right">Final Selling Price (₦)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EAE1] dark:divide-[#30363d]">
                {COURSES.map((course, index) => (
                  <tr key={course.id} className="hover:bg-[#FCF9F8] dark:hover:bg-[#161b22]/50 transition-colors">
                    <td className="py-3.5 px-6 font-mono font-bold text-[#718096] dark:text-neutral-400">
                      {String(index + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-[#1A1A1A] dark:text-white">
                      {course.title}
                    </td>
                    <td className="py-3.5 px-6 font-mono text-[11px] text-[#718096] dark:text-neutral-400">
                      {course.category}
                      {course.category === 'Affiliate Marketing' && (
                        <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-[#C5A059]/15 text-[#4A0E2E] dark:text-[#DFB76C] font-bold">
                          Affiliate Exception
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-6 font-sans font-bold text-base text-[#4A0E2E] dark:text-[#DFB76C] text-right">
                      ₦{course.finalPrice.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Integration Disclaimer Note */}
        <div className="p-4 rounded-lg bg-[#F8F9FA] dark:bg-[#0d1117] border border-[#E2E8F0] dark:border-[#30363d] text-xs text-[#524348] dark:text-neutral-300 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-semibold text-[#1A1A1A] dark:text-white">
              Enrolment &amp; Payment Verification Note
            </div>
            <p className="text-[11px] text-[#718096] dark:text-neutral-400 leading-relaxed">
              If you have any questions prior to enrolment or require custom corporate onboarding, please use our{' '}
              <button onClick={onOpenContact} className="text-[#4A0E2E] dark:text-[#DFB76C] underline font-semibold cursor-pointer">
                Contact &amp; Enquiry Form
              </button>{' '}
              or chat directly with our admissions coordinator on WhatsApp.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
