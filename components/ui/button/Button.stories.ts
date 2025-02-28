import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: "Components/Button",
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "The variant of the button",
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      description: "The size of the button",
      control: "select",
      options: ["default", "sm", "lg"],
    },
    as: {
      control: false,
    },
    class: {
      control: false,
    },
    asChild: {
      description:
        "If true, the button will render the child as a linkable button",
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: "Button",
    variant: "default",
    size: "default",
    asChild: false,
  },
};
