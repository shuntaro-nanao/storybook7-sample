import MyLogin from "./index.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof MyLogin>;

const meta: Meta<typeof MyLogin> = {
  title: "MyLogin",
  component: MyLogin,
};

export const Default: Story = {
  render: () => ({
    components: { MyLogin },
    template: "<MyLogin label='ボタン' />",
  }),
};

export default meta;