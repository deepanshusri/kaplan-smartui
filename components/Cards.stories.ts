import type { Meta, StoryObj } from "@storybook/nextjs";
import ActionAreaCard from "./Cards";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Cards",
  component: ActionAreaCard,
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
} satisfies Meta<typeof ActionAreaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const ActionCard: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "A Material-UI card with action area containing an image, title, and description. The entire card is clickable.",
      },
    },
  },
};

export const LizardCard: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Example card featuring a lizard image with educational content about lizards.",
      },
    },
  },
};
