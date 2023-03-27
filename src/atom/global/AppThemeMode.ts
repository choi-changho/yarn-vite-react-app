import {atom} from 'recoil';
import {PaletteMode} from '@mui/material';

let defaultTheme: PaletteMode = 'light';
if (typeof window !== 'undefined') {
	const savedTheme: PaletteMode = window.localStorage.getItem('THEME') as 'light' | 'dark'; // save the users prefered mode
	if (savedTheme) {
		defaultTheme = savedTheme;
	} else {
		const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; // get the default prefered mode
		defaultTheme = isDarkMode ? 'dark' : 'light';
	}
}

export const AppThemeMode = atom<PaletteMode>({
	key: 'AppThemeMode',
	default: defaultTheme,
});
