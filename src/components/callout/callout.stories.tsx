import type { Meta, StoryObj } from "@storybook/react-vite";
import { Callout } from "./callout";

const meta = {
  title: "Components/Callout",
  component: Callout,
  args: {
    title: "Callout Card",
    children:
      "Id ea nulla occaecat duis sint. Incididunt Lorem cillum commodo proident minim do commodo quis occaecat culpa est. Nostrud consequat ad laboris irure ea et proident cillum duis cupidatat et duis. Magna sunt velit magna exercitation esse elit id aute veniam. Qui ea eu ullamco cupidatat.",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "information", "success", "danger", "warning"],
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof Callout>;

export const Primary: Story = {};
export const Information: Story = {
  args: {
    variant: "information",
  },
};
export const Danger: Story = {
  args: {
    variant: "danger",
  },
};
export const Warning: Story = {
  args: {
    variant: "warning",
  },
};
export const Success: Story = {
  args: {
    variant: "success",
  },
};
