import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import RotateIconButton from '@/component/button/RotateIconButton/RotateIconButton';
import SettingsIcon from '@mui/icons-material/Settings';

export default {
	title: 'Button/RotateIcon',
	component: RotateIconButton,
} as ComponentMeta<typeof RotateIconButton>;

const Template: ComponentStory<typeof RotateIconButton> = (args) => <RotateIconButton {...args} />;

export const iconSize = Template.bind({});
iconSize.args = {
	iconSize: 'small',
	icon: <SettingsIcon />,
};
