import {AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Adb} from '@mui/icons-material';
import {MouseEvent, useState} from 'react';

const pages = [
	{
		name: 'Profile',
		link: '#profile',
		newTab: false,
	},
	{
		name: 'Projects',
		link: '#projects',
		newTab: false,
	},
	{
		name: 'Git',
		link: 'https://github.com/choi-changho',
		newTab: true,
	},
];

function Header() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position='sticky' color='inherit'>
			<Container maxWidth='lg'>
				<Toolbar disableGutters>
					<Adb sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: {xs: 'none', md: 'flex'},
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>

					<Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: {xs: 'block', md: 'none'},
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page.name} onClick={handleCloseNavMenu}>
									<Typography
										textAlign='center'
										sx={{color: 'inherit'}}
										component='a'
										href={page.link}
										target={page.newTab ? '_blank' : ''}
									>
										{page.name}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Adb sx={{display: {xs: 'flex', md: 'none'}, mr: 1}} />
					<Typography
						variant='h5'
						noWrap
						component='a'
						href=''
						sx={{
							mr: 2,
							display: {xs: 'flex', md: 'none'},
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>
					<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
						{pages.map((page) => (
							<Button key={page.name} onClick={handleCloseNavMenu} sx={{my: 2, color: 'inherit', display: 'block'}}>
								<Link
									href={page.link}
									underline='none'
									sx={{color: 'inherit', display: 'block'}}
									target={page.newTab ? '_blank' : ''}
								>
									{page.name}
								</Link>
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Header;
