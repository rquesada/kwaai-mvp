export interface LlmOption {
  id: number;
  name: string;
  image: string;
}

export interface Bot {
  id: number;
  name: string;
  description: string;
  img: string;
  llm: LlmOption;
  files:File[];
  status: string;
}
