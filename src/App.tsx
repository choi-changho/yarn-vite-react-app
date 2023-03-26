import React from 'react';
import Header from '@/component/header/Header';
import Layout from '@/Layout';
import {ThemeProvider} from '@mui/material';
import CustomTheme from '@/theme/CustomTheme';
import LiveCustomizeDrawer from '@/component/drawer/LiveCustomizeDrawer/LiveCustomizeDrawer';
import Types from '@/component/types';

export default function App() {
	// const theme = useTheme();
	const {customTheme} = CustomTheme();

	return (
		<ThemeProvider theme={customTheme}>
			<Header />
			<Layout />
			{/* <UseQueryTest /> */}
			{/* <CharacterCounter /> */}
			{/* <FloatingActionButton> */}
			{/* 	<RotateIconButton icon={<SettingsIcon />} /> */}
			{/* </FloatingActionButton> */}
			<LiveCustomizeDrawer />
			<Types />
		</ThemeProvider>
	);
}
