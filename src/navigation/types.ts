import type { Mission, MissionsContextValue } from '../types';

export type RootStackParamList = {
    MissionsList: undefined;
    MissionDetail: { missionId: string };
};

export type RootTabParamList = {
    MissionsStack: undefined;
    MyMissions: undefined;
};
