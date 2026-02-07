'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AlertTriangle,
  DollarSign,
  FileText,
  GraduationCap,
  Info,
  Menu,
  MessageCircle,
  Megaphone,
  Newspaper,
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils/cn';

const coreItems = [
  { href: '/script-builder', label: 'Script', icon: FileText },
  { href: '/school-finder', label: 'Schools', icon: GraduationCap },
  { href: '/cost-estimator', label: 'Costs', icon: DollarSign },
  { href: '/emergency-triage', label: 'Emergency', icon: AlertTriangle },
];

const desktopItems = [
  ...coreItems,
  { href: '/about', label: 'About', icon: Info },
  { href: '/blog', label: 'Blog', icon: Newspaper },
];

const moreItems = [
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/about', label: 'About', icon: Info },
  { href: '/feedback', label: 'Feedback', icon: MessageCircle },
  { href: '/press', label: 'Press', icon: Megaphone },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-center">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold text-gray-900">Dental Guide</span>
            </Link>
          </div>
        </div>
      </header>

      <nav className="hidden md:block sticky top-14 z-40 w-full border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-center gap-1">
            {desktopItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center rounded-xl px-5 py-2 text-base font-medium transition-colors',
                    isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white md:hidden">
        <div className="grid h-16 grid-cols-5 px-2">
          {coreItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex min-h-[44px] flex-col items-center justify-center rounded-md',
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              'flex min-h-[44px] flex-col items-center justify-center rounded-md text-gray-500 hover:bg-gray-50',
              open && 'text-blue-600'
            )}
          >
            <Menu className="h-5 w-5" />
            <span className="text-xs font-medium">More</span>
          </button>
        </div>
      </nav>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>More</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            {moreItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>

      <div className="h-16 pb-[env(safe-area-inset-bottom)] md:hidden" />
    </>
  );
}
