"use client";

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertTriangle, Lightbulb } from 'lucide-react';
import { getTroubleshootingTips, type TroubleshootingTipsInput, type TroubleshootingTipsOutput } from '@/ai/flows/troubleshooting-tips';

const troubleshootingSchema = z.object({
  issueDescription: z.string().min(10, "Veuillez décrire votre problème plus en détail (min. 10 caractères).").max(1000, "La description est trop longue (max. 1000 caractères)."),
});

type TroubleshootingFormValues = z.infer<typeof troubleshootingSchema>;

export default function TroubleshootingTool() {
  const [tips, setTips] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TroubleshootingFormValues>({
    resolver: zodResolver(troubleshootingSchema),
  });

  const onSubmit: SubmitHandler<TroubleshootingFormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setTips(null);

    try {
      const input: TroubleshootingTipsInput = { issueDescription: data.issueDescription };
      const result: TroubleshootingTipsOutput = await getTroubleshootingTips(input);
      setTips(result.troubleshootingTips);
      reset(); // Reset form after successful submission
    } catch (e) {
      console.error("Error getting troubleshooting tips:", e);
      setError("Une erreur est survenue lors de la génération des conseils. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Lightbulb className="w-8 h-8 text-primary" />
          <div>
            <CardTitle className="text-2xl md:text-3xl font-bold font-headline">Assistant de Dépannage IA</CardTitle>
            <CardDescription className="text-md">
              Décrivez votre problème et notre assistant IA vous proposera quelques pistes de solution.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Textarea
              {...register("issueDescription")}
              placeholder="Ex: Mon ordinateur ne démarre plus, l'écran reste noir..."
              className="min-h-[120px] resize-y"
              aria-invalid={errors.issueDescription ? "true" : "false"}
            />
            {errors.issueDescription && (
              <p className="text-sm text-destructive mt-1">{errors.issueDescription.message}</p>
            )}
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyse en cours...
              </>
            ) : (
              "Obtenir des conseils"
            )}
          </Button>
        </form>
      </CardContent>

      {error && (
        <CardFooter>
          <Alert variant="destructive" className="w-full">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </CardFooter>
      )}

      {tips && !error && (
        <CardFooter>
          <Alert variant="default" className="w-full bg-primary/5 border-primary/20">
             <Lightbulb className="h-5 w-5 text-primary" />
            <AlertTitle className="font-semibold text-primary">Conseils de Dépannage</AlertTitle>
            <AlertDescription className="whitespace-pre-line text-foreground">
              {tips}
              <p className="mt-3 text-xs text-muted-foreground">
                Ces conseils sont générés par une IA et sont fournis à titre indicatif. Si le problème persiste, n'hésitez pas à <a href="/book-appointment" className="underline hover:text-primary">nous contacter</a> pour une assistance professionnelle.
              </p>
            </AlertDescription>
          </Alert>
        </CardFooter>
      )}
    </Card>
  );
}
