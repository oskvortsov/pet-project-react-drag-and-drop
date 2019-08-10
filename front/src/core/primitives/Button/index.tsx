import React, { ReactNode } from "react";

import { ButtonWrapper, ButtonWrapperProps } from "./styled";

interface ButtonProps extends ButtonWrapperProps {
  type?: string;
  children?: ReactNode;
  onClick?: (value: any) => any;
}

function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
}

export default React.memo(Button);
