import { UserAttributes, CharacterItem, BackgroundItem } from "../interface";

export const defaultGenie: UserAttributes = {
  username: "genie",
  today: "There's no place like home",
  dotori: 300,
  createdAt: "Mon Mar 21 2022 09:37:35 GMT+0100",
  friends: [
    {
      body: "#feeac1",
      cap: "#e3d0e1",
      face: "#a59886",
      hair: "#06c2ff",
      shoes: "#baa4b9",
      top: "#e1d1e1",
      type: "lazy",
      username: "Lulu",
    },
  ],
  userMusic: [
    {
      label: "spring",
      audioURL:
        "https://firebasestorage.googleapis.com/v0/b/business-card-maker-56361.appspot.com/o/bg1.mp3?alt=media&token=c7b20fa8-cd30-44cf-ae68-50aefb4a4f77",
    },
    {
      label: "summer",
      audioURL:
        "https://firebasestorage.googleapis.com/v0/b/business-card-maker-56361.appspot.com/o/bg4.mp3?alt=media&token=f688d184-9528-4a69-ab8f-3b64149a7e06",
    },
    {
      label: "halloween",
      audioURL:
        "https://firebasestorage.googleapis.com/v0/b/business-card-maker-56361.appspot.com/o/bg5.mp3?alt=media&token=8a62e9e7-1347-4979-879f-444580bfd8e8",
    },
    {
      label: "space",
      audioURL:
        "https://firebasestorage.googleapis.com/v0/b/business-card-maker-56361.appspot.com/o/bg6.mp3?alt=media&token=382d0aa4-de45-4df1-8531-da53d74fc067",
    },
  ],
};

export const defaultCharacters: CharacterItem[] = [
  {
    id: "1",
    type: "tiger",
    body: "#edc5a9",
    face: "#513e3a",
    top: "#f2af06",
    pattern: "#e8c89e",
    username: "genie",
  },
  {
    id: "2",
    type: "genie",
    body: "#7bcef8",
    face: "#513e3a",
    hair: "#2f1d15",
    pants: "#dc001c",
    accessories: "#ffb619",
    username: "genie",
  },
];

export const defaultBackgrounds: BackgroundItem[] = [
  { type: "room", wall: "#b8b448", floor: "#e68b29" },
  { type: "carpet", primary: "#cf683e", pattern: "#e88d6d" },
  { type: "bed", frame: "#bf610f", pillow: "#f3e0b1", blanket: "#617761" },
  { type: "stand", frame: "#543119", primary: "#d28539", book: "#617761" },
  { type: "imac", imac: "#fceec2", chair: "#e88d6d", frame: "#f2ede9" },
  { type: "cat", body: "#fcf5eb", pattern: "#565453" },
];
