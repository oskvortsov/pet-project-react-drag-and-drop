import React from "react";

import { Badge, Text, Button } from "../../../core/primitives";

import { ButtonsGroups, QuestionaryWrapper, TitleWrapper } from "./styled";

import { QuestData } from "../../../core/types/text";

import TextQuest from "./Text";
import Variants from "./Variants";

export type OnDrop = (data: OnChangeText) => void;

export interface OnChangeText {
  action: "insert" | "remove";
  payload: {
    position: number;
    variantId: number;
  };
}

interface QuestionaryProps {
  data: QuestData;
  onChangeText: (data: OnChangeText) => void;
}

function Questionary({ data, onChangeText }: QuestionaryProps) {
  if (!data) {
    return null;
  }

  const { text, variants } = data;

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
      <TextQuest text={text} onDrop={onChangeText} />
      <Variants list={variants} />
      <ButtonsGroups>
        <Button width="32px" dots />
        <Button>Next</Button>
      </ButtonsGroups>
    </QuestionaryWrapper>
  );
}

export default React.memo(Questionary);
