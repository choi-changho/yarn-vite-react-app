import {Card, CardContent, CardHeader, Divider, Drawer} from '@mui/material';
import React, {useState} from 'react';
import RotateIconButton from '@/component/button/RotateIconButton/RotateIconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import FloatingActionButton from '@/component/button/FloatingActionButton/FloatingActionButton';
import Grid2 from '@mui/material/Unstable_Grid2';
import ThemeModeRadioGroup from '@/component/radio/ThemeModeRadioGroup/ThemeModeRadioGroup';
import DirectionRadioGroup from '@/component/radio/DirectionRadioGroup/DirectionRadioGroup';
import BorderSlider from '@/component/slider/BorderSlider/BorderSlider';
import PresetColorAvatarList from '@/component/avatar/PresetColorAvatarList/PresetColorAvatarList';

export default function LiveCustomizeDrawer() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (flag: boolean) => {
		setOpen(flag);
	};

	const listCardHeader = (title: string) => (
		<CardHeader title={title} titleTypographyProps={{variant: 'h5', component: 'h5'}} />
	);

	const list = () => (
		<Grid2 container display='flex' flexGrow='row wrap' marginTop='-24px' padding='24px' boxSizing='border-box'>
			<Grid2 xs={12} paddingTop={3}>
				<Card>
					{listCardHeader('Layout')}
					<Divider />
					<CardContent>
						<ThemeModeRadioGroup />
						<DirectionRadioGroup />
					</CardContent>
				</Card>
			</Grid2>
			<Grid2 xs={12} paddingTop={3}>
				<Card>
					{listCardHeader('Border Radius')}
					<Divider />
					<CardContent>
						<BorderSlider />
					</CardContent>
				</Card>
			</Grid2>
			<Grid2 xs={12} paddingTop={3}>
				<Card>
					{listCardHeader('Preset Color')}
					<Divider />
					<CardContent>
						<PresetColorAvatarList />
					</CardContent>
				</Card>
			</Grid2>
		</Grid2>
	);

	return (
		<>
			<FloatingActionButton>
				<RotateIconButton icon={<SettingsIcon />} onClick={() => toggleDrawer(true)} />
			</FloatingActionButton>
			<Drawer
				open={open}
				anchor='right'
				onClose={() => toggleDrawer(false)}
				PaperProps={{
					sx: {width: 280, maxHeight: '100vh', overflow: 'auto'},
					role: 'presentation',
				}}
			>
				{list()}
			</Drawer>
		</>
	);
}
