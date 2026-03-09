import { z } from 'zod';
import { MissionSchema } from '../schemas/mission.schema';

export type Mission = z.infer<typeof MissionSchema>;

export type MissionStatus = Mission['statut'];

export interface MissionsState {
  missions: Mission[];
  acceptedMissionIds: string[];
}

export interface MissionsContextValue extends MissionsState {
  acceptMission: (id: string) => void;
  markMissionAsDelivered: (id: string) => void;
}

