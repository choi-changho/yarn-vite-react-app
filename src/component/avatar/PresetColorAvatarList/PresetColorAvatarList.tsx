import Grid2 from '@mui/material/Unstable_Grid2';
import PresetAvatar from '@/component/avatar/PresetAvatar';
import {PresetData} from '@/data/PresetData';
import {isEqual, uniqueId} from 'lodash';
import React from 'react';
import {PresetType} from '@/types/global/PresetType';
import {useRecoilState} from 'recoil';
import {AppPreset} from '@/atom/global/AppPreset';

export default function PresetColorAvatarList() {
	const presetList = PresetData.presets;
	const [preset, setPreset] = useRecoilState(AppPreset);

	const onClickPreset = (obj: PresetType) => {
		localStorage.setItem('PRESET', JSON.stringify(obj));
		setPreset(obj);
	};

	const renderList = () => {
		return presetList.map((obj) => (
			<Grid2 key={uniqueId()}>
				<PresetAvatar
					mainColor={obj.mainColor}
					subColor={obj.subColor}
					checked={isEqual(obj, preset)}
					onClick={() => onClickPreset(obj)}
				/>
			</Grid2>
		));
	};

	return (
		<Grid2 spacing={2} xs={12} container>
			{renderList()}
		</Grid2>
	);
}
