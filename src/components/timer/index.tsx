import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import ActivityCard from '../activity-card';
import Translations from '../translations';

const Timer: React.FC<TimerProps> = ({ name }) => {
   // Define the state
   const [state, setState] = useState<TimerState>({
      isRunning: false,
      time: 0,
      intervalId: undefined,
   });
   const [activities, setActivities] = useState<Activity[]>([]);

   // Define the function to add an activity with proper typing
   const addActivity = (activity: Activity): void => {
      setActivities((prevActivities) => [...prevActivities, activity]);
   };

   const startTimer = () => {
      if (!state.isRunning) {
         const id = setInterval(() => {
            setState((prev: TimerState) => ({ ...prev, time: prev.time + 1 }));
         }, 1000);
         setState((prev: TimerState) => ({ ...prev, isRunning: true, intervalId: id }));
      }
   };

   const stopTimer = () => {
      if (state.isRunning && state.intervalId) {
         clearInterval(state.intervalId);
         setState((prev: TimerState) => ({ ...prev, isRunning: false, time: 0, intervalId: undefined }));

         // Save activity
         const newActivity: Activity = {
            id: Date.now().toString(),
            duration: state.time,
         };
         addActivity(newActivity);
      }
   };

   const isRunning = state.isRunning;
   const timerHandler = () => {
      if (isRunning) {
         stopTimer();
      } else {
         startTimer();
      }
   };

   // Calculate the total duration of all activities
   const totalDuration = activities.reduce((total, activity) => total + activity.duration, 0);

   return (
      <>
         <Card className="p-4 shadow-md rounded-lg">
            <CardHeader className="p-0">
               <CardTitle className="text-lg font-bold">{<Translations text={name} />}</CardTitle>

               <p className="text-xl">{new Date(state.time * 1000).toISOString().substr(11, 8)}</p>
               <p className="text-xl">
                  <Translations text="totalTime" />: {new Date(totalDuration * 1000).toISOString().substr(11, 8)}
               </p>
            </CardHeader>
            <CardContent className="flex gap-2 mt-4 p-0">
               <Button onClick={timerHandler} className="btn" variant={isRunning ? 'destructive' : 'default'}>
                  {isRunning ? <Translations text="stop" /> : <Translations text="start" />}
               </Button>
            </CardContent>
         </Card>

         {!!activities.length && <ActivityCard activities={activities} />}
      </>
   );
};

export default Timer;
