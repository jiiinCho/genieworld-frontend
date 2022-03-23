import { BackgroundNames, FurnitureColors } from "../../interface";
import Carpet from "./carpet";
import Room from "./room";

export function getBackgroundItem(
  backgroundKey: BackgroundNames,
  colors: FurnitureColors
): JSX.Element | undefined {
  switch (backgroundKey) {
    case "room":
      return <Room colors={colors} />;
    case "carpet":
      return <Carpet colors={colors} />;
    default:
      return;
  }
}
