import React from 'react';
import Header from '@/component/header/Header';
import Layout from '@/Layout';
import {Avatar, ThemeProvider} from '@mui/material';
import CustomTheme from '@/theme/CustomTheme';
import LiveCustomizeDrawer from '@/component/drawer/LiveCustomizeDrawer/LiveCustomizeDrawer';
import Types from '@/component/types';
import {CacheProvider} from '@emotion/react';
import {deepOrange, deepPurple} from '@mui/material/colors';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function App() {
	// const theme = useTheme();
	const {customTheme, dirCache} = CustomTheme();

	return (
		<CacheProvider value={dirCache}>
			<ThemeProvider theme={customTheme}>
				<Header />
				<Layout />
				<LiveCustomizeDrawer />
				<Avatar
					sx={{background: `linear-gradient(135deg, ${deepOrange[500]} 50%, ${deepPurple[500]} 50%)`}}
					variant='rounded'
				>
					<DoneAllIcon color='disabled' />
				</Avatar>
				<Avatar
					sx={{background: `linear-gradient(135deg, ${deepOrange[500]} 50%, ${deepPurple[500]} 50%)`, color: 'inherit'}}
					variant='rounded'
				>
					{''}
				</Avatar>
				<Types />
			</ThemeProvider>
		</CacheProvider>
	);
}
