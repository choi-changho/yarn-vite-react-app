import {TwoDepthsInfoCardType} from '@/component/card/TwoDepthsInfoCard';
import {OneDepthsInfoCardType} from '@/component/card/OneDepthsInfoCard';

export const ProfileInfoData: TwoDepthsInfoCardType = {
	mainTitle: '자기 소개',
	detailTitle: '인적 사항',
	mainDescription: '5년차 웹 개발자 최창호입니다.',
	contents: [
		{
			key: '이름',
			value: '최창호',
		},
		{
			key: '주소',
			value: '서울특별시 성북구 종암로 36길 41(하월곡동)',
		},
		{
			key: '전화번호',
			value: '010-9108-6346',
		},
		{
			key: '이메일',
			value: 'ghodt132@gmail.com',
		},
		{
			key: 'GIT URL',
			value: 'https://github.com/choi-changho',
		},
	],
};

export const EduInfoData: OneDepthsInfoCardType = {
	title: '학력사항',
	contents: [
		{
			title: '2011 ~ 2017',
			subTitle: '학사졸업',
			description: '한림대학교',
			subDescription: '주전공: 사회학과 / 복수전공: 광고홍보학과',
		},
		{
			title: '2008 ~ 2011',
			subTitle: '졸업',
			description: '용문고등학교',
			subDescription: '문과',
		},
	],
};

export const CareerInfoData: OneDepthsInfoCardType = {
	title: '경력사항',
	contents: [
		{
			title: '2022 ~ 2023',
			subTitle: '재직중',
			description: '헬스허브',
			subDescription: 'Hpacs 팀 연구원',
		},
		{
			title: '2018 ~ 2022',
			subTitle: '퇴사',
			description: '노스스타 컨설팅',
			subDescription: '솔루션사업부',
		},
	],
};
