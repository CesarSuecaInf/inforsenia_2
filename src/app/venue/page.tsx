import { MapPin, Train, Bus, Car, Info, Map as MapIcon } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function VenuePage() {
  const schoolImage = PlaceHolderImages.find(img => img.id === 'venue-school');

  return (
    <div className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4">Lugar y Logística</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas saber para llegar y disfrutar del evento en IES La Sénia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="relative aspect-video rounded-3xl overflow-hidden border">
            <Image 
              src={schoolImage?.imageUrl || "https://picsum.photos/seed/school/800/600"} 
              alt="IES La Sénia" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="font-headline font-bold text-xl">IES La Sénia, Paiporta</span>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4 flex items-center gap-3">
                <Info className="h-8 w-8 text-primary" /> Información General
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                IES La Sénia es un instituto de referencia en formación informática en la Comunidad Valenciana. Situado en Paiporta, ofrece una excelente conectividad con Valencia capital y alrededores.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-secondary/20 rounded-2xl border">
                <h3 className="font-headline font-bold mb-3 flex items-center gap-2">
                  <Train className="h-5 w-5 text-accent" /> Metro
                </h3>
                <p className="text-sm text-muted-foreground">Líneas 1, 2 y 7 (Estación Paiporta). A 5 minutos andando del centro.</p>
              </div>
              <div className="p-6 bg-secondary/20 rounded-2xl border">
                <h3 className="font-headline font-bold mb-3 flex items-center gap-2">
                  <Bus className="h-5 w-5 text-accent" /> Autobús
                </h3>
                <p className="text-sm text-muted-foreground">Líneas locales que conectan con los municipios de l'Horta Sud.</p>
              </div>
              <div className="p-6 bg-secondary/20 rounded-2xl border">
                <h3 className="font-headline font-bold mb-3 flex items-center gap-2">
                  <Car className="h-5 w-5 text-accent" /> Coche
                </h3>
                <p className="text-sm text-muted-foreground">Acceso por la V-30. Disponibilidad de aparcamiento en las inmediaciones del centro.</p>
              </div>
              <div className="p-6 bg-secondary/20 rounded-2xl border">
                <h3 className="font-headline font-bold mb-3 flex items-center gap-2">
                  <MapIcon className="h-5 w-5 text-accent" /> Ubicación
                </h3>
                <p className="text-sm text-muted-foreground">C/ de l'Horta, s/n, 46210 Paiporta, Valencia.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-bold mb-6">¿Alguna duda adicional?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Si necesitas asistencia especial o tienes preguntas sobre la accesibilidad del centro, no dudes en consultarnos a través de nuestro asistente IA.
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-bold hover:underline cursor-pointer">
            Ver mapa interactivo en Google Maps <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExternalLink({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}