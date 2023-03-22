import {Box, Paper, styled} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
import {uniqueId} from 'lodash';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const Layout = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid2 container columns={{ xs: 4, sm: 8, md: 12 }} height="100vh">
				{Array.from(Array(6)).map(() => (
					<Grid2 xs={4} sm={8} md={4} key={uniqueId()}>
						<Item>xs=12</Item>
					</Grid2>
				))}
			</Grid2>
		</Box>
	);
}
export default Layout;
