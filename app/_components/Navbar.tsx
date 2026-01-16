'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import linkedinIcon from "@/public/img/linkedin.svg";
import whatsappIcon from "@/public/img/whatsapp.svg";
import githubIcon from "@/public/img/github.svg";
import instagramIcon from "@/public/img/instagram.svg";
import { Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/app/_components/ui/dropdown-menu';
import { Button } from '@/app/_components/ui/button';

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

  const navLinks = [
    { href: '#home', key: 'home', label: t('ui.navbar.home') },
    { href: '#projects', key: 'projects', label: t('ui.navbar.projects') },
    { href: '#feedbacks', key: 'feedbacks', label: t('ui.navbar.feedbacks') },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/kauamb2/', icon: linkedinIcon, alt: 'LinkedIn' },
    { href: 'https://wa.me/5535984714567', icon: whatsappIcon, alt: 'WhatsApp' },
    { href: 'https://www.instagram.com/kaua.moreira.batista/', icon: instagramIcon, alt: 'Instagram' },
    { href: 'https://github.com/KauaMB2/', icon: githubIcon, alt: 'GitHub' },
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
        <div className="flex items-center justify-between h-20">
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700 hover:text-white hover:border-purple-500 transition-all duration-300 hover:cursor-pointer"
                >
                  {getCurrentLanguageText()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                <DropdownMenuItem
                  onClick={() => switchLanguage('pt')}
                  className={`cursor-pointer ${
                    currentLang === 'pt'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  🇧🇷 PT
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => switchLanguage('en')}
                  className={`cursor-pointer ${
                    currentLang === 'en'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  🇺🇸 EN
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => switchLanguage('it')}
                  className={`cursor-pointer ${
                    currentLang === 'it'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  🇮🇹 IT
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
        <div className="md:hidden bg-gray-900/98 backdrop-blur-lg border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.key);
                  setMobileMenuOpen(false);
                }}
                className={`block py-2 text-base font-medium transition-colors ${
                  activeLink === link.key
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-gray-800 border-gray-700 text-white">
                      {getCurrentLanguageText()}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border-gray-700">
                    <DropdownMenuItem
                      onClick={() => switchLanguage('pt')}
                      className={currentLang === 'pt' ? 'bg-purple-600 text-white' : 'text-gray-300'}
                    >
                      🇧🇷 PT
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => switchLanguage('en')}
                      className={currentLang === 'en' ? 'bg-purple-600 text-white' : 'text-gray-300'}
                    >
                      🇺🇸 EN
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => switchLanguage('it')}
                      className={currentLang === 'it' ? 'bg-purple-600 text-white' : 'text-gray-300'}
                    >
                      🇮🇹 IT
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.alt}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-purple-600 transition-all"
                    >
                      <Image src={social.icon} alt={social.alt} width={18} height={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;