import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { useArgs } from "@storybook/client-api";
import { TextField } from "./TextField";
import { ChangeEvent } from "react";
import { BiUser } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { MdDateRange, MdEmail } from "react-icons/md";

const meta = {
  title: "Components/Organisms/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    placeholder: "Write here the text",
    error: "",
    value: "",
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: e.target.value });
    }

    return <TextField {...args} onChange={onChange} />;
  },
};

export const Label: Story = {
  args: {
    label: "Label:",
    placeholder: "Write here the text",
    error: "",
    value: "",
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: e.target.value });
    }

    return <TextField {...args} onChange={onChange} />;
  },
};

export const Icon: Story = {
  args: {
    label: "Username:",
    placeholder: "Type your username",
    icon: <BiUser />,
    iconPosition: "left",
    error: "",
    value: "",
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: e.target.value });
    }

    return <TextField {...args} onChange={onChange} />;
  },
};

export const Password: Story = {
  args: {
    label: "Password:",
    placeholder: "Type your password",
    type: "password",
    iconPosition: "right",
    error: "",
    value: "",
  },
  render: function Render(args) {
    const [{ type }, updateArgs] = useArgs();

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: e.target.value });
    }

    function handleOpenEyes() {
      const newType = type === "password" ? "text" : "password";
      updateArgs({ type: newType });
    }

    return (
      <TextField
        {...args}
        onChange={onChange}
        onClickIcon={handleOpenEyes}
        icon={type === "text" ? <BsEye /> : <BsEyeSlash />}
      />
    );
  },
};

export const Error: Story = {
  args: {
    label: "Email:",
    placeholder: "Type your password",
    type: "email",
    icon: <MdEmail />,
    iconPosition: "left",
    error: "Email is not valid",
    value: "",
  },
  render: function Render(args) {
    const [{ value, error }, updateArgs] = useArgs();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: e.target.value });
    }

    return (
      <TextField
        {...args}
        onChange={onChange}
        error={!isValid ? error : undefined}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Bithday:",
    placeholder: "MM/DD/YYYY",
    type: "email",
    icon: <MdDateRange />,
    iconPosition: "left",
    disabled: true,
    value: "",
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: e.target.value });
    }

    return <TextField {...args} onChange={onChange} />;
  },
};
