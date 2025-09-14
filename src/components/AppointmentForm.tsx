"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SERVICES } from "@/lib/constants";
import type { AppointmentFormData } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import React from "react";

const appointmentFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("L'adresse e-mail n'est pas valide."),
  phone: z.string().min(8, "Le numéro de téléphone doit être valide."),
  serviceId: z.string({ required_error: "Veuillez sélectionner un service." }),
  issueDescription: z.string().min(10, "Veuillez décrire votre problème en au moins 10 caractères.").max(500, "La description ne doit pas dépasser 500 caractères."),
});

// IMPORTANT: Remplacez cette URL par votre propre endpoint Formspree
// pour recevoir les e-mails à info@reparation-pc-bruxelles.com
const FORMSPREE_ENDPOINT = "https://formspree.io/f/VOTRE_ID_UNIQUE";

export default function AppointmentForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceId: "",
      issueDescription: "",
    },
  });

  async function onSubmit(data: AppointmentFormData) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast({
          title: "Rendez-vous demandé !",
          description: "Nous avons bien reçu votre demande. Nous vous contacterons bientôt.",
          variant: "default",
        });
        form.reset();
      } else {
        throw new Error("Une erreur s'est produite lors de l'envoi.");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer votre demande. Veuillez réessayer plus tard ou nous appeler directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom complet</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Jean Dupont" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse e-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Ex: jean.dupont@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de téléphone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Ex: 04XX XX XX XX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="serviceId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type de service demandé</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {SERVICES.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="issueDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description de votre problème</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Décrivez brièvement le problème que vous rencontrez..."
                  className="resize-y min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Plus vous donnez de détails, mieux nous pourrons vous aider. (Max 500 caractères)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Envoyer la demande de RDV
        </Button>
      </form>
    </Form>
  );
}
