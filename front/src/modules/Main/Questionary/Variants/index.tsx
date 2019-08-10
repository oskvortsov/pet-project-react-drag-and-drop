import React from "react";

import { VariantsWrapper } from "./styled";

import { Variant } from "../../../../core/types/text";

import VariantsItem from "./item";

interface SelectZoneProps {
  list: Variant[];
}

function Variants({ list }: SelectZoneProps) {
  return (
    <VariantsWrapper>
      {list.map(({ id, title }) => (
        <VariantsItem key={id} id={id} title={title} />
      ))}
    </VariantsWrapper>
  );
}

export default React.memo(Variants);
