import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Settings } from 'lucide-react';

export default function Home() {
  const featuredServices = SERVICES.slice(0, 3); // Show first 3 services on homepage

  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />

      {/* Services Overview Section */}
      <section id="services-overview">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Nos Services Principaux</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nous pouvons vous aider avec vos défis technologiques quotidiens.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} showDetailsLink={true} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent hover:text-accent-foreground">
            <Link href="/services">Voir tous nos services</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-12 bg-card rounded-lg shadow-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Pourquoi Nous Choisir ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Votre satisfaction est notre priorité. Voici ce qui nous distingue.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-headline mb-2">Intervention Locale</h3>
              <p className="text-muted-foreground">Service rapide à Bruxelles et environs, directement chez vous ou dans vos locaux.</p>
            </div>
            <div className="p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-headline mb-2">Expertise Certifiée</h3>
              <p className="text-muted-foreground">Techniciens qualifiés et expérimentés pour tous types de pannes et configurations.</p>
            </div>
            <div className="p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-headline mb-2">Solutions sur Mesure</h3>
              <p className="text-muted-foreground">Approche personnalisée pour répondre précisément à vos besoins spécifiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section id="service-area" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Notre Zone d'Intervention</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Nous intervenons principalement à Bruxelles et dans sa périphérie. Contactez-nous pour vérifier la disponibilité dans votre localité.
        </p>
        <div className="rounded-lg overflow-hidden shadow-xl aspect-video max-w-4xl mx-auto border-4 border-primary/20">
          <Image 
            src="/media/ph2.jpg" 
            alt="Zone de service à Bruxelles" 
            data-ai-hint="Brussels street map"
            width={1200} 
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
