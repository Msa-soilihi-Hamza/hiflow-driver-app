import React from 'react';
import { renderHook, act } from '@testing-library/react-native';
import { MissionsProvider, MissionsContext } from '../MissionsContext';

// Mock missions data to ensure consistent tests
jest.mock('../../data/missions', () => ({
    missions: [
        {
            id: 'test-1',
            vehicule: { marque: 'Test', modele: 'Car', immatriculation: 'TEST-01' },
            depart: { ville: 'Paris', adresse: 'A' },
            arrivee: { ville: 'Lyon', adresse: 'B' },
            distance: 100,
            statut: 'disponible',
            remuneration: 50,
            date: '2026-01-01T00:00:00Z',
        }
    ]
}));

describe('MissionsContext Logic', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <MissionsProvider>{children}</MissionsProvider>
    );

    it('should initialize with mock missions', () => {
        const { result } = renderHook(() => React.useContext(MissionsContext), { wrapper });
        expect(result.current?.missions).toHaveLength(1);
        expect(result.current?.missions[0].id).toBe('test-1');
    });

    it('should allow accepting a mission', () => {
        const { result } = renderHook(() => React.useContext(MissionsContext), { wrapper });

        act(() => {
            result.current?.acceptMission('test-1');
        });

        expect(result.current?.acceptedMissionIds).toContain('test-1');
        const mission = result.current?.missions.find(m => m.id === 'test-1');
        expect(mission?.statut).toBe('en_cours');
    });

    it('should allow marking a mission as delivered', () => {
        const { result } = renderHook(() => React.useContext(MissionsContext), { wrapper });

        act(() => {
            result.current?.markMissionAsDelivered('test-1');
        });

        const mission = result.current?.missions.find(m => m.id === 'test-1');
        expect(mission?.statut).toBe('livree');
    });
});
