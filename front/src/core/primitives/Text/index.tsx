import React from "react";
import { TextWrapper, TextWrapperProps } from "./styled";

interface TextProps extends TextWrapperProps {
  tag?: string;
  children?: React.ReactNode;
}

function Text({ children, tag, ...rest }: TextProps) {
  return (
    <TextWrapper as={tag || "span"} {...rest}>
      {children}
    </TextWrapper>
  );
}

export default React.memo(Text);
