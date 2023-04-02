import {CardMedia, Typography, useTheme} from '@mui/material';
import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import ReactLogo from '@/assets/react.svg';
import JSLogo from '@/assets/javascript.svg';
import TSLogo from '@/assets/typescript.svg';
import ViteLogo from '@/assets/vite.svg';
import Carousel from 'react-material-ui-carousel';
import {MultiCarouselType} from '@/types/carousel/MultiCarouselType';
import {uniqueId} from 'lodash';

export default function MultiCarousel({headerTitle, headerSubTitle, carouselData}: MultiCarouselType) {
	const theme = useTheme();
	const createCarouselList = () =>
		carouselData.map((carousel) => {
			return (
				<Grid2 container maxWidth='xl' xs={12} key={uniqueId()} height='40vh'>
					<Grid2 xs={12} md={5}>
						<Grid2 container>
							<Grid2 xs={12} pt={5}>
								<Typography variant='h1' color={theme.palette.text.primary} textAlign='center'>
									{carousel.title}
								</Typography>
								<Typography variant='h2' color={theme.palette.secondary.main} textAlign='center' pt={2}>
									{carousel.subTitle}
								</Typography>
							</Grid2>
							<Grid2 xs={12} pt={10}>
								<Typography
									variant='h3'
									color={theme.palette.text.primary}
									textAlign='center'
									whiteSpace='pre-wrap'
									lineHeight={2}
								>
									{carousel.description}
								</Typography>
							</Grid2>
							<Grid2 xs={12} pt={10} textAlign='center'>
								<ReactLogo />
								<JSLogo />
								<TSLogo />
								<ViteLogo />
							</Grid2>
						</Grid2>
					</Grid2>
					<Grid2 xs={12} md={7} maxWidth='lg' sx={{display: {xs: 'none', md: 'flex'}}}>
						<CardMedia sx={{width: '100%', height: '100%'}} image={carousel.image} title='title' />
					</Grid2>
				</Grid2>
			);
		});
	return (
		<Grid2 container maxWidth='xl' xs={12} justifyContent='center'>
			<Grid2 xs={12} textAlign='center'>
				<Grid2 pb={2}>
					<Typography variant='h1' color={theme.palette.text.primary}>
						{headerTitle}
					</Typography>
				</Grid2>
				<Grid2 pb={2}>
					<Typography variant='h3' color={theme.palette.text.primary}>
						{headerSubTitle}
					</Typography>
				</Grid2>
			</Grid2>
			<Grid2 xs={12} pt={2} pb={2}>
				<Carousel
					sx={{width: 'inherit', height: 'inherit'}}
					autoPlay={false}
					indicators={false}
					animation='slide'
					duration={1000}
				>
					{createCarouselList()}
				</Carousel>
			</Grid2>
		</Grid2>
	);
}
