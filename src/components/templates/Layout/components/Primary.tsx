import React from "react";

interface LayoutPriamryProps {
  children?: React.ReactNode;
}

const LayoutPriamry: React.FC<LayoutPriamryProps> = ({ children }) => (
  <>
    <h1>Header primary</h1>
    <main>{children}</main>
    <h1>Footer</h1>
  </>
);

export default LayoutPriamry;
