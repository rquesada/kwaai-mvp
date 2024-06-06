export interface LlmOption {
  id: string;
  name: string;
  image: string;
}

export interface Bot {
  id: string;
  name: string;
  description: string;
  img: string;
  llm: LlmOption;
  files:File[];
  status: string;
  voice: Feature;
  face: Feature;
}

export interface Feature {
  id: string;
  name: string;
  imageURL: string;
  videoURL: string;
}