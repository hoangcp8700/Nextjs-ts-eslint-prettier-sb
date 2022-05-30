import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Button from ".";

export default {
  title: "Components/atoms/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Component Storybook Button",
  // variants: "primary",
};
