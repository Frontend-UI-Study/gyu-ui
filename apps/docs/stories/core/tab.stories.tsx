import type { Meta, StoryObj } from '@storybook/react';
import { Button, CoreTabs, Input } from '@repo/ui/components';

const meta: Meta<typeof CoreTabs> = {
  component: CoreTabs,
  title: 'core/Tabs',
  args: {},
};
export default meta;

type Story = StoryObj<typeof CoreTabs>;

//  https://ui.shadcn.com/docs/components/tabs 해당 사이트 UI 참고
export const Default: Story = {
  args: {
    defaultValue: 'account',
  },
  render: (props) => {
    return (
      <CoreTabs {...props}>
        <CoreTabs.TabList>
          <CoreTabs.TabTrigger value="account">Account</CoreTabs.TabTrigger>
          <CoreTabs.TabTrigger value="password">Password</CoreTabs.TabTrigger>
        </CoreTabs.TabList>

        <CoreTabs.TabContent value="account">
          <div className="p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Account</h3>
            <p className="text-sm text-gray-400">Make changes to your account here. Click save when you're done.</p>
          </div>
          <div className="space-y-2 p-6 pt-0">
            <div className="flex flex-col">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Name
              </label>
              <Input className="h-5" id="name" placeholder="Name" />
            </div>
            <div className="flex flex-col">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="user-name"
              >
                Username
              </label>
              <Input className="h-5" id="user-name" placeholder="UserName" />
            </div>
          </div>
          <div className="space-y-2 p-6 pt-0">
            <Button buttonType="secondary" size="lg">
              Save Changes
            </Button>
          </div>
        </CoreTabs.TabContent>

        <CoreTabs.TabContent value="password">
          <div className="p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Password</h3>
            <p className="text-sm text-gray-400">Change your password here. After saving, you'll be logged out.</p>
          </div>
          <div className="space-y-2 p-6 pt-0">
            <div className="flex flex-col">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Current password
                <Input className="h-5" type="password" />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                New password
                <Input className="h-5" type="password" />
              </label>
            </div>
          </div>
          <div className="space-y-2 p-6 pt-0">
            <Button buttonType="secondary" size="lg">
              Save Password
            </Button>
          </div>
        </CoreTabs.TabContent>
      </CoreTabs>
    );
  },
};
