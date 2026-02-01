'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import {
  GraduationCap,
  FileText,
  DollarSign,
  AlertTriangle,
  Newspaper,
  Info,
  Megaphone,
  MessageCircle
} from 'lucide-react';

// Simplified navigation - core tools + blog
const navItems = [
  { href: '/script-builder', label: 'Script', icon: FileText },
  { href: '/school-finder', label: 'Schools', icon: GraduationCap },
  { href: '/cost-estimator', label: 'Costs', icon: DollarSign },
  { href: '/emergency-triage', label: 'Emergency', icon: AlertTriangle },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/about', label: 'About', icon: Info },
  { href: '/press', label: 'Press', icon: Megaphone },
  { href: '/feedback', label: 'Feedback', icon: MessageCircle },
];

export function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* Top header - Logo only */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-center">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-lg text-gray-900">Dental Guide</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Bottom navigation for mobile (larger touch targets for elderly) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
        <div className="flex flex-row items-center justify-start h-16 px-4 overflow-x-auto scroll-snap-x scroll-smooth">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center space-y-1 transition-colors flex-shrink-0 scroll-snap-align-start min-w-[70px] h-14 mx-2',
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:bg-gray-50'
                )}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop top navigation */}
      <nav className="hidden md:block sticky top-14 z-40 w-full bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-6 py-3 rounded-xl text-base font-medium transition-colors flex items-center',
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  <Icon className="mr-2 w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Spacer for mobile bottom nav */}
      <div className="h-16 pb-[env(safe-area-inset-bottom)] md:hidden" />
    </>
  );
}
