import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink, Handshake } from "lucide-react";

export default function SponsorsPage() {
  const iesLogo = PlaceHolderImages.find(img => img.id === 'ies-logo');

  return (
    <div className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4">Colaboradores y Sponsors</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gracias a las empresas e instituciones que hacen posible INFORSENIA Fest.
          </p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {/* Main Organizer */}
          <div className="flex flex-col items-center">
            <h2 className="text-center font-headline text-2xl uppercase tracking-[0.2em] text-muted-foreground font-bold mb-10">Organiza</h2>
            <div className="bg-white/5 rounded-3xl p-12 border border-white/10 flex flex-col items-center gap-6 group hover:border-primary/40 transition-all">
              <div className="relative h-32 w-64">
                <Image 
                  src={iesLogo?.imageUrl || ""} 
                  alt="IES La Sénia" 
                  fill 
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="font-headline text-2xl font-bold text-foreground">IES La Sénia, Paiporta</p>
            </div>
          </div>

          {/* Platinum */}
          <div>
            <h2 className="text-center font-headline text-2xl uppercase tracking-[0.2em] text-accent font-bold mb-10">Platinum Sponsors</h2>
            <div className="flex justify-center">
              <div className="group relative bg-white rounded-2xl p-8 w-full max-w-sm h-48 flex items-center justify-center border-4 border-accent shadow-[0_0_20px_rgba(89,191,251,0.2)] hover:shadow-[0_0_40px_rgba(89,191,251,0.4)] transition-all">
                <span className="text-background font-headline font-bold text-4xl">GOOGLE</span>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Gold */}
          <div>
            <h2 className="text-center font-headline text-2xl uppercase tracking-[0.2em] text-primary font-bold mb-10">Gold Sponsors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative bg-white/10 rounded-2xl p-8 h-40 flex items-center justify-center border border-primary/20 hover:bg-white/20 transition-all">
                <span className="text-white font-headline font-bold text-3xl">MICROSOFT</span>
              </div>
              <div className="group relative bg-white/10 rounded-2xl p-8 h-40 flex items-center justify-center border border-primary/20 hover:bg-white/20 transition-all">
                <span className="text-white font-headline font-bold text-3xl">TECH HUB VLC</span>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h2 className="text-center font-headline text-2xl uppercase tracking-[0.2em] text-muted-foreground font-bold mb-10">Colaboradores Locales</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-secondary/20 rounded-xl p-6 h-24 flex items-center justify-center border grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                  <span className="font-bold text-muted-foreground text-center">PARTNER {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 p-12 bg-primary/10 rounded-3xl border border-primary/20 text-center max-w-4xl mx-auto">
          <Handshake className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-headline text-3xl font-bold mb-4">¿Quieres ser patrocinador?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Únete a nosotros y conecta con el talento informático emergente de la región de Valencia. Ofrecemos diferentes niveles de patrocinio con visibilidad en todo el evento.
          </p>
          <a href="mailto:info@inforsenia.es" className="inline-block bg-primary hover:bg-accent hover:text-background text-white font-bold py-4 px-10 rounded-full transition-all">
            Contactar con Organización
          </a>
        </div>
      </div>
    </div>
  );
}
