import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SESSIONS, SPEAKERS } from "@/lib/data";
import { Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function SchedulePage() {
  const renderSession = (sess: typeof SESSIONS[0]) => {
    const speaker = SPEAKERS.find(s => s.id === sess.speakerId);
    const speakerPhoto = PlaceHolderImages.find(img => img.id === speaker?.photoId);

    return (
      <div key={sess.id} className="bg-card border rounded-2xl p-6 hover:border-primary/40 transition-all group">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:items-start md:min-w-[120px]">
            <span className="flex items-center gap-1.5 text-accent font-bold mb-1">
              <Clock className="h-4 w-4" />
              {sess.time}
            </span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
              {sess.type === 'conference' ? 'Conferencia' : 'Taller'}
            </span>
          </div>
          
          <div className="flex-1">
            <h3 className="font-headline text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              {sess.title}
            </h3>
            <p className="text-muted-foreground mb-6 line-clamp-2">
              {sess.description}
            </p>
            
            {speaker && (
              <Link href={`/speakers`} className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
                  <Image 
                    src={speakerPhoto?.imageUrl || "https://picsum.photos/40/40"} 
                    alt={speaker.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">{speaker.name}</p>
                  <p className="text-xs text-muted-foreground">{speaker.role}</p>
                </div>
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center justify-center">
            <Link href={`/speakers`} className="bg-secondary p-3 rounded-full group-hover:bg-primary transition-all">
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4">Agenda del Evento</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dos días intensos de conocimiento y práctica. Elige tus sesiones favoritas.
          </p>
        </div>

        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 h-16 bg-secondary/50 p-2 rounded-2xl mb-12">
            <TabsTrigger value="day1" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-headline font-bold text-lg">
              Día 1: Ponencias (13 Mayo)
            </TabsTrigger>
            <TabsTrigger value="day2" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-headline font-bold text-lg">
              Día 2: Talleres (14 Mayo)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="day1" className="space-y-6 animate-in fade-in duration-500">
            {SESSIONS.filter(s => s.day === 1).map(renderSession)}
            {SESSIONS.filter(s => s.day === 1).length === 0 && (
              <p className="text-center py-20 text-muted-foreground italic">No hay sesiones programadas para este día todavía.</p>
            )}
          </TabsContent>

          <TabsContent value="day2" className="space-y-6 animate-in fade-in duration-500">
            {SESSIONS.filter(s => s.day === 2).map(renderSession)}
            {SESSIONS.filter(s => s.day === 2).length === 0 && (
              <p className="text-center py-20 text-muted-foreground italic">No hay sesiones programadas para este día todavía.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}