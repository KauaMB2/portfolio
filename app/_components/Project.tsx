"use client";

import { useState, useEffect, useRef } from "react";
import { ProjectDialog } from "./ProjectDialog";
import colorSharp2 from "@/public/img/color-sharp2.png";
import 'animate.css';
import { projects } from "@/constants/projects";
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import Image from "next/image";
import { Project } from "@/models/project";

interface Category {
  key: string;
  label: string;
}

interface ResponsiveStyles {
  padding: string;
  fontSize: string;
  minHeight: string;
}

export const Projects = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<string>("1");
  const [category, setCategory] = useState<string>('web_development');
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1920
  );
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setTab("1");
  };

  const getResponsiveStyles = (): ResponsiveStyles => {
    if (windowWidth <= 400) {
      return { padding: '10px 6px', fontSize: '10px', minHeight: '50px' };
    } else if (windowWidth <= 480) {
      return { padding: '12px 8px', fontSize: '11px', minHeight: '55px' };
    } else if (windowWidth <= 600) {
      return { padding: '12px 12px', fontSize: '12px', minHeight: '58px' };
    } else if (windowWidth <= 768) {
      return { padding: '14px 16px', fontSize: '13px', minHeight: '60px' };
    } else if (windowWidth <= 992) {
      return { padding: '16px 24px', fontSize: '14px', minHeight: '62px' };
    } else if (windowWidth <= 1200) {
      return { padding: '18px 32px', fontSize: '15px', minHeight: '64px' };
    } else {
      return { padding: '20px 42px', fontSize: '17px', minHeight: '66px' };
    }
  };

  const responsiveStyles = getResponsiveStyles();
  const isMobile = windowWidth <= 768;

  const categoriesList: Category[] = [
    { key: 'web_development', label: t('projects.categories.web_development') },
    { key: 'computer_vision', label: t('projects.categories.computer_vision') },
    { key: 'mobile', label: t('projects.categories.mobile') },
    { key: 'eletronic', label: t('projects.categories.eletronic') },
    { key: 'GUI', label: t('projects.categories.GUI') },
  ];

  const getRoundedClass = (index: number, total: number, isMobileView: boolean) => {
    if (!isMobileView) {
      // Desktop: linha única
      if (index === 0) return 'rounded-l-[55px]';
      if (index === total - 1) return 'rounded-r-[55px]';
      return '';
    } else {
      // Mobile: 3 botões na primeira linha, 2 na segunda
      if (index === 0) return 'rounded-tl-[55px]'; // Primeiro da primeira linha - canto superior esquerdo
      if (index === 2) return 'rounded-tr-[55px]'; // Último da primeira linha - canto superior direito
      if (index === 3) return 'rounded-bl-[55px]'; // Primeiro da segunda linha - canto inferior esquerdo
      if (index === 4) return 'rounded-br-[55px]'; // Último da segunda linha - canto inferior direito
      return '';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-[#0a0a0a]" 
      id="projects"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`${isVisible ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-12 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('projects.title')}
            </h2>
            <Tabs value={category} onValueChange={handleCategoryChange} className="w-full mb-12">
              <div className="w-full">
                {isMobile ? (
                  <TabsList className="w-full h-auto p-0 bg-transparent block">
                    {/* Primeira linha - 3 botões */}
                    <div className="flex gap-0 mb-0">
                      {categoriesList.slice(0, 3).map((cat, index) => {
                        const hasMultipleWords = cat.label.trim().split(/\s+/).length > 1;
                        const totalCategories = categoriesList.length;
                        
                        return (
                          <TabsTrigger
                            key={cat.key}
                            value={cat.key}
                            className={`
                              flex-1 min-w-0
                              transition-all duration-300 cursor-pointer
                              flex items-center justify-center
                              ${getRoundedClass(index, totalCategories, isMobile)}
                              ${index === 1 ? 'border-l-0' : ''}
                              ${index === 2 ? 'border-l-0' : ''}
                              bg-[rgba(17,17,17,0.8)] border border-purple-500/20
                              text-white font-medium tracking-wide
                              hover:bg-purple-600/10 hover:border-purple-500/40
                              data-[state=active]:bg-linear-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-pink-600/20
                              data-[state=active]:border-purple-500/50 data-[state=active]:shadow-[0_0_20px_rgba(147,51,234,0.3)]
                              data-[state=active]:z-10
                            `}
                            style={{
                              padding: responsiveStyles.padding,
                              fontSize: responsiveStyles.fontSize,
                              height: responsiveStyles.minHeight,
                              lineHeight: '1.3',
                            }}
                          >
                            <span 
                              style={{ 
                                whiteSpace: hasMultipleWords ? 'pre-line' : 'normal',
                                textAlign: 'center',
                                display: 'block',
                              }}
                            >
                              {hasMultipleWords ? cat.label.replace(/\s+/g, '\n') : cat.label}
                            </span>
                          </TabsTrigger>
                        );
                      })}
                    </div>
                    {/* Segunda linha - 2 botões */}
                    <div className="flex gap-0">
                      {categoriesList.slice(3, 5).map((cat, index) => {
                        const hasMultipleWords = cat.label.trim().split(/\s+/).length > 1;
                        const totalCategories = categoriesList.length;
                        const actualIndex = index + 3;
                        
                        return (
                          <TabsTrigger
                            key={cat.key}
                            value={cat.key}
                            className={`
                              flex-1 min-w-0
                              transition-all duration-300 cursor-pointer
                              flex items-center justify-center
                              ${getRoundedClass(actualIndex, totalCategories, isMobile)}
                              ${index === 1 ? 'border-l-0' : ''}
                              border-t-0
                              bg-[rgba(17,17,17,0.8)] border border-purple-500/20
                              text-white font-medium tracking-wide
                              hover:bg-purple-600/10 hover:border-purple-500/40
                              data-[state=active]:bg-linear-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-pink-600/20
                              data-[state=active]:border-purple-500/50 data-[state=active]:shadow-[0_0_20px_rgba(147,51,234,0.3)]
                              data-[state=active]:z-10
                            `}
                            style={{
                              padding: responsiveStyles.padding,
                              fontSize: responsiveStyles.fontSize,
                              height: responsiveStyles.minHeight,
                              lineHeight: '1.3',
                            }}
                          >
                            <span 
                              style={{ 
                                whiteSpace: hasMultipleWords ? 'pre-line' : 'normal',
                                textAlign: 'center',
                                display: 'block',
                              }}
                            >
                              {hasMultipleWords ? cat.label.replace(/\s+/g, '\n') : cat.label}
                            </span>
                          </TabsTrigger>
                        );
                      })}
                    </div>
                  </TabsList>
                ) : (
                  <TabsList className="w-full h-auto p-0 bg-transparent flex justify-center gap-0">
                    {categoriesList.map((cat, index) => {
                      const hasMultipleWords = cat.label.trim().split(/\s+/).length > 1;
                      const totalCategories = categoriesList.length;
                      
                      return (
                        <TabsTrigger
                          key={cat.key}
                          value={cat.key}
                          className={`
                            flex-1 min-w-0
                            transition-all duration-300 cursor-pointer
                            flex items-center justify-center
                            ${getRoundedClass(index, totalCategories, isMobile)}
                            ${index > 0 ? 'border-l-0' : ''}
                            bg-[rgba(17,17,17,0.8)] border border-purple-500/20
                            text-white font-medium tracking-wide
                            hover:bg-purple-600/10 hover:border-purple-500/40
                            data-[state=active]:bg-linear-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-pink-600/20
                            data-[state=active]:border-purple-500/50 data-[state=active]:shadow-[0_0_20px_rgba(147,51,234,0.3)]
                            data-[state=active]:z-10 data-[state=active]:border-l
                          `}
                          style={{
                            padding: responsiveStyles.padding,
                            fontSize: responsiveStyles.fontSize,
                            height: responsiveStyles.minHeight,
                            lineHeight: '1.3',
                          }}
                        >
                          <span 
                            style={{ 
                              whiteSpace: hasMultipleWords ? 'pre-line' : 'normal',
                              textAlign: 'center',
                              display: 'block',
                            }}
                          >
                            {hasMultipleWords ? cat.label.replace(/\s+/g, '\n') : cat.label}
                          </span>
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>
                )}
              </div>
              {projects.categories.map((cat) => (
                <TabsContent key={cat} value={cat} className="mt-8">
                  <Tabs value={tab} onValueChange={setTab} className="w-full">
                    <TabsList className="w-3/5 mx-auto h-auto p-0 bg-transparent flex justify-center gap-0 mb-12">
                      {projects.divisions.map((division, index) => (
                        <TabsTrigger
                          key={division}
                          value={String(division)}
                          className={`
                            flex-1 min-w-0 transition-all duration-300 cursor-pointer
                            ${index === 0 ? 'rounded-l-[55px]' : ''}
                            ${index === projects.divisions.length - 1 ? 'rounded-r-[55px]' : ''}
                            ${index > 0 ? 'border-l-0' : ''}
                            bg-[rgba(17,17,17,0.8)] border border-purple-500/20
                            text-white font-medium tracking-wide
                            hover:bg-purple-600/10 hover:border-purple-500/40
                            data-[state=active]:bg-linear-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-pink-600/20
                            data-[state=active]:border-purple-500/50 data-[state=active]:shadow-[0_0_20px_rgba(147,51,234,0.3)]
                            data-[state=active]:z-10 data-[state=active]:border-l
                          `}
                          style={{
                            padding: responsiveStyles.padding,
                            fontSize: responsiveStyles.fontSize,
                            minHeight: responsiveStyles.minHeight,
                            whiteSpace: 'nowrap',
                            lineHeight: '1.3',
                          }}
                        >
                          {t('projects.tab')} {division}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {projects.divisions.map((division) => (
                      <TabsContent
                        key={division}
                        value={String(division)}
                        className="animate__animated animate__slideInUp min-h-100"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {projects[cat][division].length > 0 ? (
                            projects[cat][division].map((project: Project, index: number) => (
                              <ProjectDialog
                                key={index}
                                projectKey={project.title}
                                category={cat}
                                project={project}
                                {...project}
                              />
                            ))
                          ) : (
                            <div className="col-span-full">
                              <h2 className="text-center text-3xl font-semibold mt-12 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                {t('projects.commingSoon')}
                              </h2>
                            </div>
                          )}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
      <Image
        className="absolute bottom-0 right-0 w-2/5 opacity-30 -z-10"
        alt="background decoration"
        src={colorSharp2}
      />
    </section>
  );
};