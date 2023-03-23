import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {HeaderStory} from '@/component/header/HeaderStory';

export default {
	title: 'Example/HeaderStory',
	component: HeaderStory,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof HeaderStory>;

const Template: ComponentStory<typeof HeaderStory> = (args) => (
	<HeaderStory {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
	user: {
		name: 'Jane Doe',
	},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
