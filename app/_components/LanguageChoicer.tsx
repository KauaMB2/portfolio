import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/app/_components/ui/dropdown-menu';
import { Button } from './ui/button';

interface LanguageChoicerProps{
    switchLanguage: (lng: string) => void,
    getCurrentLanguageText: () => "🇧🇷 PT" | "🇺🇸 EN" | "🇮🇹 IT" | "PT",
    currentLang: string
}

const LanguageChoicer = ({ switchLanguage, getCurrentLanguageText, currentLang }: LanguageChoicerProps) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-gray-800 border-gray-700 text-white hover:cursor-pointer">
                {getCurrentLanguageText()}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-800 border-gray-700">
        <DropdownMenuItem
            onClick={() => switchLanguage('pt')}
            className={currentLang === 'pt' ? 'bg-purple-600 text-white' : 'text-gray-300'}
            >
            🇧🇷 PT
        </DropdownMenuItem>
        <DropdownMenuItem
            onClick={() => switchLanguage('en')}
            className={currentLang === 'en' ? 'bg-purple-600 text-white' : 'text-gray-300'}
        >
            🇺🇸 EN
        </DropdownMenuItem>
        <DropdownMenuItem
            onClick={() => switchLanguage('it')}
            className={currentLang === 'it' ? 'bg-purple-600 text-white' : 'text-gray-300'}
        >
            🇮🇹 IT
        </DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>
  )
}

export default LanguageChoicer