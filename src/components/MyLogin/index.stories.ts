import MyLogin from "./index.vue";
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = { title: "MyLogin", component: MyLogin };
export default meta;

export const Default = {
  render: () => ({
    components: { MyLogin },
    template: "<MyLogin label='ログイン' />",
  }),
};

export const Test = {
  args: {
    label: 'ログイン'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('email'), 'michael@chromatic.com');
    await userEvent.type(canvas.getByTestId('password'), 'k32904n£#1kjad');
    await userEvent.click(canvas.getByTestId('submit'));
    await expect(canvas.getByText('ログイン成功')).toBeInTheDocument();
  },
};