import { Speaker } from "@/model/Speaker";

export type RootStackParamList = {
    Home: undefined;
    Speakers: undefined;
    Speaker: { speaker: Speaker };
  };