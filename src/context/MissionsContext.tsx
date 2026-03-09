import React, { createContext, useCallback, useMemo, useState } from 'react';
import { missions as initialMissions } from '../data/missions';
import type { Mission, MissionsContextValue } from '../types';

export const MissionsContext = createContext<MissionsContextValue | undefined>(undefined);

export function MissionsProvider({ children }: { children: React.ReactNode }) {
    const [missions, setMissions] = useState<Mission[]>(initialMissions);
    const [acceptedMissionIds, setAcceptedMissionIds] = useState<string[]>(() =>
        initialMissions.filter((m) => m.statut !== 'disponible').map((m) => m.id),
    );

    const acceptMission = useCallback((id: string) => {
        setAcceptedMissionIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
        setMissions((prev) =>
            prev.map((mission) =>
                mission.id === id && mission.statut === 'disponible'
                    ? { ...mission, statut: 'en_cours' }
                    : mission,
            ),
        );
    }, []);

    const markMissionAsDelivered = useCallback((id: string) => {
        setMissions((prev) =>
            prev.map((mission) =>
                mission.id === id ? { ...mission, statut: 'livree' } : mission,
            ),
        );
    }, []);

    const value = useMemo<MissionsContextValue>(
        () => ({
            missions,
            acceptedMissionIds,
            acceptMission,
            markMissionAsDelivered,
        }),
        [missions, acceptedMissionIds, acceptMission, markMissionAsDelivered],
    );

    return <MissionsContext.Provider value={value}>{children}</MissionsContext.Provider>;
}
