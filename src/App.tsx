import React from 'react';
import Header from '@/component/header/Header';
import Layout from '@/Layout';
import {ThemeProvider} from '@mui/material';
import CustomTheme from '@/theme/CustomTheme';
import LiveCustomizeDrawer from '@/component/drawer/LiveCustomizeDrawer/LiveCustomizeDrawer';
import Types from '@/component/types';
import {CacheProvider} from '@emotion/react';

export default function App() {
	const {customTheme, dirCache} = CustomTheme();

	return (
		<CacheProvider value={dirCache}>
			<ThemeProvider theme={customTheme}>
				<Header />
				<Layout />
				<LiveCustomizeDrawer />
				<Types />
			</ThemeProvider>
		</CacheProvider>
	);
}
