import React from "react";

import { BadgeWrapper, BadgeWrapperProps } from "./styled";

interface BadgeProps extends BadgeWrapperProps {
  children?: React.ReactNode;
}

function Badge({ children, ...rest }: BadgeProps) {
  return <BadgeWrapper {...rest}>{children}</BadgeWrapper>;
}

export default React.memo(Badge);
