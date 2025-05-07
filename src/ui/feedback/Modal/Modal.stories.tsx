import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Modal } from "./Modal";
import { useArgs } from "@storybook/client-api";

const meta = {
  title: "UI/Feedback/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: { control: "boolean", defaultValue: false },
    title: { control: "text", defaultValue: "Modal Title" },
  },
  args: { onClose: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: "Modal Title",
    isOpen: false,
    onClose: fn(),
    children: <p>This is a modal content.</p>,
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ isOpen: !isOpen });
    }

    return (
      <>
        <button onClick={onChange}>Open Modal</button>
        <Modal {...args} onClose={onChange} />
      </>
    );
  },
};
