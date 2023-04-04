import {Card, CardContent, CardHeader, Divider, Table, TableBody, TableCell, TableRow, Typography} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import {uniqueId} from 'lodash';

type TwoDepthsInfoCardContentType = {
	key: string;
	value: string;
};

export type TwoDepthsInfoCardType = {
	mainTitle: string;
	mainDescription?: string;
	detailTitle: string;
	contents: TwoDepthsInfoCardContentType[];
};

export function TwoDepthsInfoCard({detailTitle, mainTitle, mainDescription, contents}: TwoDepthsInfoCardType) {
	const createContents = () =>
		contents.map((content) => (
			<TableRow key={uniqueId()}>
				<TableCell variant='body' size='small' sx={{borderBottom: 'none', textAlign: 'left'}}>
					{content.key}
				</TableCell>
				<TableCell variant='body' size='small' sx={{borderBottom: 'none', textAlign: 'left'}}>
					:
				</TableCell>
				<TableCell variant='body' size='small' sx={{borderBottom: 'none', textAlign: 'left'}}>
					{content.value}
				</TableCell>
			</TableRow>
		));
	return (
		<Card>
			<CardHeader title={mainTitle} />
			<Divider />
			<CardContent>
				<Grid2 container spacing={1}>
					<Grid2 xs={12}>
						<Typography variant='body2'>{mainDescription}</Typography>
					</Grid2>
					<Grid2 xs={12} pt={2} pb={0}>
						<Typography variant='body1'>{detailTitle}</Typography>
					</Grid2>
					<Grid2 xs={12}>
						<Divider />
					</Grid2>
					<Grid2 xs={12}>
						<Table>
							<TableBody>{createContents()}</TableBody>
						</Table>
					</Grid2>
				</Grid2>
			</CardContent>
		</Card>
	);
}
