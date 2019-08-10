import React from "react";

import { OnDrop } from "../index";

import { TextItemWrapper, TextZoneWrapper } from "./styled";

import { TextItem } from "../../../../core/types/text";

import DropZone from "./dropZone";

interface TextZoneProps {
  text: TextItem[];
  onDrop: OnDrop;
}

function TextZone({ text, onDrop }: TextZoneProps) {
  const renderText = text.map(({ position, value, variant, type }) => {
    if (type === "text") {
      return (
        <TextItemWrapper key={position} id={position}>
          {value}
        </TextItemWrapper>
      );
    }

    return (
      <DropZone
        key={position}
        value={variant}
        onDrop={onDrop}
        position={position}
      />
    );
  });

  return <TextZoneWrapper>{renderText}</TextZoneWrapper>;
}

export default React.memo(TextZone);
