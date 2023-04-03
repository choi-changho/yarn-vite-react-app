import Grid2 from '@mui/material/Unstable_Grid2';
import {Typography, useTheme} from '@mui/material';
import React from 'react';

type GridCenterContainerType = {
	headerTitle: string;
	headerSubTitle?: string;
};
export default function GridCenterContainer({headerTitle, headerSubTitle}: GridCenterContainerType) {
	const theme = useTheme();
	return (
		<Grid2 xs={12} textAlign='center'>
			<Grid2 pb={2}>
				<Typography variant='h1' color={theme.palette.text.primary}>
					{headerTitle}
				</Typography>
			</Grid2>
			{headerSubTitle && (
				<Grid2 pb={2}>
					<Typography variant='h3' color={theme.palette.text.primary}>
						{headerSubTitle}
					</Typography>
				</Grid2>
			)}
		</Grid2>
	);
}
