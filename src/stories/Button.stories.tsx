import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../components/Button';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default button',
  style: {
    fontSize: '18px',
    padding: '1em',
    width: '10em',
    margin: '0.8em',
    color: 'white',
    cursor: 'pointer',
    border: '2px solid #16213E',
    borderRadius: '5px',
    background: '#16213E',
  },
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger',
  style: {
    ...Default.args.style,
    border: '2px solid #E94560',
    background: '#E94560',
  }
};