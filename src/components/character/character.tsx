import Heart from "./heart";
import { CharacterProps } from "../../interface";

const Character = ({ character, xPos }: CharacterProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`${xPos ? xPos : 0} 0 32 32`}
    >
      {character}
      <Heart />
    </svg>
  );
};

export default Character;
