import {useRecoilValue} from 'recoil';
import {AppThemeMode} from '@/atom/global/AppThemeMode';
import {useMemo} from 'react';
import {AppPreset} from '@/atom/global/AppPreset';

export default function ColorModeOption() {
	const mode = useRecoilValue(AppThemeMode);
	const preset = useRecoilValue(AppPreset);

	const colorTheme = useMemo(
		() => ({
			palette: {
				mode,
				...{
					primary: {
						main: preset.mainColor,
					},
					secondary: {
						main: preset.subColor,
					},
				},
			},
		}),
		[mode, preset]
	);

	return {colorTheme};
}
