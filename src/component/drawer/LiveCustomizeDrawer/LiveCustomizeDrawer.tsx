import {Card, CardContent, CardHeader, Divider, Drawer} from '@mui/material';
import React, {useState} from 'react';
import RotateIconButton from '@/component/button/RotateIconButton/RotateIconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import FloatingActionButton from '@/component/button/FloatingActionButton/FloatingActionButton';
import Grid2 from '@mui/material/Unstable_Grid2';
import ThemeModeRadioGroup from '@/component/radio/ThemeModeRadioGroup/ThemeModeRadioGroup';

export default function LiveCustomizeDrawer() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (flag: boolean) => {
		setOpen(flag);
	};

	const list = () => (
		<Grid2 container display='flex' flexGrow='row wrap' marginTop='-24px' padding='24px' boxSizing='border-box'>
			<Grid2 xs={12} paddingTop={3}>
				<Card sx={{borderRadius: '8px'}}>
					<CardHeader title='Layout' titleTypographyProps={{variant: 'h5', component: 'h5'}} />
					<Divider />
					<CardContent>
						<ThemeModeRadioGroup />
					</CardContent>
				</Card>
			</Grid2>
		</Grid2>
	);

	return (
		<div>
			<FloatingActionButton>
				<RotateIconButton icon={<SettingsIcon />} onClick={() => toggleDrawer(true)} />
			</FloatingActionButton>
			<Drawer
				anchor='right'
				open={open}
				onClose={() => toggleDrawer(false)}
				PaperProps={{
					sx: {width: 280, maxHeight: '100vh', overflow: 'auto'},
					role: 'presentation',
				}}
			>
				{list()}
			</Drawer>
		</div>
	);
}
