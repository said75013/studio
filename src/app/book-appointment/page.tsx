import AppointmentForm from '@/components/AppointmentForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, ShieldCheck, Clock } from 'lucide-react';
import { CONTACT_PHONE } from '@/lib/constants';

export default function BookAppointmentPage() {
  return (
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">Prendre un Rendez-vous</CardTitle>
            <CardDescription className="text-lg">
              Remplissez le formulaire ci-dessous pour demander une intervention. Nous vous recontacterons dans les plus brefs délais pour confirmer.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AppointmentForm />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1 space-y-8">
        <Card className="bg-secondary/30">
          <CardHeader>
            <CardTitle className="text-xl font-semibold font-headline flex items-center">
              <Phone className="w-6 h-6 mr-3 text-primary" />
              Besoin d'aide urgente ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">
              Pour les urgences, n'hésitez pas à nous appeler directement :
            </p>
            <a 
              href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} 
              className="text-lg font-semibold text-primary hover:underline"
            >
              {CONTACT_PHONE}
            </a>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-xl font-semibold font-headline flex items-center">
                    <ShieldCheck className="w-6 h-6 mr-3 text-primary" />
                    Nos Engagements
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
                <p className="flex items-start"><Clock size={18} className="mr-2 mt-0.5 text-primary shrink-0" /> Intervention rapide et efficace.</p>
                <p className="flex items-start"><ShieldCheck size={18} className="mr-2 mt-0.5 text-primary shrink-0" /> Tarifs transparents et devis clairs.</p>
                <p className="flex items-start"><ShieldCheck size={18} className="mr-2 mt-0.5 text-primary shrink-0" /> Techniciens qualifiés et à l'écoute.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
