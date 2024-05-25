import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@repo/ui/components';
import { useState } from 'react';

const options = Array.from({ length: 10 }).map((_, index) => index + 1);

const meta: Meta<typeof Dropdown> = {
  title: 'DS/Dropdown',
  component: Dropdown,
  args: {
    placeholder: 'Placeholder',
    items: options.slice(0, 3).map((value) => ({ value: `value ${value}`, option: `option ${value}` })),
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {},
};

export const ContentMaxHeightOver: Story = {
  args: {
    items: options.map((value) => ({ value: `value ${value}`, option: `option ${value}` })),
    hasScroll: true,
  },
};

export const MultipleDropdown: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const items = [
      { value: 'apple', option: 'Apple' },
      { value: 'banana', option: 'Banana' },
      { value: 'blueberry', option: 'Blueberry' },
      { value: 'grapes', option: 'Grapes' },
      { value: 'pineapple', option: 'Pineapple' },
    ];

    return (
      <>
        <Dropdown items={items} onValueChange={setValue} placeholder="Select a fruit" value={value} />
        {value ? <div>select value: {value} </div> : null}

        <Dropdown
          items={options.slice(0, 3).map((value) => ({ value: `value ${value}`, option: `option ${value}` }))}
          placeholder="Select Value"
        />
      </>
    );
  },
};

export const Example: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const items = [
      { value: 'apple', option: 'Apple' },
      { value: 'banana', option: 'Banana' },
      { value: 'blueberry', option: 'Blueberry' },
      { value: 'grapes', option: 'Grapes' },
      { value: 'pineapple', option: 'Pineapple' },
    ];

    return (
      <>
        <Dropdown items={items} onValueChange={setValue} placeholder="Select a fruit" value={value} />
        {value ? <div>select value: {value} </div> : null}
      </>
    );
  },
};
