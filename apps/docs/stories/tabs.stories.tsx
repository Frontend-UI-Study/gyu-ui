import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@repo/ui/components';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'DS/Tabs',
  args: {
    // variants: 'tertiary',
  },
  argTypes: {
    variants: {
      control: {
        type: 'select',
        options: ['main', 'secondary', 'tertiary'],
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (props) => {
    return (
      <Tabs {...props}>
        <Tabs.List>
          <Tabs.Trigger value="value1">탭 라벨</Tabs.Trigger>
          <Tabs.Trigger value="value2">탭 라벨</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="value1">Value1</Tabs.Content>
        <Tabs.Content value="value2">Value2</Tabs.Content>
      </Tabs>
    );
  },
};

export const Variants: Story = {
  render: (props) => {
    return (
      <Tabs {...props} variants="secondary">
        <Tabs.List>
          <Tabs.Trigger value="value1">칩 텍스트</Tabs.Trigger>
          <Tabs.Trigger value="value2">칩 텍스트</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="value1">Value1</Tabs.Content>
        <Tabs.Content value="value2">Value2</Tabs.Content>
      </Tabs>
    );
  },
};

export const Flexible: Story = {
  args: {
    flexible: true,
  },
  render: (props) => {
    const tabMenus = Array.from({ length: 10 }, (_, i) => i + 1);
    return (
      <Tabs {...props}>
        <Tabs.List>
          {tabMenus.map((menu) => (
            <Tabs.Trigger key={menu} value={`value-${menu}`}>
              {`탭-${menu}`}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabMenus.map((menu, index) => (
          <Tabs.Content key={index} value={`value-${menu}`}>
            {`value-${menu}`}
          </Tabs.Content>
        ))}
      </Tabs>
    );
  },
};

export const Fixed: Story = {
  args: {
    fixed: true,
  },
  render: (props) => {
    return (
      <Tabs {...props}>
        <Tabs.List>
          <Tabs.Trigger value="value1">탭 라벨</Tabs.Trigger>
          <Tabs.Trigger value="value2">탭 라벨</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="value1">Value1</Tabs.Content>
        <Tabs.Content value="value2">Value2</Tabs.Content>
      </Tabs>
    );
  },
};

export const MultipleFixed: Story = {
  args: {
    fixed: true,
  },
  render: (props) => {
    const tabMenus = Array.from({ length: 4 }, (_, i) => i + 1);
    return (
      <Tabs {...props}>
        <Tabs.List>
          {tabMenus.map((menu) => (
            <Tabs.Trigger key={menu} value={`value-${menu}`}>
              {`탭-${menu}`}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabMenus.map((menu, index) => (
          <Tabs.Content key={index} value={`value-${menu}`}>
            {`value-${menu}`}
          </Tabs.Content>
        ))}
      </Tabs>
    );
  },
};

//

export const VariantsZip: Story = {
  args: {
    // value: 'value1',
  },
  render: (props) => {
    const [value, setValue] = useState('value1');
    const onValueChange = (value: string) => {
      setValue(value);
    };

    return (
      <div className="flex flex-col gap-4">
        <Tabs variants="main" {...props} onValueChange={onValueChange} value={value}>
          <Tabs.List>
            <Tabs.Trigger value="value1">탭 라벨</Tabs.Trigger>
            <Tabs.Trigger value="value2">탭 라벨</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="value1">Value1</Tabs.Content>
          <Tabs.Content value="value2">Value2</Tabs.Content>
        </Tabs>
        <Tabs variants="secondary" {...props} onValueChange={onValueChange} value={value}>
          <Tabs.List>
            <Tabs.Trigger value="value1">탭 라벨</Tabs.Trigger>
            <Tabs.Trigger value="value2">탭 라벨</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="value1">Value1</Tabs.Content>
          <Tabs.Content value="value2">Value2</Tabs.Content>
        </Tabs>
        <Tabs variants="tertiary" {...props} onValueChange={onValueChange} value={value}>
          <Tabs.List>
            <Tabs.Trigger value="value1">탭 라벨</Tabs.Trigger>
            <Tabs.Trigger value="value2">탭 라벨</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="value1">Value1</Tabs.Content>
          <Tabs.Content value="value2">Value2</Tabs.Content>
        </Tabs>
      </div>
    );
  },
};
