import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import DirectionRadioGroup from '@/component/radio/DirectionRadioGroup/DirectionRadioGroup';
import {useSetRecoilState} from 'recoil';
import {AppDirection} from '@/atom/global/AppDirection';

export default {
	title: 'Radio/DirectionRadioGroup',
	component: DirectionRadioGroup,
} as ComponentMeta<typeof DirectionRadioGroup>;

const MockSnackBar = () => {
	const setDirState = useSetRecoilState(AppDirection);
	setDirState('ltr');

	return <DirectionRadioGroup />;
};

const Template: Story = () => <MockSnackBar />;

export const Default = Template.bind({});
