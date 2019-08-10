import React, { useState } from "react";

import { TextItem, Variant } from "../../core/types/text";

import Questionary, { OnChangeText } from "./Questionary";

// interface QuestionaryContainerProps {}

export const text: TextItem[] = [
  { position: 1, type: "text", value: "Keeping" },
  { position: 2, type: "text", value: " " },
  { position: 3, type: "text", value: "a" },
  { position: 4, type: "text", value: " " },
  { position: 5, type: "text", value: "pet" },
  { position: 6, type: "text", value: " " },
  { position: 7, type: "text", value: "can" },
  { position: 8, type: "text", value: " " },
  { position: 9, type: "text", value: "be" },
  { position: 10, type: "text", value: " " },
  { position: 11, type: "drop", value: "" },
  { position: 12, type: "text", value: " " },
  { position: 13, type: "text", value: "but" },
  { position: 14, type: "text", value: " " },
  { position: 15, type: "text", value: "it" },
  { position: 16, type: "text", value: " " },
  { position: 17, type: "text", value: "can" },
  { position: 18, type: "text", value: " " },
  { position: 19, type: "text", value: "also" },
  { position: 20, type: "text", value: " " },
  { position: 21, type: "text", value: "be" },
  { position: 22, type: "text", value: " " },
  { position: 23, type: "drop", value: "" }
];

const variants: Variant[] = [
  { id: 1, title: "weird" },
  { id: 2, title: "enthusiastic" },
  { id: 3, title: "time-consuming" },
  { id: 4, title: "rare" }
];

const mockData = {
  text,
  variants
};

interface PayloadText {
  position: number;
  variantId: number;
}

function MainContainer() {
  const [data, setData] = useState(mockData);

  const insert = ({ variantId, position }: PayloadText) => {
    const variant = data.variants.find(item => item.id === variantId);

    if (variant) {
      const text = data.text.map(item => {
        if (item.position === position) {
          item.variant = variant;
        }

        return item;
      });
      const variants = data.variants.filter(item => item.id !== variantId);

      const newData = {
        text,
        variants
      };

      setData(newData);
    }
  };

  const remove = ({ position }: PayloadText) => {
    const textItem = data.text.find(item => item.position === position);

    if (textItem && textItem.variant) {
      const variants = [...data.variants, textItem.variant];
      const text = data.text.map(item => {
        if (item.position === position) {
          item.value = textItem.value;
          item.variant = null;
        }

        return item;
      });

      const newData = {
        text,
        variants
      };

      setData(newData);
    }
  };

  const onChangeTest = ({ action, payload }: OnChangeText) => {
    switch (action) {
      case "insert":
        return insert(payload);
      case "remove":
        return remove(payload);
    }
  };

  return <Questionary data={data} onChangeText={onChangeTest} />;
}

export default React.memo(MainContainer);
