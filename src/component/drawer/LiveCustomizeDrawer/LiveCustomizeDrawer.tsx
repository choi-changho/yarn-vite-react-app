import {
	Card,
	CardContent,
	CardHeader,
	Drawer,
	FormControl,
	FormControlLabel,
	FormLabel,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Radio,
	RadioGroup,
} from '@mui/material';
import React, {useState} from 'react';
import RotateIconButton from '@/component/button/RotateIconButton/RotateIconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import FloatingActionButton from '@/component/button/FloatingActionButton/FloatingActionButton';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Grid2 from '@mui/material/Unstable_Grid2';

export default function LiveCustomizeDrawer() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (flag: boolean) => {
		setOpen(flag);
	};

	const list = () => (
		<Grid2 container display='flex' flexGrow='row wrap' marginTop='-24px' padding='24px' boxSizing='border-box'>
			<Grid2 xs={12} paddingTop={3}>
				<Card>
					<CardHeader title='Layout' titleTypographyProps={{variant: 'h5', component: 'h5'}} />
					<CardContent>
						<FormControl>
							<FormLabel>Mode</FormLabel>
							<RadioGroup defaultValue='light' name='radio-buttons-group' sx={{display: 'flex', flexFlow: 'row wrap'}}>
								<FormControlLabel value='light' control={<Radio />} label='light' />
								<FormControlLabel value='black' control={<Radio />} label='black' />
							</RadioGroup>
						</FormControl>
					</CardContent>
				</Card>
			</Grid2>
			<Grid2 xs={12}>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</Grid2>
			<Grid2 xs={12}>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
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
