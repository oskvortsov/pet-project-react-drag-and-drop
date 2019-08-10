import React from "react";
import { useDrag, useDrop } from "react-dnd";

import Text from "../../../../core/primitives/Text";
import { Variant } from "../../../../core/types/text";
import { OnDrop } from "../index";

import { DragZoneWrapper, DropZoneWrapper } from "./styled";

interface ItemDrop {
  type: "variant";
  id: number;
}

interface DropZoneProps {
  position: number;
  value: Variant;
  onDrop: OnDrop;
}

function DropZone({ value, position, onDrop }: DropZoneProps) {
  const onInsert = (id: number) =>
    onDrop({
      action: "insert",
      payload: {
        position,
        variantId: id
      }
    });

  const onRemove = () =>
    onDrop({
      action: "remove",
      payload: {
        position,
        variantId: value.id
      }
    });

  const [{ isOver }, drop] = useDrop({
    accept: "variant",
    drop: ({ id }: ItemDrop) => onInsert(id),
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: "returnVariant" },
    end: () => onRemove(),
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  if (value) {
    return (
      <DragZoneWrapper ref={drag} isDragging={isDragging}>
        <Text lineHeight="12px" fontSize="24px">
          {(value && value.title) || " "}
        </Text>
      </DragZoneWrapper>
    );
  }

  return (
    <DropZoneWrapper ref={drop} isOver={isOver} isFill={value}>
      <Text lineHeight="12px" fontSize="11px" color="#001926" opacity={0.5}>
        {(value && value.title) || "something that takes up a lot of time"}
      </Text>
    </DropZoneWrapper>
  );
}

export default React.memo(DropZone);
