import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Inputfield from './Inputfield';

export default {
  title: 'FormInputs/Inputfield',
  component: Inputfield,
} as ComponentMeta<typeof Inputfield>;

const Template: ComponentStory<typeof Inputfield> = (args) => (
  <Inputfield {...args} />
);

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  type: 'text',
};
