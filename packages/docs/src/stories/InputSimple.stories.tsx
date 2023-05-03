import type { Meta, StoryObj } from "@storybook/react";
import { Box, InputSimple, InputSimpleProps, Text } from "@juancarllos-ui/react";
import { Calendar } from "phosphor-react";  

export default {
  title: "Form/InputSimple",
  component: InputSimple,
  args: {
    size: "md",
    disabled: false,
  },
  argTypes: {
    size: {
      options: ["sm", "md"],
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<InputSimpleProps>;

export const Primary: StoryObj<InputSimpleProps> = {};


export const WithIcon: StoryObj<InputSimpleProps> = {
  args: {
    children: (
      <>
        <Calendar weight="bold"/>
      </>
    ),
  },
};

export const Small: StoryObj<InputSimpleProps> = {
  args: {
    size: "sm",
  },
};


export const Disabled: StoryObj<InputSimpleProps> = {
  args: {
    disabled: true,
  },
};
