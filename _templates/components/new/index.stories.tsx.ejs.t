---
to: src/components/<%= level %>/<%= h.toPascalCase(name) %>/index.stories.tsx
---
import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import <%= h.toPascalCase(name) %> from ".";

export default {
  title: "Components/<%= level %>/<%= h.toPascalCase(name) %>",
  component: <%= h.toPascalCase(name) %>,
  argTypes: {},
} as ComponentMeta<typeof <%= h.toPascalCase(name) %>>;

const Template: ComponentStory<typeof <%= h.toPascalCase(name) %>> = (args) => <<%= h.toPascalCase(name) %> {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Component Storybook <%= h.toPascalCase(name) %>",
  // variants: "primary",
};