import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from 'react';
import Header from '@/component/header/Header';
import Layout from '@/Layout';
import {Box, IconButton, ThemeProvider, useTheme} from '@mui/material';
import CustomTheme from '@/theme/CustomTheme';
import UseQueryTest from '@/UseQueryTest';
import CharacterCounter from '@/component/counter/CharacterCounter';

export default function App() {
	// const theme = useTheme();
	const {customTheme, colorMode} = CustomTheme();

	return (
		<ThemeProvider theme={customTheme}>
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
				{customTheme.palette.mode} mode
				<IconButton
					sx={{ml: 1}}
					onClick={colorMode.toggleColorMode}
					color='inherit'
				>
					{customTheme.palette.mode === 'dark' ? (
						<Brightness7Icon />
					) : (
						<Brightness4Icon />
					)}
				</IconButton>
			</Box>
			<Header />
			<Layout />
			<UseQueryTest />
			<CharacterCounter />
		</ThemeProvider>
	);
}
