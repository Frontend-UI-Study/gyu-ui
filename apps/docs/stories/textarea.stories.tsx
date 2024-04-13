import type { ChangeEvent } from 'react';
import { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@repo/ui/components';

const meta: Meta<typeof Textarea> = {
  title: 'test/Textarea',
  component: Textarea,
  argTypes: {},
  render: (props) => {
    const [text, setText] = useState('');

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
    };

    return <Textarea {...props} onChange={onChange} value={text} />;
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const withMaxLength: Story = {
  args: {
    // withCounter: true,
    maxLength: 20,
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: 'helper text',
  },
};

export const WithBottomFull: Story = {
  args: {
    helperText: 'helper text',
    maxLength: 20,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const MaxLength: Story = {
  args: {
    maxLength: 20,
  },
};

export const withRef: Story = {
  args: {
    // maxLength 는 제어 컴포넌트만 제공, 왜냐하면 비제어는 실시간으로 글자수를 체크할 수 없기 때문에!
    // maxLength: 20,
  },
  render: (props) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const onClick = () => {
      if (textareaRef.current === null) return;

      // actions
      console.log('textareaRef value: ', textareaRef.current.value);
    };
    return (
      <>
        <Textarea {...props} ref={textareaRef} />
        <button onClick={onClick}>Action Button</button>
      </>
    );
  },
};

export const Custom: Story = {
  args: {
    maxLength: 20,
    rows: 15,
  },
};
