// src/types.ts
type Activity = {
   id: string;
   duration: number;
   startTime?: Date;
   endTime?: Date;
};

type TimerState = {
   isRunning: boolean;
   time: number;
   intervalId: NodeJS.Timeout | undefined;
};

type TimerProps = {
   name: string;
};

type ActivityCardProps = {
   activities: Activity[];
};
