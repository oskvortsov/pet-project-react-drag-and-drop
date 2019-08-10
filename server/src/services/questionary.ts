import { readFileSync } from "fs";
import path from "path";

interface Text {
  text: string;
  variants: string[];
}

const questionaryPath = path.resolve("src/database/questionary.json");

interface Questionary {
  text: {
    position: number;
    type: "drop" | "text";
    value: string;
  }[];

  variants: {
    id: number;
    title: string;
  }[];
}

export async function getQuestionary(): Promise<Questionary> {
  try {
    const dataFile = await readFileSync(questionaryPath, "utf8");
    const data: Text = JSON.parse(dataFile);

    const text = data.text.split(/( )/g).reduce((acc, word) => {
      const item = {
        position: acc.length,
        type: word === "{$$$insetDropZone$$$}" ? "drop" : "text",
        value: word === "{$$$insetDropZone$$$}" ? null : word
      };

      acc.push(item);

      return acc;
    }, []);

    const variants = data.variants.map((item, index) => ({
      id: index,
      title: item
    }));

    return {
      text,
      variants
    };
  } catch (e) {
    throw e;
  }
}
