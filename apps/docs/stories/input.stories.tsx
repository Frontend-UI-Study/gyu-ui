import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@repo/ui/components";

const meta: Meta<typeof Input> = {
  title: "test/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
