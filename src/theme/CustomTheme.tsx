import {createTheme} from '@mui/material';
import {useMemo} from 'react';
import {useRecoilValue} from 'recoil';
import {appThemeMode} from '@/atom/global/appThemeMode';

export default function CustomTheme() {
	const mode = useRecoilValue(appThemeMode);

	const customTheme = useMemo(
		() =>
			createTheme({
				typography: {
					htmlFontSize: 16,
					fontSize: 14,
					h1: {
						fontSize: '2em',
						fontWeight: 'bold',
					},
					h2: {
						fontSize: '1.5em',
						fontWeight: 'bold',
					},
					h3: {
						fontSize: '1.17em',
						fontWeight: 'bold',
					},
					h4: {
						fontSize: '1em',
						fontWeight: 'bold',
					},
					h5: {
						fontSize: '0.83em',
						fontWeight: 'bold',
					},
					h6: {
						fontSize: '0.67em',
						fontWeight: 'bold',
					},
					body1: {
						fontSize: '0.83em',
					},
					body2: {
						fontSize: '0.67em',
					},
				},
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
				components: {
					MuiFormLabel: {
						styleOverrides: {
							root: {
								fontSize: '0.83em',
							},
						},
					},
				},
			}),
		[mode]
	);

	return {customTheme};
}
