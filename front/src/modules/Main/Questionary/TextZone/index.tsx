import React from "react";
import Text from "../../../../core/primitives/Text";
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
              <DropZone key={position} onDragOver={event => console.log(event)}>
                <Text
                  lineHeight="12px"
                  fontSize="11px"
                  color="#001926"
                  opacity={0.5}
                >
                  something that takes up a lot of time
                </Text>
              </DropZone>
            )
          )}
      </p>
    </TextZoneWrapper>
  );
}

export default React.memo(TextZone);
