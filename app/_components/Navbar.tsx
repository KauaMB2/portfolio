'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import { socialLinks } from '@/constants/social-networks';
import NavBarMobile from './NavBarMobile';
import LanguageChoicer from './LanguageChoicer';

export interface NavBarLink {
    href: string;
    key: string;
    label: string;
}

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  const getCurrentLanguageText = () => {
    switch (currentLang) {
      case 'pt':
        return '🇧🇷 PT';
      case 'en':
        return '🇺🇸 EN';
      case 'it':
        return '🇮🇹 IT';
      default:
        return 'PT';
    }
  };

  const navLinks: NavBarLink[] = [
    { href: '#home', key: 'home', label: t('ui.navbar.home') },
    { href: '#projects', key: 'projects', label: t('ui.navbar.projects') },
    { href: '#feedbacks', key: 'feedbacks', label: t('ui.navbar.feedbacks') },
  ];

  

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end lg:justify-between h-20">
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setActiveLink(link.key)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeLink === link.key
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                    activeLink === link.key ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <LanguageChoicer switchLanguage={switchLanguage} getCurrentLanguageText={getCurrentLanguageText} currentLang={currentLang} /> 
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 hover:scale-110"
                >
                  <Image src={social.icon} alt={social.alt} width={18} height={18} />
                </Link>
              ))}
            </div>
          </div>
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <NavBarMobile switchLanguage={switchLanguage} navLinks={navLinks} setActiveLink={setActiveLink} setMobileMenuOpen={setMobileMenuOpen} activeLink={activeLink} getCurrentLanguageText={getCurrentLanguageText} currentLang={currentLang} />
      )}
    </nav>
  );
};

export default Navbar;