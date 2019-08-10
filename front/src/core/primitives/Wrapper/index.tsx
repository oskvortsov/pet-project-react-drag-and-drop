import React from "react";

import { WrapperStyle, WrapperStyleProps } from "./styled";

interface WrapperProps extends WrapperStyleProps {
  children?: any;
  ref?: any;
  style?: any;
}

function Wrapper({ children, ...rest }: WrapperProps, ref) {
  return (
    <WrapperStyle ref={ref} {...rest}>
      {children}
    </WrapperStyle>
  );
}

export default React.forwardRef(Wrapper);
