import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { CONTACT_PHONE } from '@/lib/constants';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background to-secondary/30 rounded-lg shadow-lg">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight font-headline">
            Votre Expert en Réparation PC à Bruxelles
          </h1>
          <p className="text-lg text-foreground mb-8">
            Solutions rapides et fiables pour tous vos problèmes informatiques, directement chez vous ou en entreprise. Matériel, logiciels, imprimantes, réseaux - nous couvrons tout !
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-xl">
              <Link href="/book-appointment">
                Prendre un Rendez-vous
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-lg">
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>
                <Phone size={20} className="mr-2 group-hover:animate-pulse" /> Appelez-nous Directement
              </a>
            </Button>
          </div>
        </div>
        <div className="hidden md:block relative aspect-video rounded-lg overflow-hidden shadow-2xl group">
          <Image 
            src="/media/ph1.jpg" 
            alt="Réparation PC" 
            data-ai-hint="pc repair desk"
            width={600}
            height={400}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
          />
           <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
}
