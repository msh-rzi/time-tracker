import React from 'react';
import { Card, CardContent } from '../ui/card';
import Translations from '../translations';

const ActivityCard: React.FC<ActivityCardProps> = ({ activities }) => {
   return (
      <Card className="mt-6 flex flex-col items-center justify-center">
         {activities.map((activity) => (
            <CardContent key={activity.id} className="pt-6">
               <Translations text="duration" />: {new Date(activity.duration * 1000).toISOString().substr(11, 8)}
            </CardContent>
         ))}
      </Card>
   );
};

export default ActivityCard;
