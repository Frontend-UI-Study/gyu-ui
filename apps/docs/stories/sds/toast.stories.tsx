import type { Meta, StoryObj } from '@storybook/react';
import { Toaster, useToast } from '@repo/ui/components';

const meta: Meta<typeof Toaster> = {
  title: 'DS/Toaster',
  component: Toaster,
  args: {},
};
export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: (props) => {
    const { toast } = useToast();

    return (
      <>
        <button
          onClick={() => {
            toast({
              title: '공백 포함 18자 / text width : 272px',
            });
          }}
        >
          Click
        </button>
        <Toaster />
      </>
    );
  },
};
