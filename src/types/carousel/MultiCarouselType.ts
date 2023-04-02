export type MultiCarouselType = {
	headerTitle: string;
	headerSubTitle?: string;
	carouselData: CarouselDataType[];
};

type CarouselDataType = {
	title: string;
	subTitle: string;
	description: string;
	image: string;
};
