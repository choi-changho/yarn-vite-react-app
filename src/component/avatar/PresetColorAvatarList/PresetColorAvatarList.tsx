import Grid2 from '@mui/material/Unstable_Grid2';
import PresetAvatar from '@/component/avatar/PresetAvatar';
import {PresetData} from '@/data/PresetData';
import {uniqueId} from 'lodash';
import React, {useState} from 'react';
import {presetType} from '@/types/global/PresetType';

export default function PresetColorAvatarList() {
	const [presets, setPresets] = useState(PresetData.presets);

	const onClickPreset = (preset: presetType, index: number) => {
		const result = presets.map((values, pIdx) => ({...values, checked: pIdx === index}));
		setPresets(result);
	};

	return (
		<Grid2 spacing={2} xs={12} container>
			{presets.map((preset, index) => (
				<Grid2 key={uniqueId()}>
					<PresetAvatar
						mainColor={preset.mainColor}
						subColor={preset.subColor}
						checked={preset.checked}
						onClick={() => onClickPreset(preset, index)}
					/>
				</Grid2>
			))}
		</Grid2>
	);
}
