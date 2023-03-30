import {useRecoilValue} from 'recoil';
import {AppBorderRadius} from '@/atom/global/AppBorderRadius';
import {useMemo} from 'react';

export default function BorderOption() {
	const borderRadius = useRecoilValue(AppBorderRadius);
	const borderTheme = useMemo(
		() => ({
			shape: {
				borderRadius,
			},
		}),
		[borderRadius]
	);

	return {borderTheme};
}
