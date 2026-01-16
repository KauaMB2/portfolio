import Link from 'next/link';
import { socialLinks } from '@/constants/social-networks';
import { NavBarLink } from './Navbar';
import { SetStateAction } from 'react';
import Image from 'next/image';
import LanguageChoicer from './LanguageChoicer';

interface NavBarMobileProps{
    switchLanguage: (lng: string) => void,
    navLinks: NavBarLink[],
    setActiveLink: (value: SetStateAction<string>) => void,
    setMobileMenuOpen: (value: SetStateAction<boolean>) => void,
    activeLink: string, getCurrentLanguageText: () => "🇧🇷 PT" | "🇺🇸 EN" | "🇮🇹 IT" | "PT",
    currentLang: string
}

const NavBarMobile = ({ switchLanguage, navLinks, setActiveLink, setMobileMenuOpen, activeLink, getCurrentLanguageText, currentLang }: NavBarMobileProps) => {
  return (
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
              <LanguageChoicer switchLanguage={switchLanguage} getCurrentLanguageText={getCurrentLanguageText} currentLang={currentLang} /> 
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
  )
}

export default NavBarMobile