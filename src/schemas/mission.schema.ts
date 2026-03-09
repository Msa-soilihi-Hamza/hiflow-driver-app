import { z } from 'zod';

export const MissionSchema = z.object({
  id: z.string(),
  vehicule: z.object({
    marque: z.string(),
    modele: z.string(),
    immatriculation: z.string(),
  }),
  depart: z.object({
    ville: z.string(),
    adresse: z.string(),
  }),
  arrivee: z.object({
    ville: z.string(),
    adresse: z.string(),
  }),
  distance: z.number().positive(),
  statut: z.enum(['disponible', 'en_cours', 'livree']),
  remuneration: z.number().positive(),
  date: z.string(),
});

