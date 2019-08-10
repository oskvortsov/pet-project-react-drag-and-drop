import { readFileSync, writeFileSync } from "fs";
import path from "path";

import { Questionary, Response, Text } from "./types";

const questionaryPath = path.resolve("src/database/questionary.json");
const responsePath = path.resolve("src/database/responses.json");

const dropZoneLabel = "{$$$insetDropZone$$$}";

export async function getQuestionary(): Promise<Questionary> {
  try {
    const dataFile = await readFileSync(questionaryPath, "utf8");
    const responsesFile = await readFileSync(responsePath, "utf8");

    const data: Text = JSON.parse(dataFile);
    const responses: Response[] = JSON.parse(responsesFile);

    const responsesIds = responses.map(item => item.id);

    const text = data.text.split(/( )/g).reduce((acc, word) => {
      const item = {
        position: acc.length,
        type: word === dropZoneLabel ? "drop" : "text",
        value: word === dropZoneLabel ? null : word
      };

      const findResponse = responses.find(
        response => response.position === item.position
      );

      if (findResponse) {
        item["variant"] = data.variants.find(
          variant => variant.id === findResponse.id
        );
      }

      acc.push(item);

      return acc;
    }, []);

    const variants = data.variants.filter(
      variant => !responsesIds.includes(variant.id)
    );

    return {
      text,
      variants
    };
  } catch (e) {
    throw e;
  }
}

export async function setQuestionary(data: Questionary): Promise<any> {
  try {
    const responses = [];

    data.text.forEach(item => {
      if (item.type === "drop" && item.variant) {
        responses.push({
          id: item.variant.id,
          position: item.position
        });
      }
    });

    return writeFileSync(responsePath, JSON.stringify(responses));
  } catch (e) {
    throw e;
  }
}
