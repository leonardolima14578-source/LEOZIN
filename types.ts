export type DayStatus = 'PENDING' | 'WIN' | 'LOSS';

export interface DayData {
  day: number;
  startAmount: number;
  targetAmount: number; // The $ value to gain
  endAmount: number;
  status: DayStatus;
}

export interface ChallengeStats {
  totalWins: number;
  totalLosses: number;
  currentBalance: number;
  projectedBalance: number;
  maxConsecutiveLossesAllowed: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface Allocation {
  label: string;
  percentage: number;
  color: string;
  value: number;
  description: string;
}
