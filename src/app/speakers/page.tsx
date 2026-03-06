import { SPEAKERS, SESSIONS } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SpeakersPage() {
  return (
    <div className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4">Nuestros Expertos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoce a los líderes tecnológicos que compartirán su experiencia en INFORSENIA Fest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {SPEAKERS.map(speaker => {
            const photo = PlaceHolderImages.find(img => img.id === speaker.photoId);
            const speakerSessions = SESSIONS.filter(s => s.speakerId === speaker.id);

            return (
              <div key={speaker.id} className="bg-card border rounded-3xl overflow-hidden group hover:border-primary/30 transition-all flex flex-col sm:flex-row">
                <div className="sm:w-2/5 relative min-h-[300px] overflow-hidden">
                  <Image 
                    src={photo?.imageUrl || "https://picsum.photos/400/400"} 
                    alt={speaker.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="bg-background/80 backdrop-blur-md p-2 rounded-lg hover:text-primary transition-colors cursor-pointer"><Linkedin className="h-4 w-4" /></div>
                    <div className="bg-background/80 backdrop-blur-md p-2 rounded-lg hover:text-primary transition-colors cursor-pointer"><Twitter className="h-4 w-4" /></div>
                    <div className="bg-background/80 backdrop-blur-md p-2 rounded-lg hover:text-primary transition-colors cursor-pointer"><Github className="h-4 w-4" /></div>
                  </div>
                </div>
                
                <div className="flex-1 p-8 flex flex-col">
                  <h2 className="font-headline text-3xl font-bold mb-1">{speaker.name}</h2>
                  <p className="text-primary font-medium mb-4">{speaker.role}</p>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {speaker.bio}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-muted-foreground mb-3">Sesiones</h4>
                    <div className="flex flex-wrap gap-2">
                      {speakerSessions.map(sess => (
                        <Badge key={sess.id} variant="secondary" className="bg-secondary/50 border hover:border-primary/50 cursor-pointer flex gap-1 items-center px-3 py-1">
                          {sess.title} <ExternalLink className="h-3 w-3" />
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}