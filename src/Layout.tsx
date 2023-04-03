import {Box, Paper, styled, useTheme} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import {uniqueId} from 'lodash';
import React from 'react';
import MultiCarousel from '@/component/carousel/MultiCarousel';
import {ProjectCareerData} from '@/data/ProjectCareerData';
import ProfileCard from '@/component/card/ProfileCard';
import {ProfileData} from '@/data/ProfileData';

const Item = styled(Paper)(({theme}) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const Layout = () => {
	const theme = useTheme();

	const careerData = ProjectCareerData;
	const profileData = ProfileData;
	return (
		<Box sx={{flexGrow: 1, backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff'}}>
			<Grid2 container alignItems='center' justifyContent='center'>
				<Grid2 container maxWidth='xl' mt={6} mb={6} xs={12}>
					<MultiCarousel
						headerTitle={careerData.headerTitle}
						headerSubTitle={careerData.headerSubTitle}
						carouselData={careerData.carouselData}
					/>
				</Grid2>
				<Grid2 container maxWidth='xl' mt={6} mb={6} xs={12} spacing={3}>
					<Grid2 xs={4}>
						<ProfileCard
							avatarSrc={profileData.avatarSrc}
							title={profileData.title}
							subHeader={profileData.subHeader}
							content={profileData.content}
						/>
					</Grid2>
					<Grid2 xs='auto' />
				</Grid2>
				{Array.from(Array(6)).map(() => (
					<Grid2 xs={12} sm={12} md={12} lg={12} xl={12} key={uniqueId()}>
						<Item>xs=12</Item>
					</Grid2>
				))}
			</Grid2>
		</Box>
	);
};
export default Layout;
