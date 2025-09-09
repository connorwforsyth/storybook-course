import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    disabled: false,
    size: "medium",
  },
  argTypes: {
    disabled: { control: "boolean" },
    variant: { control: "select" },
    size: { control: "select" },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Destructive" },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: "dark",
    },
  },
};

export const Mobile: Story = {
  globals: {
    viewport: {
      value: "mobile1",
    },
  },
};
