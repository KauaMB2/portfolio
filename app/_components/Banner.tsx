/* eslint-disable react-hooks/purity */
'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Button } from '@/app/_components/ui/button';
import { Download } from 'lucide-react';
import logoIcon from "@/public/img/logo4.png"
import { TechCarousel } from './SkillsCarousel';
import { iconsArray } from '@/constants/skills-icons-array';

export const Banner = () => {
  const { t } = useTranslation();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [isVisible, setIsVisible] = useState(false);
  const period = 2500;

  const toRotate = useMemo(() => (t('banner.rotating', { returnObjects: true }) as string[]) || [], [t]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!toRotate.length) return;

    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(100);
      }
    };
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta, loopNum, isDeleting, toRotate, period]);

  const formatBio = (bioText: string) => {
    const techKeywords = [
      'TypeScript', 'Express', 'Next', 'React', 'Tailwind', 'ShadCN', 'Vitest',
      'Python', 'Flask', 'OpenCV', 'Docker', 'YOLO', 'Electron', 'Node.js', 'Node',
      'JavaScript', 'CSS', 'HTML', 'Git', 'GitHub', 'MongoDB', 'PostgreSQL', 'MySQL',
      'REST', 'API', 'GraphQL', 'Redux', 'Vite', 'Webpack', 'Nest', 'NestJS'
    ];
    let formattedText = bioText;
    const sortedKeywords = techKeywords.sort((a, b) => b.length - a.length);
    sortedKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword})([,.]?)`, 'gi');
      formattedText = formattedText.replace(regex, '<span class="tech-gradient">$1</span>$2');
    });

    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <section id="home" className="min-h-screen bg-linear-to-b from-gray-950 via-purple-950/20 to-gray-950 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block">
              <span className="px-4 py-2 bg-linear-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
                {t('common.welcome')}
              </span>
            </div>

            <h3 className="text-xl lg:text-3xl font-bold text-white leading-tight">
              {t('banner.title')}
              <span className="bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                {' '}{text}
                <span className="animate-blink">|</span>
              </span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {formatBio(t('banner.bio'))}
            </p>
            <p className="text-gray-400 text-base">
              {t('banner.callToAction')}
            </p>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse" />
              <Image
                src={logoIcon}
                alt="Header"
                fill
                className="object-contain relative z-10 drop-shadow-2xl rounded-full"
                priority
              />
            </div>
          </div>
        </div>
        <div
          className={`mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <TechCarousel icons={iconsArray} />
        </div>
        <div
          className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20 bg-linear-to-br from-gray-900 to-gray-800">
            <div className="relative pt-[56.25%]">
              <iframe
                title={t('banner.videoUrl')}
                src={t('banner.videoUrl')}
                allow="fullscreen"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="pt-4">
              <Button
                onClick={() => window.open(t('banner.resume'), '_blank')}
                size="lg"
                className="hover:cursor-pointer bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                {t('common.curriculum')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        :global(.tech-gradient) {
          background: linear-gradient(90deg, #c084fc, #f472b6, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};