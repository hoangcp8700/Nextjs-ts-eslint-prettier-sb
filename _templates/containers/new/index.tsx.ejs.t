---
to: src/containers/<%= h.toPascalCase(name) %>/index.tsx
---
import React from "react";

import Text from "@/components/atoms/Text";
import SEO from "@/components/templates/SEO";

// import styles from "./<%= h.toCamelCase(name) %>.module.css";

export interface <%= h.toPascalCase(name) %>ContainerProps {}

const <%= h.toPascalCase(name) %>Container: React.FC<<%= h.toPascalCase(name) %>ContainerProps> = () => (
  <div>
    <SEO
      seoData={{
        title: "<%= h.toPascalCase(name) %> Page",
        description: "<%= h.toPascalCase(name) %> page Lorem",
        keyword: "<%= h.toPascalCase(name) %> <%= h.toPascalCase(name) %> <%= h.toPascalCase(name) %>",
      }}
      ogData={{
        ogTitle: "<%= h.toPascalCase(name) %> Page",
        ogDescription: "<%= h.toPascalCase(name) %> page Lorem",
        ogUrl: "https://google.com",
        ogImage: "https://source.unsplash.com/random",
      }}
    />
    <Text>Container <%= h.toPascalCase(name) %></Text>
  </div>
);

export default <%= h.toPascalCase(name) %>Container;
