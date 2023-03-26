import {createTheme, useMediaQuery} from '@mui/material';
import {useEffect, useMemo, useState} from 'react';

export default function CustomTheme() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
	const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode);
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const customTheme = useMemo(
		() =>
			createTheme({
				typography: {
					h1: {
						fontSize: '2em',
						marginTop: '0.67em',
						marginBottom: '0.67em',
						marginLeft: 0,
						marginRight: 0,
						fontWeight: 'bold',
					},
					h2: {
						fontSize: '1.5em',
						marginTop: '0.83em',
						marginBottom: '0.83em',
						marginLeft: 0,
						marginRight: 0,
						fontWeight: 'bold',
					},
					h3: {
						fontSize: '1.17em',
						marginTop: '1em',
						marginBottom: '1em',
						marginLeft: 0,
						marginRight: 0,
						fontWeight: 'bold',
					},
					h4: {
						fontSize: '1em',
						marginTop: '1.33em',
						marginBottom: '1.33em',
						marginLeft: 0,
						marginRight: 0,
						fontWeight: 'bold',
					},
					h5: {
						fontSize: '0.83em',
						marginTop: '1.67em',
						marginBottom: '1.67em',
						marginLeft: 0,
						marginRight: 0,
						fontWeight: 'bold',
					},
					h6: {
						fontSize: '0.67em',
						marginTop: '2.33em',
						marginBottom: '2.33em',
						marginLeft: 0,
						marginRight: 0,
						fontWeight: 'bold',
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
			}),
		[mode]
	);

	useEffect(() => {
		setMode(prefersDarkMode);
	}, [prefersDarkMode]);

	return {customTheme, colorMode};
}
