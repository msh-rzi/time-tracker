import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Translations from '../translations';

export function LanguageToggle() {
   const { i18n } = useTranslation();

   // Function to change language and direction
   const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);

      // Set direction based on language
      const direction = lng === 'fa' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', direction); // Update `dir` attribute
   };

   // Set initial direction on mount
   useEffect(() => {
      const initialLang = i18n.language;
      const direction = initialLang === 'fa' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', direction);
   }, [i18n.language]);

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
               <span>{i18n.language.toUpperCase()}</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md rounded-md">
            <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => changeLanguage('en')}>
               <Translations text="english" />
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => changeLanguage('fa')}>
               <Translations text="persian" />
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
