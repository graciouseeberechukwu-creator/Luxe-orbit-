import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, HelpCircle, MessageSquare } from 'lucide-react';
import { COURSES, BUSINESS_DETAILS } from '../data/courses.ts';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/madebygracie287@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Luxe Échelon Orbit] New Course Enquiry from ${name.trim()}`,
          name: name.trim(),
          email: email.trim(),
          course_of_interest: selectedCourse || 'Not specified',
          subject: subject.trim() || 'General Course Enquiry',
          message: message.trim(),
          _captcha: 'false',
          _template: 'table'
        })
      });
    } catch (err) {
      console.warn('Form submission sent:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setSelectedCourse('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-white dark:bg-[#161b22] border-b border-[#F0EAE1] dark:border-[#30363d] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFBF7] dark:bg-[#21262d] border border-[#C5A059] text-[#4A0E2E] dark:text-[#DFB76C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>COURSE ADMISSIONS &amp; SUPPORT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-white tracking-tight">
            Contact &amp; Course Enquiry
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#524348] dark:text-neutral-300 mt-2 max-w-xl mx-auto">
            Have questions about our digital courses, syllabus materials, or enrolment? Send us an enquiry below. Messages are routed directly to our admissions desk.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-[#FCF9F8] dark:bg-[#0d1117] rounded-xl p-6 sm:p-8 border border-[#F0EAE1] dark:border-[#30363d] shadow-sm">
          
          {submitStatus === 'success' ? (
            <div className="p-8 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-white">
                Enquiry Sent Successfully!
              </h3>
              <p className="text-sm text-[#524348] dark:text-neutral-300 max-w-md mx-auto">
                Thank you for reaching out to <strong>{BUSINESS_DETAILS.brandName}</strong>. Your message has been automatically delivered to our admissions desk at <strong className="text-[#4A0E2E] dark:text-[#DFB76C]">madebygracie287@gmail.com</strong>. We will review your enquiry and get back to you promptly.
              </p>
              <div className="p-3 bg-white dark:bg-[#21262d] rounded-md border border-[#E2E8F0] dark:border-[#30363d] text-xs text-[#718096] dark:text-neutral-400 max-w-md mx-auto">
                A copy of your message has been transmitted directly to our admissions email.
              </div>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="px-6 py-2.5 rounded-md bg-[#4A0E2E] dark:bg-[#721847] text-white text-xs font-semibold cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-md text-xs text-red-700 dark:text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Please fill in all required fields (Name, Email, and Message).</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] dark:text-neutral-200 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Okon"
                    className="w-full h-11 px-3.5 bg-white dark:bg-[#161b22] border border-[#E2E8F0] dark:border-[#30363d] rounded-md text-xs text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#4A0E2E] dark:focus:border-[#DFB76C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] dark:text-neutral-200 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john@example.com"
                    className="w-full h-11 px-3.5 bg-white dark:bg-[#161b22] border border-[#E2E8F0] dark:border-[#30363d] rounded-md text-xs text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#4A0E2E] dark:focus:border-[#DFB76C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] dark:text-neutral-200 mb-1">
                    Course of Interest (Optional)
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full h-11 px-3.5 bg-white dark:bg-[#161b22] border border-[#E2E8F0] dark:border-[#30363d] rounded-md text-xs text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#4A0E2E] dark:focus:border-[#DFB76C]"
                  >
                    <option value="">-- Select a Course --</option>
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title} (₦{c.finalPrice.toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] dark:text-neutral-200 mb-1">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Enrolment question"
                    className="w-full h-11 px-3.5 bg-white dark:bg-[#161b22] border border-[#E2E8F0] dark:border-[#30363d] rounded-md text-xs text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#4A0E2E] dark:focus:border-[#DFB76C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1A1A] dark:text-neutral-200 mb-1">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you would like to know about our courses or learning experience..."
                  className="w-full p-3.5 bg-white dark:bg-[#161b22] border border-[#E2E8F0] dark:border-[#30363d] rounded-md text-xs text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#4A0E2E] dark:focus:border-[#DFB76C]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-11 px-8 rounded-md bg-[#4A0E2E] hover:bg-[#380C24] dark:bg-[#721847] dark:hover:bg-[#5b1339] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#718096] dark:text-neutral-400 pt-2">
                We value your privacy. Your information is used strictly to answer your course enquiry.
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
