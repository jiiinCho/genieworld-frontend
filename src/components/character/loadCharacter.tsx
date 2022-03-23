import { CharacterColors, CharacterNames } from "../../interface";
import Tiger from "./tiger";
import Genie from "./genie";
import Lazy from "./lazy";
import Hipster from "./hipster";
import Base from "./base";

const defaultColors: CharacterColors = {
  body: "#edc5a9",
  face: "#513e3a",
  top: "#f2af06",
  pattern: "#e8c89e",
  hair: "#e8c89e",
  pants: "#e8c89e",
  cap: "#e8c89e",
  accessories: "#e8c89e",
  shoes: "#e8c89e",
};

export function getCharacter(
  mainCharacterName: string,
  colors: CharacterColors
): JSX.Element {
  switch (mainCharacterName as CharacterNames) {
    case "tiger":
      return <Tiger colors={colors} />;
    case "genie":
      return <Genie colors={colors} />;
    case "lazy":
      return <Lazy colors={colors} />;
    case "hipster":
      return <Hipster colors={colors} />;
    case "base":
      return <Base colors={colors} />;
    default:
      return <Tiger colors={defaultColors} />;
  }
}

// export function getColorAndCharacter(characterObj: CharacterItem) {
//   const characterName = Object.keys(characterObj)[0] as CharacterNames;
//   const characterColors = characterObj[characterName];
//   const characterComp = getCharacter(characterName, characterColors);
//   return { characterComp, characterColors, characterName };
// }
