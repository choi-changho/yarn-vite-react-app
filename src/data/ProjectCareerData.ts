import {MultiCarouselType} from '@/types/carousel/MultiCarouselType';
import TestImg1 from '@/assets/slider-dark-1.png';

export const ProjectCareerData: MultiCarouselType = {
	headerTitle: '프로젝트 수행 이력',
	headerSubTitle: '전체기간 : 2018.10 ~ 현재',
	carouselData: [
		{
			title: 'Pacs 시스템 신규 개발 및 유지보수',
			subTitle: '(주)헬스허브 (2022.04 ~ 현재)',
			description:
				'1. 폴리머(Web Component) 에서 리엑트로 변환 작업\n' +
				'2. 프로젝트 구성 빌드 툴 변경 (Webpack -> Vite)\n' +
				'3. 리엑트 변환 중 Redux 적용\n' +
				'4. 기타 유지보수 중 이슈 사항들 수정',
			image: TestImg1,
		},
	],
};
