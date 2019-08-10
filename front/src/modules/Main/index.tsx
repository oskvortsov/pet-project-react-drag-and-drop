import React from "react";
import { TextItem } from "../../core/types/text";

import Questionary from "./Questionary";

// interface QuestionaryContainerProps {}

export const MockDate: TextItem[] = [
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

function MainContainer() {
  return <Questionary text={MockDate} />;
}

export default React.memo(MainContainer);
