import { Terminal, Github, Twitter, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="font-headline font-bold text-xl tracking-tight">
                INFOR<span className="text-primary">SENIA</span> Fest
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Las jornadas de informática del IES La Sénia en Paiporta. Un punto de encuentro para estudiantes, profesionales y entusiastas de la tecnología.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/inforsenia" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-4">Explora</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/schedule" className="hover:text-primary transition-colors">Agenda 2024</a></li>
              <li><a href="/speakers" className="hover:text-primary transition-colors">Ponentes</a></li>
              <li><a href="/venue" className="hover:text-primary transition-colors">Cómo llegar</a></li>
              <li><a href="https://inforsenia.github.io/inforSENIA/index.html" className="hover:text-primary transition-colors">Edición Anterior</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-4">Contacto</h4>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <p>IES La Sénia<br />Paiporta, Valencia<br />España</p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} INFORSENIA Fest. Creado con pasión por la tecnología.</p>
        </div>
      </div>
    </footer>
  );
}