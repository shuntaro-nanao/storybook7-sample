import MyLogin from "./index.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { within, userEvent } from '@storybook/testing-library';

type Story = StoryObj<typeof MyLogin>;

const meta: Meta<typeof MyLogin> = {
  title: "MyLogin",
  component: MyLogin,
};

export const Default: Story = {
  render: () => ({
    components: { MyLogin },
    template: "<MyLogin label='ログイン' />",
  }),
};

export default meta;

export const Test = {
  args: {
    label: 'ログイン'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('email'), 'michael@chromatic.com');
    await userEvent.type(canvas.getByTestId('password'), 'k32904n£#1kjad');
    await userEvent.click(canvas.getByTestId('submit'));
  },
};