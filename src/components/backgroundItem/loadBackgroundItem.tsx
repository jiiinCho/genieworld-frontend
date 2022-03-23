import { BackgroundKeys, FurnitureColors } from "../../interface";
import Carpet from "./carpet";
import Room from "./room";

export function getBackgroundItem(
  backgroundKey: BackgroundKeys,
  colors: FurnitureColors
): JSX.Element | undefined {
  switch (backgroundKey) {
    case "room":
      return <Room colors={colors} />;
    case "carpet":
      return <Carpet colors={colors} />;
    default:
      console.log("cannot find background item, getBackgroundItem");
      return;
  }
}
