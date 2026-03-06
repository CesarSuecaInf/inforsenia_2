import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Code, Laptop, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || "https://picsum.photos/seed/inforsenia-hero/1920/1080"}
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
            data-ai-hint="technology code"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>

        <div className="container relative z-10 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-accent mb-8 animate-in fade-in slide-in-from-top-5 duration-700">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold tracking-wider uppercase">Paiporta | Valencia</span>
          </div>
          
          <h1 className="font-headline text-6xl md:text-8xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-1000">
            INFOR<span className="text-primary">SENIA</span> <br className="hidden md:block" />
            <span className="text-accent italic">Fest 2024</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-300">
            Las jornadas técnicas de informática del IES La Sénia. Charlas, ponencias y talleres de vanguardia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in duration-1000 delay-500">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-accent hover:text-background px-8 py-6 text-lg font-bold group">
              <Link href="/schedule">
                Ver Programa <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <div className="flex items-center gap-6 px-4 py-2">
              <div className="flex flex-col items-start">
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Fechas</span>
                <span className="font-headline font-bold">13 - 14 MAYO</span>
              </div>
              <div className="h-8 w-[1px] bg-border"></div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Lugar</span>
                <span className="font-headline font-bold">IES LA SÉNIA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Laptop className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Día 1: Conferencias</h3>
              <p className="text-muted-foreground">Expertos del sector compartirán su visión sobre el futuro de la web, la ciberseguridad y la inteligencia artificial.</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Día 2: Talleres</h3>
              <p className="text-muted-foreground">Manos a la obra. Sesiones prácticas intensivas donde aprenderás tecnologías punteras aplicadas al mundo real.</p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Networking</h3>
              <p className="text-muted-foreground">Conecta con otros alumnos, profesores y profesionales de las empresas tecnológicas más relevantes de la región.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Highlight */}
      <section className="py-24 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
            <div className="p-12 md:p-20 flex-1">
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Inspirando a la próxima generación de IT</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                INFORSENIA no es solo un evento; es una oportunidad para que los alumnos de informática del IES La Sénia vean más allá del aula y se sumerjan en la realidad profesional de la industria.
              </p>
              <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/venue">Más información sobre el lugar</Link>
              </Button>
            </div>
            <div className="flex-1 relative min-h-[400px] w-full">
              <Image 
                src="https://picsum.photos/seed/inforsenia-lab/800/600" 
                alt="Tech environment"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="modern office"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}