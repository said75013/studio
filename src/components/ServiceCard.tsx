import type { Service } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  showDetailsLink?: boolean;
}

export default function ServiceCard({ service, showDetailsLink = false }: ServiceCardProps) {
  const IconComponent = service.icon;
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <IconComponent className="w-10 h-10 text-primary" />
        <CardTitle className="text-xl font-semibold font-headline">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{service.description}</CardDescription>
        {showDetailsLink && service.details && service.details.length > 0 && (
          <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
            {service.details.slice(0, 3).map((detail, index) => ( // Show first 3 details as preview
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </CardContent>
      {showDetailsLink && (
         <CardContent className="pt-0">
            <Button variant="link" asChild className="p-0 h-auto text-primary">
              <Link href={`/services#${service.id}`}>
                Voir les détails <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
         </CardContent>
      )}
    </Card>
  );
}
