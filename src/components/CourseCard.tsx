import React from 'react';
import { Course } from '../data/courses.ts';
import { Clock, BookOpen, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onEnroll: (course: Course) => void;
  onPreviewSyllabus: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onEnroll,
  onPreviewSyllabus
}) => {
  const formattedPrice = `₦${course.finalPrice.toLocaleString()}`;

  return (
    <div className="group relative bg-white dark:bg-[#161b22] rounded-xl border border-[#F0EAE1] dark:border-[#30363d] hover:border-[#DFB76C] dark:hover:border-[#C5A059] transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lg flex flex-col h-full overflow-hidden">
      
      {/* 16:9 Thumbnail Image Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-[14px] bg-neutral-900">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Ambient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

        {/* Top-Left Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-2.5 py-1 rounded-full bg-[#FDFBF7] dark:bg-[#161b22] border border-[#C5A059] text-[#4A0E2E] dark:text-[#DFB76C] text-[11px] font-bold uppercase tracking-[0.05em] shadow-xs">
            {course.category}
          </span>
        </div>

        {/* Top-Right Badge Indicator */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-medium">
            <span>{course.badge}</span>
          </span>
        </div>

        {/* Bottom Thumbnail Overlay */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white/90 text-xs">
          <span className="font-mono text-[11px] bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
            {course.level}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-neutral-200">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{course.duration}</span>
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        
        {/* Exact Course Name */}
        <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#1A1A1A] dark:text-white leading-snug mb-2 group-hover:text-[#4A0E2E] dark:group-hover:text-[#DFB76C] transition-colors">
          {course.title}
        </h3>

        {/* Course Description */}
        <p className="font-sans text-[13px] text-[#524348] dark:text-neutral-300 leading-relaxed mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Key Practical Takeaways */}
        <div className="space-y-1.5 mb-5 text-xs text-[#524348] dark:text-neutral-300 border-b border-[#F0EAE1] dark:border-[#30363d] pb-4">
          {course.deliverables.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
          <div className="text-[11px] text-[#C5A059] font-medium pt-0.5">
            + {course.modules.length} Complete Modules &amp; Resource Guides
          </div>
        </div>

        {/* Prominent Selling Price Section */}
        <div className="mt-auto pt-2 mb-5">
          <div className="text-[11px] uppercase tracking-wider font-mono text-[#718096] dark:text-neutral-400 mb-0.5">
            Course Selling Price
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-sans font-bold text-2xl sm:text-3xl text-[#4A0E2E] dark:text-[#DFB76C] tracking-tight">
              {formattedPrice}
            </span>
            <span className="text-xs text-[#718096] dark:text-neutral-400 font-medium">
              (One-Time Access)
            </span>
          </div>
          <div className="text-[11px] text-[#718096] dark:text-neutral-400 mt-1 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Complete Course Curriculum &amp; Downloadable Vault</span>
          </div>
        </div>

        {/* Action Buttons: Course Details / Enrolment */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onPreviewSyllabus(course)}
            className="h-10 px-3 rounded-md border-[1.5px] border-[#C5A059] bg-transparent hover:bg-[#FDFBF7] dark:hover:bg-[#21262d] text-[#4A0E2E] dark:text-[#DFB76C] text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Course Details</span>
          </button>

          <button
            onClick={() => onEnroll(course)}
            className="h-10 px-3 rounded-md bg-[#4A0E2E] hover:bg-[#380C24] dark:bg-[#721847] dark:hover:bg-[#5b1339] text-white text-xs font-semibold transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer active:scale-98"
          >
            <span>Enrol Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
