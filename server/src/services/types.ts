export interface Text {
  text: string;
  variants: {
    id: number;
    title: string;
  }[];
}

export interface Response {
  id: number;
  position: number;
}

export interface Questionary {
  text: {
    position: number;
    type: "drop" | "text";
    value: string;
    variant?: {
      id: number;
      title: string;
    };
  }[];

  variants: {
    id: number;
    title: string;
  }[];
}
