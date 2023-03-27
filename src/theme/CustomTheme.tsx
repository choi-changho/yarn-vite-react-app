import {createTheme} from '@mui/material';
import {useEffect, useMemo} from 'react';
import {useRecoilValue} from 'recoil';
import {AppThemeMode} from '@/atom/global/AppThemeMode';
import {AppDirection} from '@/atom/global/AppDirection';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import stylisRTLPlugin from 'stylis-plugin-rtl';

export default function CustomTheme() {
	const mode = useRecoilValue(AppThemeMode);
	const direction = useRecoilValue(AppDirection);

	const cacheRtl = createCache({
		key: 'mui-style-rtl',
		stylisPlugins: [prefixer, stylisRTLPlugin],
	});

	const cacheLtr = createCache({
		key: 'mui-style-ltr',
	});

	const dirCache = direction === 'rtl' ? cacheRtl : cacheLtr;

	useEffect(() => {
		document.dir = direction;
	}, [direction]);

	const customTheme = useMemo(
		() =>
			createTheme({
				direction,
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
		[mode, direction]
	);

	return {customTheme, dirCache};
}
