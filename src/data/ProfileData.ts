import resumeImage from '@/assets/resumeImage.jpg';
import {ProfileType} from '@/types/card/ProfileType';
import {MailTwoTone, PhonelinkRingTwoTone, PinDropTwoTone} from '@mui/icons-material';

export const ProfileData: ProfileType = {
	avatarSrc: resumeImage,
	title: '최창호',
	subHeader: '1992.08.12',
	content: [
		{
			icon: MailTwoTone,
			text: 'Email',
			value: 'ghodt123@gmail.com',
		},
		{
			icon: PhonelinkRingTwoTone,
			text: 'Phone',
			value: '010-9108-6346',
		},
		{
			icon: PinDropTwoTone,
			text: 'Location',
			value: '서울시 성북구 종암로 36길 41',
		},
	],
};
