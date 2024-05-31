import { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@repo/ui/components';

const meta: Meta<typeof Input> = {
  title: 'DS/Input',
  component: Input,
  argTypes: {},
  render: (props) => {
    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const onReset = () => {
      setValue('');
    };

    return <Input {...props} onChange={onChange} onReset={onReset} value={value} />;
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithClear: Story = {
  args: {
    withClear: true,
  },
};

export const WithSearch: Story = {
  args: {
    withSearch: true,
  },
};

export const WithFullIcon: Story = {
  args: {
    withSearch: true,
    withClear: true,
  },
};

export const error: Story = {
  args: {
    error: true,
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
  },
};

//

export const variants: Story = {
  args: {
    variant: 'underline',
  },
};

export const password: Story = {
  args: {
    type: 'password',
  },
};

export const withRef: Story = {
  render: (props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onReset = () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    };

    return <Input {...props} onReset={onReset} ref={inputRef} />;
  },
};
