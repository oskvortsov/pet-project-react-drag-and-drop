import React from "react";
import { useDrag } from "react-dnd";

import { VariantsItemWrapper } from "./styled";

interface VariantsItemProps {
  id: number;
  title: string;
}

function VariantsItem({ id, title }: VariantsItemProps) {
  const [{ isDragging }, drag] = useDrag({
    item: { id, type: "variant" },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <VariantsItemWrapper ref={drag} isDragging={isDragging}>
      {title}
    </VariantsItemWrapper>
  );
}

export default React.memo(VariantsItem);
