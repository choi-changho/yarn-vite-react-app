import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import FloatingActionButton from '@/component/button/FloatingActionButton/FloatingActionButton';

export default {
	title: 'Button/FloatingAction',
	component: FloatingActionButton,
} as ComponentMeta<typeof FloatingActionButton>;

const Template: ComponentStory<typeof FloatingActionButton> = (args) => <FloatingActionButton {...args} />;

export const wrapSize = Template.bind({});
wrapSize.args = {
	wrapperSize: 'medium',
};
