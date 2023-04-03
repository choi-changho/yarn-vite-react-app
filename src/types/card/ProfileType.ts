import {SvgIconComponent} from '@mui/icons-material';

type ProfileContent = {
	icon: SvgIconComponent;
	text: string;
	value: string;
};

export type ProfileType = {
	avatarSrc: string;
	title: string;
	subHeader?: string;
	content: ProfileContent[];
};
