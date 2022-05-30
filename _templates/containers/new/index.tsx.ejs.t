---
to: src/containers/<%= h.toPascalCase(name) %>/index.tsx
---
import React from "react";
// import styles from "./<%= h.toCamelCase(name) %>.module.css";

export interface <%= h.toPascalCase(name) %>ContainerProps {}

const <%= h.toPascalCase(name) %>Container: React.FC<<%= h.toPascalCase(name) %>ContainerProps> = () => <div>Container <%= h.toPascalCase(name) %></div>;

export default <%= h.toPascalCase(name) %>Container;
