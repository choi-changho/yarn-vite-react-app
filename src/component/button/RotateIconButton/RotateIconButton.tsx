import {IconButton} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {createElement, MouseEventHandler, ReactElement} from 'react';

interface RotateIconButtonType {
	iconSize?: 'small' | 'medium' | 'large';
	spinSec?: number;
	icon?: ReactElement;
	onClick?: MouseEventHandler;
}

export default function RotateIconButton({
	iconSize = 'medium',
	spinSec = 2,
	icon = <SettingsIcon />,
	...props
}: RotateIconButtonType) {
	return (
		<IconButton
			{...props}
			sx={{
				animation: `spin ${spinSec}s linear infinite`,
				'@keyframes spin': {
					'0%': {
						transform: 'rotate(360deg)',
					},
					'100%': {
						transform: 'rotate(0deg)',
					},
				},
			}}
			size={iconSize}
			disableRipple
		>
			{createElement(icon?.type, {
				...{
					...icon?.props,
					fontSize: 'inherit',
				},
			})}
		</IconButton>
	);
}
