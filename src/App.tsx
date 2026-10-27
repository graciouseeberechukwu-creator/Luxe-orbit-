/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { COURSES, Course, BUSINESS_DETAILS } from './data/courses.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CourseCard } from './components/CourseCard.tsx';
import { CheckoutDrawer } from './components/CheckoutDrawer.tsx';
import { SyllabusModal } from './components/SyllabusModal.tsx';
import { WhatToExpectSection } from './components/WhatToExpectSection.tsx';
import { BankClearanceGuide } from './components/BankClearanceGuide.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { Search, Sparkles, Filter, BookOpen } from 'lucide-react';

export default function App() {
  // Theme state: light mode is the strict default as requested in Section 7
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers state
  const [checkoutCourse, setCheckoutCourse] = useState<Course | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [syllabusCourse, setSyllabusCourse] = useState<Course | null>(null);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const categories = [
    'All',
    'Online Business',
    'Tech & Web',
    'Writing & Content',
    'Creative & Media',
    'AI & Tools',
    'Affiliate Marketing',
    'Digital Opportunities'
  ];

  // Filtering and search logic
  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === '' ||
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query) ||
      course.tagline.toLowerCase().includes(query) ||
      course.modules.some((m) =>
        m.title.toLowerCase().includes(query) ||
        m.lessons.some((l) => l.toLowerCase().includes(query))
      );
    return matchesCategory && matchesSearch;
  });

  const handleOpenEnroll = (course: Course) => {
    setCheckoutCourse(course);
    setIsCheckoutOpen(true);
  };

  const handleOpenSyllabus = (course: Course) => {
    setSyllabusCourse(course);
    setIsSyllabusOpen(true);
  };

  const scrollToCourses = () => {
    const el = document.getElementById('courses-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FCF9F8] dark:bg-[#0d1117] text-[#1A1A1A] dark:text-neutral-100 flex flex-col font-sans transition-colors selection:bg-[#C5A059]/30">
      
      {/* Sticky Navigation with Working Light/Dark Toggle */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        cartCount={0}
      />

      {/* Hero Section with Luxe Échelon Orbit Headline */}
      <Hero
        onExploreCourses={scrollToCourses}
        onOpenContact={scrollToContact}
      />

      {/* Main Course Catalogue Section */}
      <section id="courses-section" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFBF7] dark:bg-[#161b22] border border-[#C5A059] text-[#4A0E2E] dark:text-[#DFB76C] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>DIGITAL SKILLS &amp; BUSINESS OPPORTUNITIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-white tracking-tight">
              Official Course Catalogue
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#524348] dark:text-neutral-300 mt-2 max-w-2xl">
              Browse our complete library of 11 practical courses. All selling prices are displayed in Nigerian naira (₦).
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-[#161b22] border border-[#F0EAE1] dark:border-[#30363d] self-start md:self-auto shrink-0 shadow-xs">
            <BookOpen className="w-4 h-4 text-[#C5A059]" />
            <div className="text-xs">
              <span className="font-bold text-[#4A0E2E] dark:text-[#DFB76C]">{COURSES.length} Courses Available</span>
              <div className="text-[10px] text-[#718096] dark:text-neutral-400">Fixed Final Pricing</div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#F0EAE1] dark:border-[#30363d]">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#4A0E2E] dark:bg-[#721847] text-white shadow-xs'
                    : 'bg-white dark:bg-[#161b22] border border-[#E2E8F0] dark:border-[#30363d] text-[#1A1A1A] dark:text-neutral-200 hover:border-[#C5A059] hover:bg-[#FDFBF7] dark:hover:bg-[#21262d]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:w-80">
            <Search className="w-4 h-4 text-[#718096] dark:text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, skills, or topics..."
              className="w-full h-10 pl-9 pr-8 bg-white dark:bg-[#161b22] border border-[#E2E8F0] dark:border-[#30363d] rounded-md text-xs text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#4A0E2E] dark:focus:border-[#DFB76C]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#718096] hover:text-[#1A1A1A] dark:hover:text-white"
              >
                &times;
              </button>
            )}
          </div>

        </div>

        {/* 11 Course Cards Responsive Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnroll={handleOpenEnroll}
                onPreviewSyllabus={handleOpenSyllabus}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-[#161b22] rounded-xl border border-[#F0EAE1] dark:border-[#30363d] p-8">
            <Filter className="w-10 h-10 text-neutral-300 dark:text-neutral-600 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-white">No Matching Courses Found</h3>
            <p className="text-xs text-[#718096] dark:text-neutral-400 mt-1">
              Try adjusting your search terms or select "All" categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-md bg-[#4A0E2E] dark:bg-[#721847] text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* What to Expect Section (Pillars & Benefits without invented testimonials) */}
      <WhatToExpectSection onExploreCourses={scrollToCourses} />

      {/* Course Pricing & Enrolment Guide (with full official 11-course price schedule) */}
      <BankClearanceGuide onOpenContact={scrollToContact} />

      {/* Contact & Course Enquiry Form */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <FaqSection onOpenContact={scrollToContact} />

      {/* Footer */}
      <Footer />

      {/* Course Enrolment / Checkout Drawer */}
      <CheckoutDrawer
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        course={checkoutCourse}
      />

      {/* Course Details / Syllabus Modal */}
      <SyllabusModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        course={syllabusCourse}
        onEnroll={(course) => {
          setIsSyllabusOpen(false);
          handleOpenEnroll(course);
        }}
      />

    </div>
  );
}
