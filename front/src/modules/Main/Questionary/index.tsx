import React, { useEffect, useState } from "react";

import { Badge, Text, Button } from "../../../core/primitives";

import { ButtonsGroups, QuestionaryWrapper, TitleWrapper } from "./styled";

import { TextItem } from "../../../core/types/text";

import TextZone from "./TextZone";
import SelectZone from "./SelectZone";

interface QuestionaryProps {
  text: TextItem[];
}

function Questionary({ text }: QuestionaryProps) {
  const [selectList, setSelectList] = useState([]);

  useEffect(() => {
    setSelectList(text && text.filter(item => item.type === "drop"));
  }, [text, setSelectList]);

  return (
    <QuestionaryWrapper>
      <TitleWrapper>
        <Badge fontSize="12px" height="17px" padding="0 4px" marginRight="6px">
          1/5
        </Badge>
        <Text opacity={0.7} lineHeight={1.7}>
          Replace the phrases in the gaps with these adjectives.
        </Text>
      </TitleWrapper>
      <TextZone text={text} />
      <SelectZone text={selectList} />
      <ButtonsGroups>
        <Button width="32px" dots />
        <Button>Next</Button>
      </ButtonsGroups>
    </QuestionaryWrapper>
  );
}

export default React.memo(Questionary);
