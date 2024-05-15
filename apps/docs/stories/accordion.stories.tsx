import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@repo/ui/components';

const meta: Meta<typeof Accordion> = {
  title: 'DS/Accordion',
  component: Accordion,
  args: {
    // type: 'single',
    size: 'sm',
    collapsible: true,
    divider: true,
    items: [
      {
        value: 'value1',
        title: 'Trigger 1',
        content: 'Content 1',
        description: 'Description 1',
      },
      {
        value: 'value2',
        title: 'Trigger 2',
        content: 'Content 2',
        description: 'Description 2',
      },
      {
        value: 'value3',
        title: 'Trigger 3',
        content: 'Content 3',
        description: 'Description 3',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};

export const Type: Story = {
  args: {
    type: 'multiple',
  },
};

export const Size: Story = {
  args: {
    size: 'sm',
  },
};

export const Divider: Story = {
  args: {
    divider: false,
  },
};

export const Ellipsis: Story = {
  args: {
    type: 'single',
    collapsible: true,
    items: [
      {
        value: 'value1',
        title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum quam ea fuga, asperiores dolorum quibusdam fugiat pariatur, id et quisquam dicta praesentium reprehenderit distinctio possimus nam similique, fugit expedita.',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum quam ea fuga, asperiores dolorum quibusdam fugiat pariatur, id et quisquam dicta praesentium reprehenderit distinctio possimus nam similique, fugit expedita.',
      },
    ],
  },
};

export const Example: Story = {
  args: {
    type: 'single',
    collapsible: true,
    items: [
      {
        value: 'value1',
        title: 'Is it accessible?',
        content: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        value: 'value2',
        title: 'Is it styled?',
        content: "Yes. It comes with default styles that matches the other components' aesthetic.",
      },
      {
        value: 'value3',
        title: 'Is it animated?',
        content: "Yes. It's animated by default, but you can disable it if you prefer.",
      },
    ],
  },
};
