import DoneAllIcon from '@mui/icons-material/DoneAll';
import {Avatar} from '@mui/material';
import React, {MouseEventHandler} from 'react';
import {ColorType} from '@/types/global/ColorType';
import {common} from '@mui/material/colors';
import {isUndefined} from 'lodash';

type PresetAvatarProps = {
	mainColor: ColorType;
	subColor?: ColorType;
	checked?: boolean;
	clickEnable?: boolean;
	onClick?: MouseEventHandler<HTMLDivElement>;
};
export default function PresetAvatar({
	mainColor,
	subColor,
	checked,
	onClick,
	clickEnable = !!onClick,
}: PresetAvatarProps) {
	const getBackground = () => {
		if (!isUndefined(subColor)) {
			return `linear-gradient(135deg, ${mainColor} 50%, ${subColor} 50%)`;
		}
		return `${mainColor}`;
	};
	const getCursor = () => {
		if (clickEnable) {
			return 'pointer';
		}
		return 'none';
	};

	return (
		<Avatar onClick={onClick} sx={{background: getBackground, cursor: getCursor}}>
			{checked ? <DoneAllIcon sx={{color: common.white}} /> : ''}
		</Avatar>
	);
}
