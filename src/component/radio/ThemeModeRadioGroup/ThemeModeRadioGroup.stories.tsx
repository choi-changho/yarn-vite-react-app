import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {useSetRecoilState} from 'recoil';
import {AppThemeMode} from '@/atom/global/AppThemeMode';
import ThemeModeRadioGroup from '@/component/radio/ThemeModeRadioGroup/ThemeModeRadioGroup';

export default {
	title: 'Radio/ThemeModeRadioGroup',
	component: ThemeModeRadioGroup,
} as ComponentMeta<typeof ThemeModeRadioGroup>;

const MockSnackBar = () => {
	const setModeState = useSetRecoilState(AppThemeMode);
	setModeState('light');

	return <ThemeModeRadioGroup />;
};

const Template: Story = () => <MockSnackBar />;

export const Default = Template.bind({});
