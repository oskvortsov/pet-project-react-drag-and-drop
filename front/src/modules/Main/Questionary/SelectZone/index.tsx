import React from "react";

import { SelectZoneItemWrapper, SelectZoneWrapper } from "./styled";

import { TextItem } from "../../../../core/types/text";

interface SelectZoneProps {
  text: TextItem[];
}

function SelectZone({ text }: SelectZoneProps) {
  return (
    <SelectZoneWrapper>
      {text &&
        text.map(({ position }) => (
          <SelectZoneItemWrapper key={position}>asdasd</SelectZoneItemWrapper>
        ))}
    </SelectZoneWrapper>
  );
}

export default React.memo(SelectZone);
