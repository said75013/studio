import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  avatarSrc: string;
  location?: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  issueDescription: string;
}
