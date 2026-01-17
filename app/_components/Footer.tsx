'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import logo from '@/public/img/logo3.png';
import { socialLinks } from '@/constants/social-networks';


const Footer = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:i.kauamoreirabatista@gmail.com';
  };

  return (
    <footer className="relative bg-linear-to-b from-gray-950 via-gray-900 to-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {socialLinks.map((social) => (
              <Link
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="relative w-12 h-12 rounded-full bg-gray-800/80 border border-purple-500/30 
                               flex items-center justify-center shrink-0
                               group-hover:bg-linear-to-r group-hover:from-purple-600 group-hover:to-pink-600 
                               group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]
                               transition-all duration-300 group-hover:scale-110">
                  <Image 
                    src={social.icon} 
                    alt={social.alt} 
                    width={20} 
                    height={20}
                    className="group-hover:brightness-125 transition-all duration-300"
                  />
                </div>
                <span className="text-gray-400 text-sm font-medium group-hover:text-transparent 
                               group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-pink-400 
                               group-hover:bg-clip-text transition-all duration-300">
                  {social.text}
                </span>
              </Link>
            ))}
            
            <button
              onClick={handleEmailClick}
              className="group flex items-center gap-4 w-full text-left hover:cursor-pointer"
            >
              <div className="relative w-12 h-12 rounded-full bg-gray-800/80 border border-purple-500/30 
                             flex items-center justify-center shrink-0
                             group-hover:bg-linear-to-r group-hover:from-purple-600 group-hover:to-pink-600 
                             group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]
                             transition-all duration-300 group-hover:scale-110">
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-gray-400 text-sm font-medium group-hover:text-transparent 
                             group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-pink-400 
                             group-hover:bg-clip-text transition-all duration-300">
                i.kauamoreirabatista@gmail.com
              </span>
            </button>
          </div>

          <div className="flex justify-start md:justify-end items-start">
            <Link 
              href="/"
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 
                              rounded-full blur-xl opacity-0 group-hover:opacity-30 
                              transition-opacity duration-500" />
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 
                              border-purple-500/30 group-hover:border-purple-500 
                              transition-all duration-300 group-hover:scale-105
                              shadow-lg group-hover:shadow-purple-500/50">
                <Image
                  src={logo}
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-[120px] -z-10" />
    </footer>
  );
};

export default Footer;