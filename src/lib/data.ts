export interface Speaker {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoId: string;
  sessions: string[];
}

export interface Session {
  id: string;
  title: string;
  description: string;
  time: string;
  speakerId: string;
  day: 1 | 2;
  type: 'conference' | 'workshop';
}

export const SPEAKERS: Speaker[] = [
  {
    id: 's1',
    name: 'Ana García',
    role: 'Senior Software Engineer en TechCorp',
    bio: 'Experta en arquitecturas distribuidas y cloud computing con más de 10 años de experiencia en el sector.',
    photoId: 'speaker-1',
    sessions: ['sess1']
  },
  {
    id: 's2',
    name: 'Marc Ferrandis',
    role: 'Ciberseguridad Lead',
    bio: 'Especialista en seguridad ofensiva y auditoría de sistemas. Apasionado por la divulgación tecnológica.',
    photoId: 'speaker-2',
    sessions: ['sess2']
  },
  {
    id: 's3',
    name: 'Lucía Sánchez',
    role: 'Investigadora en IA',
    bio: 'Dedicada al desarrollo de modelos de lenguaje y aplicaciones prácticas de la IA en la educación.',
    photoId: 'speaker-3',
    sessions: ['sess3']
  },
  {
    id: 's4',
    name: 'Joan Martínez',
    role: 'DevOps Architect',
    bio: 'Ayudando a empresas a automatizar sus flujos de trabajo y mejorar la resiliencia de sus sistemas.',
    photoId: 'speaker-4',
    sessions: ['sess4']
  }
];

export const SESSIONS: Session[] = [
  {
    id: 'sess1',
    title: 'El futuro del Desarrollo Web con Frameworks Modernos',
    description: 'Exploraremos las tendencias actuales en el ecosistema de JavaScript y cómo las arquitecturas basadas en componentes están evolucionando.',
    time: '09:30 - 10:30',
    speakerId: 's1',
    day: 1,
    type: 'conference'
  },
  {
    id: 'sess2',
    title: 'Ciberseguridad: Protegiendo el mañana',
    description: 'Una visión profunda sobre las amenazas emergentes y las mejores prácticas para asegurar nuestras aplicaciones.',
    time: '11:00 - 12:00',
    speakerId: 's2',
    day: 1,
    type: 'conference'
  },
  {
    id: 'sess3',
    title: 'Taller: Iniciación a la IA con Python',
    description: 'Taller práctico donde aprenderemos a utilizar bibliotecas básicas para crear nuestro primer modelo predictivo.',
    time: '10:00 - 13:00',
    speakerId: 's3',
    day: 2,
    type: 'workshop'
  },
  {
    id: 'sess4',
    title: 'Taller: Kubernetes desde cero',
    description: 'Aprende los conceptos fundamentales de la orquestación de contenedores y despliega tu primera aplicación en un cluster.',
    time: '10:00 - 13:00',
    speakerId: 's4',
    day: 2,
    type: 'workshop'
  }
];

export const WEBSITE_CONTENT_FOR_AI = `
INFORSENIA Fest es un evento organizado por el IES La Sénia en Paiporta, Valencia.
Fechas: 13 y 14 de Mayo.
Día 1 (13 de Mayo): Jornada de Conferencias y Ponencias.
Día 2 (14 de Mayo): Jornada de Talleres Técnicos.
Ubicación: IES La Sénia, Paiporta, Valencia.
Ponentes destacados: Ana García (TechCorp), Marc Ferrandis (Ciberseguridad), Lucía Sánchez (IA), Joan Martínez (DevOps).
El evento se centra en ciclos de informática y tecnologías punteras como Desarrollo Web, Ciberseguridad, Inteligencia Artificial y DevOps.
Organizado para los alumnos de los ciclos de informática del instituto.
`;