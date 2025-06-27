'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  title?: string;
  logoSrc?: string;
  navigation?: Array<{
    name: string;
    href: string;
    current?: boolean;
  }>;
}

export default function Header({
  title = 'Your App',
  logoSrc,
  navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ],
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center">
            {logoSrc && (
              <Image
                className="mr-3 h-8 w-auto"
                src={logoSrc}
                alt="Logo"
                width={32}
                height={32}
              />
            )}
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  item.current ?
                    'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-700 hover:border-b-2 hover:border-blue-600 hover:text-blue-600'
                } px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6 stroke-current stroke-2`}
                xmlns="http://www.w3.org/2000/svg fill-none"
                // fill="none"
                viewBox="0 0 24 24"
                // stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  // strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6 fill-none stroke-current stroke-2`}
                xmlns="http://www.w3.org/2000/svg"
                // fill="none"
                viewBox="0 0 24 24"
                // stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  // strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 border-t border-gray-200 bg-gray-50 px-2 pb-3 pt-2 sm:px-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${
                item.current ?
                  'border-l-4 border-blue-600 bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
              } block px-3 py-2 text-base font-medium transition-colors duration-200 ease-in-out`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
