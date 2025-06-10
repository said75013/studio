"use client";

import Link from 'next/link';
import { Menu, Phone, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { APP_NAME, NAV_LINKS, CONTACT_PHONE, CONTACT_EMAIL } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            {APP_NAME}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium",
                  pathname === link.href ? "bg-primary/10 text-primary" : ""
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex flex-col items-end text-sm">
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="flex items-center text-primary font-semibold hover:underline">
              <Phone size={16} className="mr-1" /> {CONTACT_PHONE}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted-foreground hover:text-primary hover:underline">
              <Mail size={16} className="inline mr-1" /> {CONTACT_EMAIL}
            </a>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <div className="flex justify-between items-center mb-6">
                   <Link href="/" className="text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      {APP_NAME}
                    </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Fermer le menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-3">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-foreground hover:text-primary transition-colors block px-3 py-2 rounded-md text-base font-medium",
                          pathname === link.href ? "bg-primary/10 text-primary" : ""
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-8 border-t pt-6 space-y-3">
                   <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="flex items-center text-primary font-semibold hover:underline text-lg">
                     <Phone size={20} className="mr-2" /> {CONTACT_PHONE}
                   </a>
                   <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center text-muted-foreground hover:text-primary hover:underline text-sm">
                     <Mail size={18} className="mr-2" /> {CONTACT_EMAIL}
                   </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
