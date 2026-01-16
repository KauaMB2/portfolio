 
'use client';

import { useState, useRef, useEffect } from 'react';
import { commentsData } from "@/constants/comments";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import { Comment } from '@/models/comment';
import Link from 'next/link';

export const Feedbacks = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef!.current) {
        observer.unobserve(sectionRef!.current);
      }
    };
  }, []);

  const displayedComments = open ? commentsData : commentsData.slice(0, 3);

  return (
    <section 
      ref={sectionRef}
      id='feedbacks' 
      className="relative py-20 bg-linear-to-b from-gray-950 via-purple-950/10 to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold text-center mb-4 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('feedbacks.title')}
          </h2>
          
          <p className="text-center text-gray-400 mb-12 text-lg">
            O que as pessoas dizem sobre mim
          </p>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            open ? 'max-h-1250' : 'max-h-200'
          } overflow-hidden`}>
            {displayedComments.map((comment: Comment, index: number) => (
              <div
                key={comment.id}
                className={`group relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full p-6 rounded-2xl bg-linear-to-br from-gray-900/80 to-gray-800/80 
                                border border-purple-500/20 backdrop-blur-sm
                                hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]
                                transition-all duration-500 group-hover:scale-[1.02]">
                  
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-purple-500/20 group-hover:text-purple-500/40 transition-colors duration-300" />
                  
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <Link 
                      href={comment.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500 transition-all duration-300">
                        <Image
                          src={comment.avatar}
                          alt={t(`feedbacks.comments.${comment.id}.name`)}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    
                    <div className="flex-1">
                      <Link 
                        href={comment.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link"
                      >
                        <h6 className="text-white font-semibold text-lg group-hover/link:text-transparent group-hover/link:bg-linear-to-r group-hover/link:from-purple-400 group-hover/link:to-pink-400 group-hover/link:bg-clip-text transition-all duration-300">
                          {t(`feedbacks.comments.${comment.id}.name`)}
                        </h6>
                        <p className="text-purple-400 text-sm">@{comment.arrouba}</p>
                      </Link>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-gray-300 leading-relaxed">
                      {t(`feedbacks.comments.${comment.id}.content`)}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setOpen(!open)}
              size="lg"
              className="cursor-pointer bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
                         text-white font-semibold px-8 py-6 rounded-full 
                         shadow-lg hover:shadow-purple-500/50 
                         transition-all duration-300 transform hover:scale-105 
                         group/btn"
            >
              {open ? (
                <>
                  {t('feedbacks.showLess')}
                  <ChevronUp className="ml-2 h-5 w-5 group-hover/btn:animate-bounce" />
                </>
              ) : (
                <>
                  {t('feedbacks.showMore')}
                  <ChevronDown className="ml-2 h-5 w-5 group-hover/btn:animate-bounce" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px] -z-10" />
    </section>
  );
};