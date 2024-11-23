import { Moon, Sun } from 'lucide-react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { useTheme } from '../theme-provider';
import Translations from '../translations';

export function ModeToggle() {
   const { setTheme } = useTheme();

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
               <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
               <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:text-gray-100 dark:hover:bg-gray-700 dark:rotate-0 dark:scale-100" />
               <span className="sr-only">
                  <Translations text="toggleTheme" />
               </span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md rounded-md">
            <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setTheme('light')}>
               <Translations text="lightMode" />
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setTheme('dark')}>
               <Translations text="darkMode" />
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setTheme('system')}>
               <Translations text="system" />
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
