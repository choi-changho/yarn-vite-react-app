import {CardMedia, Fade, Tooltip, Typography, useTheme} from '@mui/material';
import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';

import Carousel from 'react-material-ui-carousel';
import {CarouselIcon, MultiCarouselType} from '@/types/carousel/MultiCarouselType';
import {uniqueId} from 'lodash';

export default function MultiCarousel({headerTitle, headerSubTitle, carouselData}: MultiCarouselType) {
	const theme = useTheme();

	const createIconList = (list: CarouselIcon[]) =>
		list.map((icon) => (
			<Tooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} title={icon.tooltip} key={uniqueId()}>
				<Grid2 xs={3} pb={2}>
					{<icon.src />}
				</Grid2>
			</Tooltip>
		));
	const createCarouselList = () =>
		carouselData.map((carousel) => {
			return (
				<Grid2 container maxWidth='xl' xs={12} key={uniqueId()} height='40vh'>
					<Grid2 xs={12} md={5} lg={5} xl={5}>
						<Grid2 container>
							<Grid2 xs={12}>
								<Typography variant='h1' color={theme.palette.text.primary} textAlign='center'>
									{carousel.title}
								</Typography>
								{carousel.subTitle && (
									<Typography variant='h2' color={theme.palette.secondary.main} textAlign='center' pt={2}>
										{carousel.subTitle}
									</Typography>
								)}
							</Grid2>
							<Grid2 xs={12} pt={8}>
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
							{carousel.iconList && (
								<Grid2 xs={12} pt={10} pl={2} pr={2} textAlign='center'>
									<Grid2 container>{createIconList(carousel.iconList)}</Grid2>
								</Grid2>
							)}
						</Grid2>
					</Grid2>
					<Grid2 xs={12} md={7} lg={7} xl={7} sx={{display: {xs: 'none', md: 'flex'}}}>
						<CardMedia
							sx={{width: '100%', height: 'inherit', backgroundSize: 'cover'}}
							image={carousel.image.src}
							title={carousel.image.alt}
						/>
						{/* <img */}
						{/* 	src={carousel.image.src} */}
						{/* 	alt={carousel.image.alt} */}
						{/* 	style={{width: '100%', height: '100%', objectFit: 'cover'}} */}
						{/* /> */}
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
				<Carousel autoPlay={false} indicators={false} animation='slide' duration={1000}>
					{createCarouselList()}
				</Carousel>
			</Grid2>
		</Grid2>
	);
}
