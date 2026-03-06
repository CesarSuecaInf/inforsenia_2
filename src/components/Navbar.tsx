import Link from 'next/link';
import { Terminal } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors">
            <Terminal className="h-6 w-6 text-white group-hover:text-background" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">
            INFOR<span className="text-primary">SENIA</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/schedule" className="text-sm font-medium hover:text-primary transition-colors">Horario</Link>
          <Link href="/speakers" className="text-sm font-medium hover:text-primary transition-colors">Ponentes</Link>
          <Link href="/venue" className="text-sm font-medium hover:text-primary transition-colors">Lugar</Link>
          <Link href="/sponsors" className="text-sm font-medium hover:text-primary transition-colors">Colaboradores</Link>
        </div>

        <Link 
          href="/schedule" 
          className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-bold hover:bg-accent hover:text-background transition-all"
        >
          ¡Únete!
        </Link>
      </div>
    </nav>
  );
}