import {Direction} from '@mui/material';
import {atom} from 'recoil';

let defaultDir: Direction = 'ltr';
if (typeof window !== 'undefined') {
	const savedDir: Direction = localStorage.getItem('DIRECTION') as 'ltr' | 'rtl'; // save the users prefered mode
	if (savedDir) {
		defaultDir = savedDir;
	} else {
		// LTR, RTL 국가 여부를 따져서 변수 주입
	}
}

export const AppDirection = atom<Direction>({
	key: 'AppDirection',
	default: defaultDir,
});
