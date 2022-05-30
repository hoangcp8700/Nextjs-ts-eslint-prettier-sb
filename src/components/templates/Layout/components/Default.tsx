import React from "react";

interface LayoutDefaultProps {
  children?: React.ReactNode;
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ children }) => (
  <>
    <h1>Header default</h1>
    <main>{children}</main>
    <h1>Footer</h1>
  </>
);

export default LayoutDefault;
