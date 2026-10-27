import React, { useState, useEffect } from 'react';
import { Course, BUSINESS_DETAILS } from '../data/courses.ts';
import { WhatsAppIcon } from './Icons.tsx';
import { X, Copy, Check, Lock, ArrowRight, CheckCircle2, ShieldAlert, FileText, Info } from 'lucide-react';

interface CheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course | null;
  onEnrolmentSubmitted?: (enrolmentData: {
    orderId: string;
    course: Course;
    fullName: string;
    email: string;
    phone: string;
    amount: string;
  }) => void;
}

export const CheckoutDrawer: React.FC<CheckoutDrawerProps> = ({
  isOpen,
  onClose,
  course,
  onEnrolmentSubmitted
}) => {
  const [orderId, setOrderId] = useState('');
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedReference, setCopiedReference] = useState(false);
  const [copiedAmount, setCopiedAmount] = useState(false);
  
  // Enrolment form state
  const [activeTab, setActiveTab] = useState<'details' | 'enquiry'>('details');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen && course) {
      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      setOrderId(`LEO-${new Date().getFullYear()}-${randomDigits}`);
      setCopiedAccount(false);
      setCopiedReference(false);
      setCopiedAmount(false);
      setActiveTab('details');
      setSubmittedSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen, course]);

  if (!isOpen || !course) return null;

  const currentAmountFormatted = `₦${course.finalPrice.toLocaleString()}`;

  const copyToClipboard = (text: string, type: 'account' | 'ref' | 'amount') => {
    navigator.clipboard.writeText(text);
    if (type === 'account') {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2200);
    } else if (type === 'ref') {
      setCopiedReference(true);
      setTimeout(() => setCopiedReference(false), 2200);
    } else if (type === 'amount') {
      setCopiedAmount(true);
      setTimeout(() => setCopiedAmount(false), 2200);
    }
  };

  // WhatsApp prefilled URL
  const whatsappMessage = encodeURIComponent(
    `Hello Luxe Échelon Orbit, I would like to enrol in "${course.title}". Order Ref: ${orderId}, Tuition: ${currentAmountFormatted}. Please provide direct settlement and enrolment guidance.`
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_DETAILS.whatsappSupportNumber}?text=${whatsappMessage}`;

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert('Please enter your full name and email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate logging the enquiry locally
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      if (onEnrolmentSubmitted) {
        onEnrolmentSubmitted({
          orderId,
          course,
          fullName,
          email,
          phone,
          amount: currentAmountFormatted
        });
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-[#1A1A1A]/60 backdrop-blur-[6px] transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-[460px] bg-white dark:bg-[#161b22] rounded-t-2xl sm:rounded-none sm:rounded-l-2xl shadow-2xl flex flex-col h-full overflow-hidden border-l border-[#F0EAE1] dark:border-[#30363d] text-[#1A1A1A] dark:text-neutral-200 transition-colors">
          
          {/* Header */}
          <div className="p-5 border-b border-[#F0EAE1] dark:border-[#30363d] bg-[#FCF9F8] dark:bg-[#0d1117] flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-[#4A0E2E]/10 dark:bg-[#4A0E2E]/30 flex items-center justify-center text-[#4A0E2E] dark:text-[#DFB76C]">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#1A1A1A] dark:text-white flex items-center gap-1.5">
                  <span>Course Enrolment Checkout</span>
                </h2>
                <p className="text-[11px] text-[#718096] dark:text-neutral-400 font-mono">
                  Order Ref: <span className="font-semibold text-[#4A0E2E] dark:text-[#DFB76C]">{orderId}</span>
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-neutral-200/60 dark:hover:bg-[#21262d] text-neutral-500 hover:text-neutral-800 dark:hover:text-white transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#F0EAE1] dark:border-[#30363d] bg-white dark:bg-[#161b22] text-xs font-semibold">
            <button
              onClick={() => setActiveTab('details')}
              className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                activeTab === 'details'
                  ? 'border-[#4A0E2E] text-[#4A0E2E] dark:border-[#DFB76C] dark:text-[#DFB76C] bg-[#FDFBF7] dark:bg-[#21262d]'
                  : 'border-transparent text-[#718096] dark:text-neutral-400 hover:text-[#1A1A1A] dark:hover:text-white'
              }`}
            >
              1. Enrolment Details &amp; Price
            </button>
            <button
              onClick={() => setActiveTab('enquiry')}
              className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                activeTab === 'enquiry'
                  ? 'border-[#4A0E2E] text-[#4A0E2E] dark:border-[#DFB76C] dark:text-[#DFB76C] bg-[#FDFBF7] dark:bg-[#21262d]'
                  : 'border-transparent text-[#718096] dark:text-neutral-400 hover:text-[#1A1A1A] dark:hover:text-white'
              }`}
            >
              2. Submit Enrolment Form
            </button>
          </div>

          {/* Drawer Body Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            
            {/* Selected Course Summary Card */}
            <div className="p-3.5 rounded-lg bg-[#FFFFFF] dark:bg-[#21262d] border border-[#F0EAE1] dark:border-[#30363d] flex items-center gap-3.5 shadow-2xs">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-16 h-12 object-cover rounded-md border border-[#F0EAE1] dark:border-[#30363d] shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase font-mono tracking-wider text-[#C5A059] font-bold">
                  {course.category}
                </div>
                <div className="text-xs font-bold text-[#1A1A1A] dark:text-white truncate">
                  {course.title}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[11px] text-[#718096] dark:text-neutral-400">Final Selling Price:</span>
                  <span className="font-bold text-sm text-[#4A0E2E] dark:text-[#DFB76C] font-sans">
                    {currentAmountFormatted}
                  </span>
                </div>
              </div>
            </div>

            {activeTab === 'details' ? (
              <>
                {/* Price Confirmation Tile */}
                <div className="p-4 rounded-lg bg-[#F8F9FA] dark:bg-[#21262d] border border-dashed border-[#C5A059] space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F0EAE1] dark:border-[#30363d]">
                    <span className="text-xs font-bold text-[#1A1A1A] dark:text-white">
                      Order Summary
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#4A0E2E] dark:text-[#DFB76C]">
                      {course.category === 'Affiliate Marketing' ? 'AFFILIATE MARKETING' : 'DIRECT PRICING'}
                    </span>
                  </div>

                  {/* Course Details row */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#718096] dark:text-neutral-400">Course Name:</span>
                    <span className="font-semibold text-right max-w-[220px] truncate text-[#1A1A1A] dark:text-white">
                      {course.title}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#718096] dark:text-neutral-400">Order Reference:</span>
                    <button
                      onClick={() => copyToClipboard(orderId, 'ref')}
                      className="font-mono font-bold text-[#4A0E2E] dark:text-[#DFB76C] hover:underline flex items-center gap-1"
                    >
                      <span>{orderId}</span>
                      {copiedReference ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  <div className="flex justify-between items-center text-sm pt-2 border-t border-neutral-200 dark:border-[#30363d]">
                    <span className="font-bold text-[#1A1A1A] dark:text-white">Total Amount Due:</span>
                    <button
                      onClick={() => copyToClipboard(currentAmountFormatted, 'amount')}
                      className="font-sans font-bold text-lg text-[#4A0E2E] dark:text-[#DFB76C] hover:underline flex items-center gap-1"
                    >
                      <span>{currentAmountFormatted}</span>
                      {copiedAmount ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>

                {/* Moniepoint Direct Settlement Account Tile */}
                <div className="p-4 rounded-lg bg-[#F8F9FA] dark:bg-[#21262d] border border-dashed border-[#C5A059] space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F0EAE1] dark:border-[#30363d]">
                    <div>
                      <span className="text-xs font-bold text-[#1A1A1A] dark:text-white block">
                        {BUSINESS_DETAILS.bankName}
                      </span>
                      <span className="text-[10px] text-[#718096] dark:text-neutral-400">
                        Official Direct Transfer Account
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      Active
                    </span>
                  </div>

                  {/* Account Name */}
                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-wider text-[#718096] dark:text-neutral-400 block mb-0.5">
                      Account Name
                    </label>
                    <div className="text-xs font-bold text-[#1A1A1A] dark:text-white select-all">
                      {BUSINESS_DETAILS.accountName}
                    </div>
                  </div>

                  {/* Account Number with Interactive Copy */}
                  <div className="p-3 bg-white dark:bg-[#161b22] rounded-md border border-[#E2E8F0] dark:border-[#30363d] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#718096] dark:text-neutral-400 block">
                        Account Number ({BUSINESS_DETAILS.bankName})
                      </span>
                      <span className="font-mono text-base font-bold text-[#4A0E2E] dark:text-[#DFB76C] tracking-wider select-all">
                        {BUSINESS_DETAILS.accountNumber}
                      </span>
                    </div>

                    <button
                      onClick={() => copyToClipboard(BUSINESS_DETAILS.accountNumber, 'account')}
                      className={`h-8 px-3 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                        copiedAccount
                          ? 'bg-[#25D366] text-white'
                          : 'bg-[#4A0E2E] dark:bg-[#721847] text-white hover:bg-[#380C24]'
                      }`}
                    >
                      {copiedAccount ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Order Reference Narration */}
                  <div className="flex justify-between items-center text-xs pt-1">
                    <span className="text-[#718096] dark:text-neutral-400">Payment Narration / Ref:</span>
                    <button
                      onClick={() => copyToClipboard(orderId, 'ref')}
                      className="font-mono font-bold text-[#4A0E2E] dark:text-[#DFB76C] hover:underline flex items-center gap-1"
                    >
                      <span>{orderId}</span>
                      {copiedReference ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>

                {/* Enrolment Guidance */}
                <div className="p-3.5 rounded-lg bg-[#FCF9F8] dark:bg-[#0d1117] border border-[#F0EAE1] dark:border-[#30363d] space-y-2 text-xs text-[#524348] dark:text-neutral-300">
                  <div className="flex items-center gap-1.5 font-bold text-[#1A1A1A] dark:text-white">
                    <Info className="w-4 h-4 text-[#C5A059]" />
                    <span>How to Complete Your Enrolment:</span>
                  </div>
                  <ol className="list-decimal pl-4 space-y-1 text-[11px] text-[#718096] dark:text-neutral-400">
                    <li>
                      Transfer exact tuition (<strong className="text-[#4A0E2E] dark:text-[#DFB76C]">{currentAmountFormatted}</strong>) to the Moniepoint account above.
                    </li>
                    <li>
                      Use order reference <strong className="font-mono text-[#1A1A1A] dark:text-white">{orderId}</strong> in your transfer remark.
                    </li>
                    <li>
                      Click the WhatsApp button below or use Tab 2 to send your confirmation and receive your course access.
                    </li>
                  </ol>
                </div>

                {/* CTAs */}
                <div className="space-y-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-12 rounded-md bg-[#25D366] hover:bg-[#20BA57] text-white font-semibold text-xs flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer text-center"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Enrol via WhatsApp ({currentAmountFormatted})</span>
                  </a>

                  <button
                    onClick={() => setActiveTab('enquiry')}
                    className="w-full h-10 rounded-md border border-[#4A0E2E] dark:border-[#DFB76C] text-[#4A0E2E] dark:text-[#DFB76C] hover:bg-[#FDFBF7] dark:hover:bg-[#21262d] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Fill Out Enrolment Details Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </>
            ) : (
              /* Tab 2: Enrolment Form */
              <form onSubmit={handleSubmitEnquiry} className="space-y-4">
                {submittedSuccess ? (
                  <div className="p-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3 animate-fadeIn">
                    <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                    <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-white">
                      Enrolment Request Received!
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300">
                      Thank you, <strong className="text-[#1A1A1A] dark:text-white">{fullName}</strong>. Your enrolment request for <strong className="text-[#4A0E2E] dark:text-[#DFB76C]">{course.title}</strong> (Ref: {orderId}) has been logged. Our admissions desk will contact you via email ({email}) with access instructions.
                    </p>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 rounded-md bg-[#4A0E2E] text-white text-xs font-semibold"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="p-3 bg-[#FDFBF7] dark:bg-[#21262d] rounded-md border border-[#C5A059]/40 text-xs text-[#524348] dark:text-neutral-300">
                      Provide your contact details so our admissions team can prepare your course access materials.
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] dark:text-neutral-200 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Samuel Adeyemi"
                        className="w-full h-11 px-3.5 bg-white dark:bg-[#0d1117] border border-[#E2E8F0] dark:border-[#30363d] rounded-md text-xs text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#4A0E2E] dark:focus:border-[#DFB76C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] dark:text-neutral-200 mb-1">
                        Email Address (For Course Materials) *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. samuel@example.com"
                        className="w-full h-11 px-3.5 bg-white dark:bg-[#0d1117] border border-[#E2E8F0] dark:border-[#30363d] rounded-md text-xs text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#4A0E2E] dark:focus:border-[#DFB76C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] dark:text-neutral-200 mb-1">
                        Phone / WhatsApp Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +234 801 234 5678"
                        className="w-full h-11 px-3.5 bg-white dark:bg-[#0d1117] border border-[#E2E8F0] dark:border-[#30363d] rounded-md text-xs text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#4A0E2E] dark:focus:border-[#DFB76C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] dark:text-neutral-200 mb-1">
                        Questions or Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Any specific questions about this course..."
                        className="w-full p-2.5 bg-white dark:bg-[#0d1117] border border-[#E2E8F0] dark:border-[#30363d] rounded-md text-xs text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#4A0E2E] dark:focus:border-[#DFB76C]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-md bg-[#4A0E2E] hover:bg-[#380C24] dark:bg-[#721847] dark:hover:bg-[#5b1339] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting Enrolment Details...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enrolment Request ({currentAmountFormatted})</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('details')}
                      className="w-full py-2 text-xs text-[#718096] dark:text-neutral-400 hover:text-[#1A1A1A] dark:hover:text-white text-center"
                    >
                      &larr; Back to Enrolment Overview
                    </button>
                  </>
                )}
              </form>
            )}

          </div>

          {/* Drawer Footer */}
          <div className="p-4 bg-[#F8F9FA] dark:bg-[#0d1117] border-t border-[#F0EAE1] dark:border-[#30363d] text-center text-[11px] text-[#718096] dark:text-neutral-400 flex items-center justify-center gap-2">
            <span>{BUSINESS_DETAILS.brandName} &bull; {BUSINESS_DETAILS.tagline}</span>
          </div>

        </div>
      </div>
    </div>
  );
};
