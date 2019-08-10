import React, { useEffect, useState } from "react";
import apiService from "../../core/service/api-sevice";
import { QuestData } from "../../core/types/text";

import Questionary, { OnChangeText } from "./Questionary";

interface PayloadText {
  position: number;
  variantId: number;
}

function MainContainer() {
  const [data, setData] = useState<QuestData>(null);

  useEffect(() => {
    apiService
      .get("/api/questionary")
      .then(questionary => setData(questionary));
  }, [setData]);

  const onSave = async () => {
    await apiService.post("/api/questionary", data);
  };

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

  return (
    <Questionary data={data} onChangeText={onChangeTest} onSave={onSave} />
  );
}

export default React.memo(MainContainer);
