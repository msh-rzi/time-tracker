import { LanguageToggle } from './components/languauge-toggle';
import { ModeToggle } from './components/mode-toggle';
import Timer from './components/timer';
import Translations from './components/translations';
import i18n from './config/i18n';

const timers = ['work', 'other', 'socialMedia'];

export default function App() {
   i18n.init();

   return (
      <div className="container mx-auto p-4 dark:bg-black w-screen h-screen">
         <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">
               <Translations text="timeTracker" />
            </h1>
            <div className="flex gap-2">
               <LanguageToggle />
               <ModeToggle />
            </div>
         </div>
         <div className="flex gap-2">
            {timers.map((timer) => (
               <div key={timer} className="flex-1">
                  <Timer name={timer} />
               </div>
            ))}
         </div>
      </div>
   );
}
