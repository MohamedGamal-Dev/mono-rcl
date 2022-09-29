import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../components/Button';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: { control: 'select', options: ['default', 'secondary', 'danger'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  variant: 'default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  variant: 'danger',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Button',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large',
};
