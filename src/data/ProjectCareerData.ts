import {MultiCarouselType} from '@/types/carousel/MultiCarouselType';
import HpacsImage from '@/assets/Hpacs.png';
import ReactLogo from '@/assets/react.svg';
import JSLogo from '@/assets/javascript.svg';
import JQueryLogo from '@/assets/jquery.svg';
import TSLogo from '@/assets/typescript.svg';
import PolymerLogo from '@/assets/polymer.svg';
import ViteLogo from '@/assets/vite.svg';
import WebpackLogo from '@/assets/webpack.svg';
import SemiImage from '@/assets/samsung_semiconductor.png';
import AdobeLogo from '@/assets/adobe.svg';
import MavenLogo from '@/assets/maven.svg';
import JavaLogo from '@/assets/java.svg';
import P6Image from '@/assets/samsung_p6.png';
import HyundaiImage from '@/assets/hyundai.png';
import NoImage from '@/assets/noImage.jpg';

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
			image: {
				src: HpacsImage,
				alt: 'HPACS',
			},
			iconList: [
				{
					src: ReactLogo,
					tooltip: 'React',
				},
				{
					src: ViteLogo,
					tooltip: 'Vite',
				},
				{
					src: JSLogo,
					tooltip: 'Vanilla JavaScript',
				},
				{
					src: TSLogo,
					tooltip: 'TypeScript',
				},
				{
					src: PolymerLogo,
					tooltip: 'Polymer',
				},
				{
					src: JQueryLogo,
					tooltip: 'JQuery',
				},
				{
					src: WebpackLogo,
					tooltip: 'WebPack',
				},
			],
		},
		{
			title: '삼성 반도체 사이트 개발',
			subTitle: '(주)노스스타컨설팅 (2021.07 ~ 2022.02)',
			description:
				'1. 프로젝트 세팅 ( Maven, 개발 환경 세팅, 빌드 )\n' +
				'2. 페이지 색인 데이터 CRUD\n' +
				'3. HashTag 페이지 구성 컴포넌트 개발\n' +
				'4. 제품 사양 컴포넌트 개발',
			image: {
				src: SemiImage,
				alt: 'Samsung Semiconductor',
			},
			iconList: [
				{
					src: JSLogo,
					tooltip: 'Vanilla JavaScript',
				},
				{
					src: JQueryLogo,
					tooltip: 'JQuery',
				},
				{
					src: JavaLogo,
					tooltip: 'Java',
				},
				{
					src: AdobeLogo,
					tooltip: 'AEM',
				},
				{
					src: MavenLogo,
					tooltip: 'Maven',
				},
			],
		},
		{
			title: '현대글로비스 신사옥 스마트 워크스페이스',
			subTitle: '(주)노스스타컨설팅 (2021.02 ~ 2021.04)',
			// eslint-disable-next-line no-useless-concat
			description: '1. Admin 페이지 관련 기능 및 화면 대다수 보완\n' + "2. '방문이력관리' 기능 개발\n",
			image: {
				src: NoImage,
				alt: '현대 글로비스',
			},
			iconList: [
				{
					src: JSLogo,
					tooltip: 'Vanilla JavaScript',
				},
				{
					src: JQueryLogo,
					tooltip: 'JQuery',
				},
				{
					src: JavaLogo,
					tooltip: 'Java',
				},
				{
					src: MavenLogo,
					tooltip: 'Maven',
				},
			],
		},
		{
			title: '삼성닷컴 P6 글로벌 사이트 개발',
			subTitle: '(주)노스스타컨설팅 (2020.03 ~ 2020.12)',
			description:
				'1. 사용자가 최근에 보았던 제품 리스트 관리 컴포넌트 개발\n' +
				'2. 제품 좋아요 기능 제품 관련 컴포넌트 추가\n' +
				'3. 제품 리뷰 페이지 Third-party 리뷰 라이브러리 사용한 리뷰 컴포넌트 개발\n' +
				'4. 사용자 마이페이지내 컴포넌트 개발',
			image: {
				src: P6Image,
				alt: '삼성 전자',
			},
			iconList: [
				{
					src: JSLogo,
					tooltip: 'Vanilla JavaScript',
				},
				{
					src: JQueryLogo,
					tooltip: 'JQuery',
				},
				{
					src: JavaLogo,
					tooltip: 'Java',
				},
				{
					src: AdobeLogo,
					tooltip: 'AEM',
				},
				{
					src: MavenLogo,
					tooltip: 'Maven',
				},
			],
		},
		{
			title: '현대닷컴 HMC 운영',
			subTitle: '(주)노스스타컨설팅 (2019.02 ~ 2019.12)',
			// eslint-disable-next-line no-useless-concat
			description:
				'1. 마이페이지 현대 디지털 키 연동\n' +
				'2. 블루멤버스 실 운행자 차량 등록 연동\n' +
				'3. 지도 OPEN API Naver -> Kakao로 변경',
			image: {
				src: HyundaiImage,
				alt: '현대 닷컴',
			},
			iconList: [
				{
					src: JSLogo,
					tooltip: 'Vanilla JavaScript',
				},
				{
					src: JQueryLogo,
					tooltip: 'JQuery',
				},
				{
					src: JavaLogo,
					tooltip: 'Java',
				},
				{
					src: AdobeLogo,
					tooltip: 'AEM',
				},
				{
					src: MavenLogo,
					tooltip: 'Maven',
				},
			],
		},
	],
};
