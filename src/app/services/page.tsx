import ServiceCard from '@/components/ServiceCard';
import { SERVICES } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Nos Services</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          TechSupport BXL offre une gamme complète de services de maintenance et de réparation informatique pour particuliers et professionnels à Bruxelles. Découvrez comment nous pouvons vous aider.
        </p>
      </section>

      <section className="space-y-8">
        {SERVICES.map((service) => {
          const IconComponent = service.icon;
          return (
            <Card key={service.id} id={service.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-secondary/20 p-6">
                <div className="flex items-center gap-4">
                  <IconComponent className="w-12 h-12 text-primary shrink-0" />
                  <div>
                    <CardTitle className="text-2xl md:text-3xl font-semibold font-headline">{service.title}</CardTitle>
                    <CardDescription className="text-md mt-1">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              {service.details && service.details.length > 0 && (
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Ce service inclut typiquement :</h3>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          );
        })}
      </section>

      <section className="text-center py-8 bg-card rounded-lg shadow-md">
         <h2 className="text-2xl font-semibold font-headline mb-4">Besoin d'un service non listé ?</h2>
         <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
           N'hésitez pas à nous contacter. Nous étudions toutes les demandes pour vous apporter la meilleure solution.
         </p>
         <Link href="/book-appointment" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 transition-colors">
           Demander un devis personnalisé
         </Link>
      </section>
    </div>
  );
}
