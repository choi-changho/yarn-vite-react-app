import {ImageType} from '@/types/global/ImageType';

export type CarouselIcon = {
	src: string;
	tooltip?: string;
};

export type CarouselDataType = {
	title: string;
	subTitle: string;
	description: string;
	image: ImageType;
	iconList?: CarouselIcon[];
};

export type MultiCarouselType = {
	headerTitle: string;
	headerSubTitle?: string;
	carouselData: CarouselDataType[];
};
