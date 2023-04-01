import {atom} from 'recoil';
import {PresetType} from '@/types/global/PresetType';
import {PresetData} from '@/data/PresetData';

const {presets} = PresetData;
let defaultPreset: PresetType = presets.filter((p) => p.default)[0];
if (typeof window !== 'undefined') {
	const savedPreset: PresetType = JSON.parse(localStorage.getItem('PRESET') as string);
	if (savedPreset) {
		defaultPreset = savedPreset;
	}
}

export const AppPreset = atom<PresetType>({
	key: 'AppPreset',
	default: defaultPreset,
});
