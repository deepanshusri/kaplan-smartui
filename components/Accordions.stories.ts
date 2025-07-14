import type { Meta, StoryObj } from "@storybook/nextjs";
import Accordions from "./Accordions";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Accordions",
  component: Accordions,
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
} satisfies Meta<typeof Accordions>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const BasicAccordions: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Basic accordion component with multiple panels, including one with actions.",
      },
    },
  },
};
