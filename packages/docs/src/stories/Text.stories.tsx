import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quaerat aspernatur totam architecto minima deleniti natus tempora, labore provident maxime officiis tempore possimus perspiciatis itaque saepe illum id, voluptatibus adipisci.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};


export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
};
