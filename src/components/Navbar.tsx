import Link from 'next/link';
import Image from 'next/image';
import { Terminal } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Navbar() {
  const logo = PlaceHolderImages.find(img => img.id === 'ies-logo');

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-24 hidden sm:block">
            <Image 
              src={logo?.imageUrl || ""} 
              alt="IES La Sénia" 
              fill 
              className="object-contain brightness-0 invert"
            />
          </div>
          <div className="h-8 w-[1px] bg-border hidden sm:block"></div>
          <span className="font-headline font-bold text-xl tracking-tight">
            INFOR<span className="text-primary">SENIA</span>
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8">
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
