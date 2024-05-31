import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui/components';

const meta: Meta<typeof Button> = {
  title: 'DS/Button/Button',
  component: Button,
  args: {
    variant: 'solid',
    buttonType: 'primary',
    size: 'xl',
  },
  render: (props) => {
    return <Button {...props}>Button</Button>;
  },
  // argTypes: {
  //   type: {
  //     control: { type: 'radio' },
  //     options: ['button', 'submit', 'reset'],
  //   },
  // },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Variant: Story = {
  args: {
    variant: 'outlined',
    size: 'xl',
  },
};

export const ButtonType: Story = {
  args: {
    buttonType: 'secondary',
  },
};

export const Size: Story = {
  args: {
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const LeftIcon: Story = {
  args: {
    leftIcon: '👈',
  },
};

export const RightIcon: Story = {
  args: {
    rightIcon: '👉',
  },
};

export const Icons: Story = {
  args: {
    leftIcon: '👈',
    rightIcon: '👉',
  },
};

export const Custom: Story = {
  args: {
    className: 'w-full flex justify-center items-center',
  },
};
