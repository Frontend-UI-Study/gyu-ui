import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '@repo/ui/components';

// GYU-TODO: storybook 환경에 tailwind 설정한 후 Icon fill 의도 대로 동작하는지 확인하기!

const meta: Meta<typeof ButtonGroup> = {
  title: 'DS/Button/ButtonGroup',
  component: ButtonGroup,
  args: {
    variant: 'default',
  },
  render: (props) => {
    return (
      <ButtonGroup {...props}>
        <Button size="xl" variant="outlined">
          버튼 라벨
        </Button>
        <Button size="xl" variant="outlined">
          버튼 라벨
        </Button>
        <Button size="xl" variant="outlined">
          버튼 라벨
        </Button>
      </ButtonGroup>
    );
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {};

export const Variant: Story = {
  args: {
    variant: 'segment',
  },
};

export const SegmentMultiple: Story = {
  args: {
    variant: 'segment',
  },
  render: (props) => {
    return (
      <ButtonGroup {...props}>
        <Button size="xl" variant="outlined">
          버튼 라벨
        </Button>
        <Button size="xl" variant="outlined">
          버튼 라벨
        </Button>
        <Button size="xl" variant="outlined">
          버튼 라벨
        </Button>
        <Button size="xl" variant="outlined">
          버튼 라벨
        </Button>
      </ButtonGroup>
    );
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
  render: (props) => {
    return (
      <ButtonGroup {...props}>
        <Button buttonType="secondary" size="xl" variant="text">
          버튼 라벨
        </Button>
        <Button buttonType="secondary" size="xl" variant="text">
          버튼 라벨
        </Button>
        <Button buttonType="secondary" size="xl" variant="text">
          버튼 라벨
        </Button>
      </ButtonGroup>
    );
  },
};

export const TextMultiple: Story = {
  args: {
    variant: 'text',
  },
  render: (props) => {
    return (
      <ButtonGroup {...props}>
        <Button buttonType="primary" size="sm" variant="text">
          버튼 라벨
        </Button>
        <Button buttonType="primary" size="sm" variant="text">
          버튼 라벨
        </Button>
        <Button buttonType="primary" size="sm" variant="text">
          버튼 라벨
        </Button>
        <Button buttonType="primary" size="sm" variant="text">
          버튼 라벨
        </Button>
      </ButtonGroup>
    );
  },
};

export const Custom: Story = {
  args: {
    variant: 'text',
    // GYU-TODO: [&_div] alias 설정 또는 a11y 적용 또는 가독성 좋게 하기
    className: '[&_div]:h-20 [&_div]:text-[32px]',
  },
  render: TextMultiple.render,
};
