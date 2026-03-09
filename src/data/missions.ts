import { MissionSchema } from '../schemas/mission.schema';
import type { Mission } from '../types';

const rawMissions: Mission[] = [
  {
    id: '1',
    vehicule: {
      marque: 'Tesla',
      modele: 'Model 3',
      immatriculation: 'AA-123-AA',
    },
    depart: {
      ville: 'Paris',
      adresse: '10 Rue de Rivoli',
    },
    arrivee: {
      ville: 'Lyon',
      adresse: '5 Place Bellecour',
    },
    distance: 465,
    statut: 'disponible',
    remuneration: 180,
    date: '2026-03-10T09:00:00Z',
  },
  {
    id: '2',
    vehicule: {
      marque: 'Peugeot',
      modele: '308',
      immatriculation: 'BB-456-BB',
    },
    depart: {
      ville: 'Lyon',
      adresse: '25 Quai du Rhône',
    },
    arrivee: {
      ville: 'Marseille',
      adresse: '12 Vieux-Port',
    },
    distance: 315,
    statut: 'en_cours',
    remuneration: 150,
    date: '2026-03-09T14:30:00Z',
  },
  {
    id: '3',
    vehicule: {
      marque: 'Renault',
      modele: 'Zoé',
      immatriculation: 'CC-789-CC',
    },
    depart: {
      ville: 'Bordeaux',
      adresse: '3 Cours de l’Intendance',
    },
    arrivee: {
      ville: 'Toulouse',
      adresse: '8 Place du Capitole',
    },
    distance: 245,
    statut: 'disponible',
    remuneration: 130,
    date: '2026-03-11T08:00:00Z',
  },
  {
    id: '4',
    vehicule: {
      marque: 'Volkswagen',
      modele: 'Golf',
      immatriculation: 'DD-321-DD',
    },
    depart: {
      ville: 'Marseille',
      adresse: '20 Boulevard Michelet',
    },
    arrivee: {
      ville: 'Nice',
      adresse: '15 Promenade des Anglais',
    },
    distance: 200,
    statut: 'livree',
    remuneration: 110,
    date: '2026-03-08T16:45:00Z',
  },
  {
    id: '5',
    vehicule: {
      marque: 'Citroën',
      modele: 'C3',
      immatriculation: 'EE-654-EE',
    },
    depart: {
      ville: 'Lille',
      adresse: '18 Grand-Place',
    },
    arrivee: {
      ville: 'Paris',
      adresse: '50 Avenue des Champs-Élysées',
    },
    distance: 225,
    statut: 'disponible',
    remuneration: 140,
    date: '2026-03-12T10:15:00Z',
  },
  {
    id: '6',
    vehicule: {
      marque: 'Dacia',
      modele: 'Spring',
      immatriculation: 'FF-987-FF',
    },
    depart: {
      ville: 'Nantes',
      adresse: '7 Quai de la Fosse',
    },
    arrivee: {
      ville: 'Rennes',
      adresse: '4 Rue de la Monnaie',
    },
    distance: 110,
    statut: 'en_cours',
    remuneration: 90,
    date: '2026-03-09T07:30:00Z',
  },
];

let missions: Mission[] = [];

try {
  missions = MissionSchema.array().parse(rawMissions);
} catch (error) {
  // Règle : logger l'erreur en cas d'échec de validation
  console.error('Échec de validation des missions mockées', error);
}

export { missions };

