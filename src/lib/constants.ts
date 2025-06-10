import type { LucideIcon } from 'lucide-react';
import { Wrench, Laptop, Printer, Wifi, Cloud, HardDrive, Smartphone, Tablet, Server } from 'lucide-react';
import type { Service, Testimonial, NavLink } from '@/types';

export const CONTACT_PHONE = "+32 (0)X XX XX XX XX";
export const CONTACT_EMAIL = "contact@techsupportbxl.example.com";
export const APP_NAME = "TechSupport BXL";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/book-appointment", label: "Prendre RDV" },
];

export const SERVICES: Service[] = [
  { 
    id: "hw-repair", 
    title: "Réparation Matériel PC", 
    description: "Diagnostic et réparation des composants de votre ordinateur de bureau ou portable (carte mère, disque dur, écran, etc.).", 
    icon: Wrench,
    details: [
      "Remplacement de disque dur/SSD",
      "Réparation de carte mère",
      "Changement d'écran d'ordinateur portable",
      "Nettoyage interne et dépoussiérage",
      "Mise à niveau des composants (RAM, carte graphique)"
    ]
  },
  { 
    id: "sw-install", 
    title: "Installation Logiciels & OS", 
    description: "Installation, configuration et mise à jour de systèmes d'exploitation (Windows, macOS, Linux) et de vos applications.", 
    icon: Laptop,
    details: [
      "Installation et réinstallation de Windows, macOS, Linux",
      "Configuration de suites bureautiques (Microsoft Office, LibreOffice)",
      "Installation d'antivirus et logiciels de sécurité",
      "Mise en place de logiciels spécifiques métiers",
      "Optimisation du système d'exploitation"
    ]
  },
  { 
    id: "printer-setup", 
    title: "Configuration Imprimante", 
    description: "Installation, configuration et dépannage de tous types d'imprimantes, scanners et multifonctions.", 
    icon: Printer,
    details: [
      "Installation d'imprimantes Wi-Fi, USB, réseau",
      "Partage d'imprimante sur le réseau local",
      "Dépannage des problèmes d'impression",
      "Configuration de scanners",
      "Mise à jour des pilotes d'imprimante"
    ]
  },
  { 
    id: "network-troubleshoot", 
    title: "Dépannage Réseau & Internet", 
    description: "Résolution des problèmes de connexion Internet, configuration Wi-Fi, et mise en place de réseaux domestiques ou professionnels.", 
    icon: Wifi,
    details: [
      "Diagnostic des pannes de connexion Internet",
      "Configuration et sécurisation de routeurs Wi-Fi",
      "Extension de la couverture Wi-Fi (répéteurs, CPL)",
      "Mise en place de réseaux filaires (Ethernet)",
      "Configuration de pare-feu et sécurité réseau"
    ]
  },
  {
    id: "data-recovery",
    title: "Récupération de Données",
    description: "Tentatives de récupération de données perdues sur disques durs, SSD, clés USB et autres supports de stockage.",
    icon: HardDrive,
    details: [
      "Récupération après suppression accidentelle",
      "Récupération sur disque endommagé (logiquement)",
      "Sauvegarde et restauration de données",
      "Conseils pour la prévention de perte de données"
    ]
  },
  {
    id: "mobile-support",
    title: "Support Mobile & Tablette",
    description: "Assistance pour la configuration et le dépannage de vos smartphones et tablettes (iOS & Android).",
    icon: Smartphone,
    details: [
        "Configuration initiale et transfert de données",
        "Synchronisation des e-mails et contacts",
        "Résolution des problèmes logiciels",
        "Conseils d'utilisation et sécurité"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: "1", 
    name: "Jean Dupont", 
    quote: "Service rapide et extrêmement efficace ! Mon ordinateur portable fonctionne à nouveau comme au premier jour. Je recommande vivement TechSupport BXL.",
    avatarSrc: "https://placehold.co/100x100.png?a=1",
    location: "Bruxelles Centre" 
  },
  { 
    id: "2", 
    name: "Marie Leroy", 
    quote: "Très professionnel, à l'écoute et patient. Il a pris le temps de m'expliquer le problème et la solution. Excellent rapport qualité-prix.",
    avatarSrc: "https://placehold.co/100x100.png?a=2",
    location: "Schaerbeek"
  },
  { 
    id: "3", 
    name: "Ahmed Benali", 
    quote: "Intervention à domicile très pratique. Mon problème de réseau Wi-Fi a été résolu rapidement. Un grand merci !",
    avatarSrc: "https://placehold.co/100x100.png?a=3",
    location: "Ixelles"
  },
];
