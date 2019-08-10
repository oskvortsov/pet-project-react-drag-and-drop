import React from "react";

import { LayoutWrapper } from "./styled";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default React.memo(Layout);
