import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import Header from '@/component/header/Header';
import Layout from '@/Layout';
import {Box, createTheme, IconButton, ThemeProvider, useMediaQuery, useTheme} from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp() {
	const theme = useTheme();
	const {toggleColorMode} = useContext(ColorModeContext);
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'background.default',
				color: 'text.primary',
				borderRadius: 1,
				p: 3,
			}}
		>
			{theme.palette.mode} mode
			<IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
				{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Box>
	);
}

export default function ToggleColorMode() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)') ? "dark" : "light";
	const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode);
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode],
	);

	useEffect(() => {
		setMode(prefersDarkMode);
	},[prefersDarkMode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<MyApp />
				<Header/>
				<Layout/>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
