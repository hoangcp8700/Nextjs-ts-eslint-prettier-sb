---
to: src/containers/<%= h.toPascalCase(name) %>/index.tsx
---
import type { NextPage } from "next";

import SEO from "@/components/templates/SEO";

// import styles from "./<%= h.toCamelCase(name) %>.module.css";

export interface <%= h.toPascalCase(name) %>ContainerProps {}

const <%= h.toPascalCase(name) %>Container: NextPage<<%= h.toPascalCase(name) %>ContainerProps> = () => (
  <div className="p-<%= name%>">
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
        // ogImage: "https://source.unsplash.com/random",
      }}
    />
    <p>Container <%= h.toPascalCase(name) %></p>
  </div>
);

export default <%= h.toPascalCase(name) %>Container;
