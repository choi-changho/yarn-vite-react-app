import {useRecoilValue} from 'recoil';
import {AppThemeMode} from '@/atom/global/AppThemeMode';
import {useMemo} from 'react';

export default function ColorModeOption() {
	const mode = useRecoilValue(AppThemeMode);

	const colorTheme = useMemo(
		() => ({
			palette: {
				mode,
				// ...(mode === 'light'
				// 	? {
				// 			primary: amber,
				// 			divider: amber[200],
				// 			text: {
				// 				primary: grey[900],
				// 				secondary: grey[800],
				// 			},
				// 	  }
				// 	: {
				// 			// palette values for dark mode
				// 			primary: deepOrange,
				// 			divider: deepOrange[700],
				// 			background: {
				// 				default: deepOrange[900],
				// 				paper: deepOrange[900],
				// 			},
				// 			text: {
				// 				primary: '#fff',
				// 				secondary: grey[500],
				// 			},
				// 	  }),
			},
		}),
		[mode]
	);

	return {colorTheme};
}
