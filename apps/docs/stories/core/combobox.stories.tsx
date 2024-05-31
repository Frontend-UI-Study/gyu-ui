import type { Meta, StoryObj } from '@storybook/react';
import { CoreCombobox } from '@repo/ui/components';
import { useState } from 'react';

const meta: Meta<typeof CoreCombobox> = {
  component: CoreCombobox,
  title: 'core/Combobox',
  args: {},
};
export default meta;

type Story = StoryObj<typeof CoreCombobox>;

export const Default: Story = {
  args: {},
  render: (props) => {
    const options = ['apple', 'banana', 'cherry'];

    return (
      <CoreCombobox value="" onValueChange={() => {}}>
        <CoreCombobox.Trigger />
        <CoreCombobox.List>
          {options.map((option) => {
            return (
              <CoreCombobox.Item key={option} value={option}>
                {option}
              </CoreCombobox.Item>
            );
          })}
        </CoreCombobox.List>
      </CoreCombobox>
    );
  },
};

export const Multiple: Story = {
  args: {},
  render: (props) => {
    const options = ['apple', 'banana', 'cherry'];
    const options2 = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'];

    return (
      <div>
        <CoreCombobox value="" onValueChange={() => {}}>
          <CoreCombobox.Trigger />
          <CoreCombobox.List>
            {options.map((option) => {
              return (
                <CoreCombobox.Item key={option} value={option}>
                  {option}
                </CoreCombobox.Item>
              );
            })}
          </CoreCombobox.List>
        </CoreCombobox>

        <CoreCombobox value="" onValueChange={() => {}}>
          <CoreCombobox.Trigger />
          <CoreCombobox.List>
            {options2.map((option) => {
              return (
                <CoreCombobox.Item key={option} value={option}>
                  {option}
                </CoreCombobox.Item>
              );
            })}
          </CoreCombobox.List>
        </CoreCombobox>
      </div>
    );
  },
};

export const Example: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState('');
    const onChange = (newValue: string) => {
      setValue(newValue);
    };

    const options = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'];
    return (
      <>
        <CoreCombobox value={value} onValueChange={onChange}>
          <CoreCombobox.Trigger />
          <CoreCombobox.List>
            {options.map((option) => {
              return (
                <CoreCombobox.Item key={option} value={option}>
                  {option}
                </CoreCombobox.Item>
              );
            })}
          </CoreCombobox.List>
        </CoreCombobox>
        <div>Selected value: {value}</div>
      </>
    );
  },
};
