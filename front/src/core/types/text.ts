export interface TextItem {
  position: number;
  value: string;
  type: "drop" | "text";
  variant?: Variant;
}

export interface Variant {
  id: number;
  title: string;
}

export interface QuestData {
  text: TextItem[];
  variants: Variant[];
}
