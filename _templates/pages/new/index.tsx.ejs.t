---
to: src/pages/<%= h.toCamelCase(name) %>.tsx
---
import { NextPageWithLayout } from "@/types/page";
import <%= h.toPascalCase(name) %>Container from "@/containers/<%= h.toPascalCase(name) %>";

interface <%= h.toPascalCase(name) %>PageProps {}

const <%= h.toPascalCase(name) %>Page: NextPageWithLayout<<%= h.toPascalCase(name) %>PageProps> = () => <<%= h.toPascalCase(name) %>Container />;

export default <%= h.toPascalCase(name) %>Page;

// <%= h.toPascalCase(name) %>Page.layout = Layout.Primary;