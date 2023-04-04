import {Box, Typography, useTheme} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React from 'react';
import MultiCarousel from '@/component/carousel/MultiCarousel';
import {ProjectCareerData} from '@/data/ProjectCareerData';
import ProfileCard from '@/component/card/ProfileCard';
import {ProfileData} from '@/data/ProfileData';
import {TwoDepthsInfoCard} from '@/types/card/TwoDepthsInfoCard';
import {ProfileInfoData} from '@/data/ProfileInfoData';

const Layout = () => {
	const theme = useTheme();

	return (
		<Box sx={{flexGrow: 1, backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff'}}>
			<Grid2 container alignItems='center' justifyContent='center'>
				<Grid2 container maxWidth='xl' mt={6} mb={6} xs={12} spacing={5} pt={10} pb={5} id='profile'>
					<Grid2 xs={12}>
						<Typography variant='h1' color={theme.palette.text.primary} textAlign='center'>
							'프로필'
						</Typography>
					</Grid2>
					<Grid2 xs={4}>
						<ProfileCard
							avatarSrc={ProfileData.avatarSrc}
							title={ProfileData.title}
							subHeader={ProfileData.subHeader}
							content={ProfileData.content}
						/>
					</Grid2>
					<Grid2 xs={8}>
						<Grid2 container>
							<Grid2 xs={12}>
								<TwoDepthsInfoCard
									mainTitle={ProfileInfoData.mainTitle}
									detailTitle={ProfileInfoData.detailTitle}
									mainDescription={ProfileInfoData.mainDescription}
									contents={ProfileInfoData.contents}
								/>
							</Grid2>
						</Grid2>
					</Grid2>
				</Grid2>
				<Grid2 container maxWidth='xl' mt={6} mb={6} xs={12} pt={5} pb={5} id='projects' spacing={5}>
					<MultiCarousel
						headerTitle={ProjectCareerData.headerTitle}
						headerSubTitle={ProjectCareerData.headerSubTitle}
						carouselData={ProjectCareerData.carouselData}
					/>
				</Grid2>
			</Grid2>
		</Box>
	);
};
export default Layout;
