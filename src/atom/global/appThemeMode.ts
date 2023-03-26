import {ThemeMode} from '@/types/global/ThemeMode';
import {atom} from 'recoil';

let defaultTheme: ThemeMode = 'light';
if (typeof window !== 'undefined') {
	const savedTheme: ThemeMode = window.localStorage.getItem('THEME_TUTORIAL') as 'light' | 'dark'; // save the users prefered mode
	if (savedTheme) {
		defaultTheme = savedTheme;
	} else {
		const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; // get the default prefered mode
		defaultTheme = isDarkMode ? 'dark' : 'light';
	}
}

export const appThemeMode = atom<ThemeMode>({
	key: 'theme',
	default: defaultTheme,
});
