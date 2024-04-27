import type { Meta, StoryObj } from '@storybook/react';
import { Card, Input, Button } from '@repo/ui/components';

const meta: Meta<typeof Card> = {
  title: 'DS/Card',
  component: Card,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Card>;
export const Default: Story = {
  render: () => {
    return (
      <Card>
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Description>Description</Card.Description>
        </Card.Header>
        <Card.Content>Content</Card.Content>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );
  },
};

export const Example: Story = {
  render: () => {
    return (
      <Card>
        <Card.Header>
          <Card.Title as="h2">Sign In</Card.Title>
          <Card.Description>Sign in and enjoy the service</Card.Description>
        </Card.Header>
        <Card.Content className="flex flex-col gap-2">
          <Input placeholder="ID" />
          <Input placeholder="Password" type="password" />
        </Card.Content>
        <Card.Footer>
          <Button size="xl" className="w-full justify-center text-xl">
            SIGN IN
          </Button>
        </Card.Footer>
      </Card>
    );
  },
};
