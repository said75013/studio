import type { Testimonial } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MapPin } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full bg-secondary/30 hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint="client portrait" />
            <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
            {testimonial.location && (
              <p className="text-xs text-muted-foreground flex items-center">
                <MapPin size={12} className="mr-1" /> {testimonial.location}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
      </CardContent>
      <CardFooter>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="currentColor" size={18} />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
