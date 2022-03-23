import Tiger from "../components/character/tiger";
import Genie from "../components/character/genie";
import Lazy from "../components/character/lazy";
import Hipster from "../components/character/hipster";
import Room from "../components/backgroundItem/room";
import Carpet from "../components/backgroundItem/carpet";
import Bed from "../components/backgroundItem/bed";
import Stand from "../components/backgroundItem/stand";
import Imac from "../components/backgroundItem/imac";
import Cat from "../components/backgroundItem/cat";

import { AllItems } from "../interface";
import Base from "../components/character/base";

export function loadItem(item: AllItems): JSX.Element {
  const itemKey = item.type;
  switch (itemKey) {
    case "tiger":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 32 32`}>
          <Tiger colors={item} />
        </svg>
      );
    case "genie":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 32 32`}>
          <Genie colors={item} />
        </svg>
      );
    case "lazy":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 32 32`}>
          <Lazy colors={item} />
        </svg>
      );
    case "hipster":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 32 32`}>
          <Hipster colors={item} />
        </svg>
      );
    case "base":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 32 32`}>
          <Base colors={item} />
        </svg>
      );
    case "room":
      return <Room colors={item} />;
    case "carpet":
      return <Carpet colors={item} />;
    case "bed":
      return <Bed colors={item} />;
    case "stand":
      return <Stand colors={item} />;
    case "imac":
      return <Imac colors={item} />;
    case "cat":
      return <Cat colors={item} />;
    default:
      return <Tiger colors={item} />;
  }
}

export function loadCharacter(item: AllItems): JSX.Element {
  const itemKey = item.type;
  switch (itemKey) {
    case "tiger":
      return <Tiger colors={item} />;
    case "genie":
      return <Genie colors={item} />;
    case "lazy":
      return <Lazy colors={item} />;
    case "hipster":
      return <Hipster colors={item} />;
    case "base":
      return <Base colors={item} />;
    default:
      return <Tiger colors={item} />;
  }
}
