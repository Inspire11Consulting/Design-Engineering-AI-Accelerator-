import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['red', 'white', 'primary'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    leftIcon: { control: 'boolean' },
    rightIcon: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    children: 'Red Button',
    color: 'red',
    size: 'md',
  },
};

export const White: Story = {
  args: {
    children: 'White Button',
    color: 'white',
    size: 'md',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    color: 'primary',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    color: 'red',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    color: 'red',
    size: 'xs',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    color: 'red',
    size: 'md',
    disabled: true,
  },
};

export const SmallRedDefault: Story = {
  args: {
    children: 'Default',
    color: 'red',
    size: 'sm',
  },
};

export const SmallRedHover: Story = {
  args: {
    children: 'Hover',
    color: 'red',
    size: 'sm',
    style: { boxShadow: '0 0 0 2px #d92d20, 0 2px 4px #d92d20' }, // visually indicate hover
  },
};

export const SmallRedFocus: Story = {
  args: {
    children: 'Focus',
    color: 'red',
    size: 'sm',
    style: { outline: '2px solid #d92d20', outlineOffset: '2px' }, // visually indicate focus
  },
};

export const SmallRedActive: Story = {
  args: {
    children: 'Active',
    color: 'red',
    size: 'sm',
    style: { backgroundColor: '#b42318' }, // visually indicate active
  },
};

export const HeroPrimaryLarge: Story = {
  args: {
    children: 'Shop Now',
    color: 'red', // Changed from 'primary' to 'red' as it's a valid color
    size: 'lg',
  },
};
