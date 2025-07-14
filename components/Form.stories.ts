import type { Meta, StoryObj } from "@storybook/nextjs";
import Form from "./Form";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Form",
  component: Form,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // Add any props here if the component accepts them
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const ColorVariants: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Form demonstrating different TextField color variants: secondary, success, and warning.",
      },
    },
  },
};

export const FieldVariants: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Form showcasing different TextField variants: outlined, filled, and standard.",
      },
    },
  },
};

export const FocusedFields: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "All form fields are focused by default to demonstrate the different color states and variants.",
      },
    },
  },
};
