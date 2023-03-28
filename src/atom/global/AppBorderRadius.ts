import {atom} from 'recoil';

let defaultRadius = 4;
if (typeof window !== 'undefined') {
	const storage = window.localStorage.getItem('Radius');
	const savedRadius: number = Number(storage) as number;
	if (savedRadius) {
		defaultRadius = savedRadius;
	}
}

export const AppBorderRadius = atom<number>({
	key: 'AppBorderRadius',
	default: defaultRadius,
});
