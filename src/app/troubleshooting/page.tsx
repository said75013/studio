import TroubleshootingTool from '@/components/TroubleshootingTool';
import { AlertCircle } from 'lucide-react';

export default function TroubleshootingPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Dépannage Assisté par IA</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Confronté à un problème informatique ? Décrivez votre situation ci-dessous. Notre outil intelligent, basé sur l'IA, vous fournira des premières pistes et des solutions courantes pour vous aider à mieux comprendre l'incident avant de faire appel à un technicien.
        </p>
      </section>

      <TroubleshootingTool />

      <section className="mt-12 p-6 bg-secondary/30 rounded-lg text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-3">
            <AlertCircle className="w-6 h-6 text-accent mr-2" />
            <h3 className="text-xl font-semibold font-headline">Important</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            L'outil de dépannage IA fournit des suggestions générales et ne remplace pas un diagnostic professionnel. Si les problèmes persistent ou si vous n'êtes pas à l'aise avec les manipulations techniques, il est préférable de <a href="/book-appointment" className="font-medium text-primary hover:underline">contacter un expert</a>. TechSupport BXL n'est pas responsable des dommages résultant de l'application des conseils fournis par l'IA.
          </p>
      </section>
    </div>
  );
}
