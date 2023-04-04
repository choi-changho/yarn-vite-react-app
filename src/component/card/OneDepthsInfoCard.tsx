import {Card, CardContent, CardHeader, Divider, Typography, useTheme} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

type OneDepthsInfoCardContentType = {
	title: string;
	subTitle: string;
	description: string;
	subDescription: string;
};

export type OneDepthsInfoCardType = {
	title: string;
	contents: OneDepthsInfoCardContentType[];
};

export default function OneDepthsInfoCard({title, contents}: OneDepthsInfoCardType) {
	const theme = useTheme();
	const createContents = () =>
		contents.map((content) => (
			<Grid2 xs={12} key={content.title} container spacing={0}>
				<Grid2 xs={12} sm={4}>
					<Typography variant='h4'>{content.title}</Typography>
					<Typography variant='caption' color={theme.palette.text.secondary}>
						{content.subTitle}
					</Typography>
				</Grid2>
				<Grid2 xs={12} sm={8}>
					<Typography variant='h4'>{content.description}</Typography>
					<Typography variant='caption' color={theme.palette.text.secondary}>
						{content.subDescription}
					</Typography>
				</Grid2>
			</Grid2>
		));
	return (
		<Card>
			<CardHeader title={title} />
			<Divider />
			<CardContent>
				<Grid2 container>{createContents()}</Grid2>
			</CardContent>
		</Card>
	);
}
