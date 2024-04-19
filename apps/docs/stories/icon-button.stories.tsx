import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@repo/ui/components';

// GYU-TODO: storybook 환경에 tailwind 설정한 후 Icon fill 의도 대로 동작하는지 확인하기!

const meta: Meta<typeof IconButton> = {
  title: 'DS/Button/IconButton',
  component: IconButton,
  args: {
    variant: 'normal',
  },
  render: (props) => {
    return <IconButton {...props}>🚀</IconButton>;
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Variant: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    variant: 'outlined',
    isRounded: true,
  },
};

export const Custom: Story = {
  args: {
    className: 'flex items-center justify-center',
    variant: 'outlined',
    isRounded: true,
    // 현재 storybook 에 tailwindcss 스타일을 설정하지 않아서 인라인 스타일로 지정
    style: {
      height: '32px',
      width: '32px',
    },
  },
};
