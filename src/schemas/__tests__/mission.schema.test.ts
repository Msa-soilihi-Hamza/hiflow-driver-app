import { MissionSchema } from '../mission.schema';

describe('MissionSchema Validation', () => {
    const validMission = {
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
    };

    it('should validate a correct mission object', () => {
        const result = MissionSchema.safeParse(validMission);
        expect(result.success).toBe(true);
    });

    it('should fail if ID is missing', () => {
        const { id, ...invalidMission } = validMission;
        const result = MissionSchema.safeParse(invalidMission);
        expect(result.success).toBe(false);
    });

    it('should fail if statut is invalid', () => {
        const invalidMission = { ...validMission, statut: 'in-connu' };
        const result = MissionSchema.safeParse(invalidMission);
        expect(result.success).toBe(false);
    });

    it('should fail if distance is negative', () => {
        const invalidMission = { ...validMission, distance: -10 };
        const result = MissionSchema.safeParse(invalidMission);
        expect(result.success).toBe(false);
    });
});
