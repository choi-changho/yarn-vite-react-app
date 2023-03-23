import {createTheme, useMediaQuery} from '@mui/material';
import {useEffect, useMemo, useState} from 'react';
import {amber, deepOrange, grey} from '@mui/material/colors';

export default function CustomTheme() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
		? 'dark'
		: 'light';
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
				palette: {
					mode,
					...(mode === 'light'
						? {
								primary: amber,
								divider: amber[200],
								text: {
									primary: grey[900],
									secondary: grey[800],
								},
						  }
						: {
								// palette values for dark mode
								primary: deepOrange,
								divider: deepOrange[700],
								background: {
									default: deepOrange[900],
									paper: deepOrange[900],
								},
								text: {
									primary: '#fff',
									secondary: grey[500],
								},
						  }),
				},
			}),
		[mode]
	);

	useEffect(() => {
		setMode(prefersDarkMode);
		const asd = '1';
	}, [prefersDarkMode]);

	return {customTheme, colorMode};
}
