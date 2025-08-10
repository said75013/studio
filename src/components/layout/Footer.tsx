"use client";

import { APP_NAME, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants';
import { Copyright, Mail, Phone } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading skeleton
  }

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-8 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">{APP_NAME}</h3>
            <p className="text-sm text-muted-foreground">
              Votre expert en maintenance et réparation informatique à Bruxelles.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-md font-semibold mb-2">Contactez-nous</h4>
            <a href={`tel:${"0493628693"}`} className="flex items-center justify-center md:justify-end text-sm text-muted-foreground hover:text-primary mb-1">
              <Phone size={16} className="mr-2" /> {"0493 62 86 93"}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center justify-center md:justify-end text-sm text-muted-foreground hover:text-primary">
              <Mail size={16} className="mr-2" /> {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p className="flex items-center">
            <Copyright size={16} className="mr-1" /> {new Date().getFullYear()} {APP_NAME}. Tous droits réservés.
          </p>
          <p className="mt-2 md:mt-0">
            Conçu avec <span className="text-accent">❤</span> pour nos clients.
          </p>
        </div>
      </div>
    </footer>
  );
}
