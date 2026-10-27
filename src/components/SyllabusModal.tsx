import React, { useState } from 'react';
import { Course } from '../data/courses.ts';
import { X, Play, BookOpen, Download, CheckCircle, ArrowRight, Clock, ChevronDown, ChevronUp, Layers } from 'lucide-react';

interface SyllabusModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  course,
  isOpen,
  onClose,
  onEnroll
}) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'preview'>('syllabus');
  const [expandedModule, setExpandedModule] = useState<number>(1);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  if (!isOpen || !course) return null;

  const currentPriceFormatted = `₦${course.finalPrice.toLocaleString()}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1A1A1A]/60 backdrop-blur-[6px] transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center p-4 sm:p-6">
        <div className="inline-block w-full max-w-3xl bg-white dark:bg-[#161b22] rounded-xl text-left overflow-hidden shadow-2xl border border-[#F0EAE1] dark:border-[#30363d] my-8 transform transition-all relative text-[#1A1A1A] dark:text-neutral-200">
          
          {/* Header Banner */}
          <div className="p-6 bg-[#FCF9F8] dark:bg-[#0d1117] border-b border-[#F0EAE1] dark:border-[#30363d] relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-200/60 dark:hover:bg-[#21262d] text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-0.5 rounded-full bg-[#FDFBF7] dark:bg-[#21262d] border border-[#C5A059] text-[#4A0E2E] dark:text-[#DFB76C] text-[11px] font-bold uppercase tracking-wider mb-2">
              {course.category} • {course.badge}
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] dark:text-white max-w-2xl">
              {course.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#524348] dark:text-neutral-300 mt-1 max-w-2xl leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-[#718096] dark:text-neutral-400">
              <span className="flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                {course.duration}
              </span>
              <span>&bull;</span>
              <span className="font-medium">{course.level}</span>
              <span>&bull;</span>
              <span className="text-[#4A0E2E] dark:text-[#DFB76C] font-bold font-sans">
                {currentPriceFormatted} Final Selling Price
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#F0EAE1] dark:border-[#30363d] bg-white dark:bg-[#161b22] px-6 text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`py-3.5 px-4 font-semibold border-b-2 transition-colors ${
                activeTab === 'syllabus'
                  ? 'border-[#4A0E2E] text-[#4A0E2E] dark:border-[#DFB76C] dark:text-[#DFB76C]'
                  : 'border-transparent text-[#718096] dark:text-neutral-400 hover:text-[#1A1A1A] dark:hover:text-white'
              }`}
            >
              Complete Curriculum Modules ({course.modules.length})
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`py-3.5 px-4 font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'preview'
                  ? 'border-[#4A0E2E] text-[#4A0E2E] dark:border-[#DFB76C] dark:text-[#DFB76C]'
                  : 'border-transparent text-[#718096] dark:text-neutral-400 hover:text-[#1A1A1A] dark:hover:text-white'
              }`}
            >
              <Play className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Sample Lesson Summary</span>
            </button>
          </div>

          {/* Modal Content Area */}
          <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
            
            {activeTab === 'syllabus' && (
              <div className="space-y-4">
                <div className="space-y-3">
                  {course.modules.map((mod) => (
                    <div
                      key={mod.id}
                      className="border border-[#F0EAE1] dark:border-[#30363d] rounded-lg overflow-hidden bg-white dark:bg-[#21262d] transition-colors"
                    >
                      <button
                        onClick={() => setExpandedModule(expandedModule === mod.id ? 0 : mod.id)}
                        className="w-full p-4 text-left flex items-center justify-between bg-[#FDFBF7]/50 dark:bg-[#161b22]/50 hover:bg-[#FDFBF7] dark:hover:bg-[#161b22] transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-[#4A0E2E] dark:bg-[#5b1339] text-white text-xs font-bold flex items-center justify-center shrink-0">
                            {mod.id}
                          </span>
                          <div>
                            <div className="font-serif font-bold text-base text-[#1A1A1A] dark:text-white">
                              {mod.title}
                            </div>
                            <div className="text-xs text-[#718096] dark:text-neutral-400 font-mono">
                              {mod.duration}
                            </div>
                          </div>
                        </div>

                        {expandedModule === mod.id ? (
                          <ChevronUp className="w-5 h-5 text-[#4A0E2E] dark:text-[#DFB76C]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-400" />
                        )}
                      </button>

                      {expandedModule === mod.id && (
                        <div className="p-4 border-t border-[#F0EAE1] dark:border-[#30363d] bg-white dark:bg-[#21262d] space-y-4">
                          <p className="text-xs text-[#524348] dark:text-neutral-300">
                            {mod.description}
                          </p>

                          <div>
                            <div className="text-[11px] uppercase tracking-wider font-mono font-bold text-[#4A0E2E] dark:text-[#DFB76C] mb-2">
                              Topics Covered:
                            </div>
                            <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                              {mod.lessons.map((lesson, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                                  <span>{lesson}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2 border-t border-neutral-100 dark:border-[#30363d] flex flex-wrap items-center justify-between text-[11px] gap-2">
                            <span className="font-mono text-[#718096] dark:text-neutral-400">Practical Deliverables:</span>
                            <div className="flex flex-wrap items-center gap-2">
                              {mod.resources.map((res, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F8F9FA] dark:bg-[#161b22] border border-[#E2E8F0] dark:border-[#30363d] font-mono text-[#4A0E2E] dark:text-[#DFB76C] text-[10px]"
                                >
                                  <Download className="w-3 h-3 text-[#C5A059]" />
                                  {res}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* What's Included */}
                <div className="p-4 rounded-lg bg-[#F8F9FA] dark:bg-[#21262d] border border-[#F0EAE1] dark:border-[#30363d]">
                  <h4 className="text-xs font-bold text-[#1A1A1A] dark:text-white uppercase font-mono tracking-wider mb-2">
                    Included Course Resources
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#524348] dark:text-neutral-300">
                    {course.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[#C5A059] font-bold">&check;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preview' && (
              <div className="space-y-4">
                <div className="p-5 rounded-lg bg-[#2B0018] dark:bg-[#1c0211] text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#DFB76C] uppercase font-semibold">
                      Sample Lesson Walkthrough
                    </span>
                    <span className="text-xs font-mono text-neutral-300">
                      {course.sampleLesson.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {course.sampleLesson.title}
                  </h3>
                  <p className="text-xs text-neutral-200 leading-relaxed mb-4">
                    {course.sampleLesson.summary}
                  </p>

                  <div className="p-3 bg-white/10 rounded-md border border-white/20 mb-4">
                    <div className="text-[10px] uppercase font-mono text-[#DFB76C] font-bold">
                      Core Implementation Insight
                    </div>
                    <div className="text-xs text-white mt-0.5 italic">
                      "{course.sampleLesson.keyTakeaway}"
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                      className="px-4 py-2 rounded-md bg-[#C5A059] hover:bg-[#b08d46] text-[#2B0018] font-bold text-xs flex items-center gap-2 cursor-pointer transition-all"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>{isPlayingPreview ? 'Audio Preview Playing...' : 'Listen to Sample Walkthrough'}</span>
                    </button>

                    {isPlayingPreview && (
                      <span className="text-xs font-mono text-[#25D366] animate-pulse">
                        &bull; Preview Audio Active
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer CTA */}
          <div className="p-5 bg-[#FCF9F8] dark:bg-[#0d1117] border-t border-[#F0EAE1] dark:border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono text-[#718096] dark:text-neutral-400 uppercase">
                Final Course Selling Price
              </div>
              <div className="font-sans font-bold text-2xl text-[#4A0E2E] dark:text-[#DFB76C]">
                {currentPriceFormatted}
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none h-11 px-5 rounded-md border border-[#E2E8F0] dark:border-[#30363d] hover:bg-neutral-100 dark:hover:bg-[#21262d] text-xs font-semibold text-[#1A1A1A] dark:text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onEnroll(course);
                }}
                className="flex-1 sm:flex-none h-11 px-7 rounded-md bg-[#4A0E2E] hover:bg-[#380C24] dark:bg-[#721847] dark:hover:bg-[#5b1339] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Enrol in Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
