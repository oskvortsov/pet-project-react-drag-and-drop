import React from "react";
import { TextItem } from "../../../../core/types/text";

import { DropZone, TextItemWrapper, TextZoneWrapper } from "./styled";

interface TextZoneProps {
  text: TextItem[];
}

function TextZone({ text }: TextZoneProps) {
  return (
    <TextZoneWrapper>
      <p>
        {text &&
          text.map(({ position, value, type }) =>
            type === "text" ? (
              <TextItemWrapper key={position}>{value}</TextItemWrapper>
            ) : (
              <DropZone />
            )
          )}
      </p>
    </TextZoneWrapper>
  );
}

export default React.memo(TextZone);
