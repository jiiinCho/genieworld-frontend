import React from "react";
import { ColorBase } from "../../interface";
import { utils } from "../../utility/utils";

const Tiger = ({ colors }: ColorBase) => {
  const {
    body = "#edc5a9",
    top = "#f2af06",
    pattern = "#e8c89e",
    face = "#513e3a",
  } = colors;
  return (
    <g id="a94c224c-5260-45ca-9ccc-9ade908e8a59" data-name="tiger cat">
      <g id="bae13043-1102-41cf-a104-68eb4eec52e8" data-name="body">
        <polygon
          points="18 17 17 17 17 16 16 16 15 16 14 16 13 16 12 16 11 16 11 17 10 17 9 17 9 18 9 19 9 20 9 21 9 22 10 22 10 23 11 23 12 23 13 23 13 24 14 24 14 25 15 25 16 25 16 24 17 24 17 23 18 23 19 23 19 22 20 22 20 21 20 20 20 19 20 18 20 17 19 17 18 17"
          fill={utils.hexToHSL(body, false)}
        />
        <rect
          x="18"
          y="27"
          width="1"
          height="1"
          fill={utils.hexToHSL(body, false)}
        />
        <rect
          x="11"
          y="27"
          width="1"
          height="1"
          fill={utils.hexToHSL(body, false)}
        />
        <polygon
          points="12 31 13 31 14 31 14 30 13 30 12 30 12 31"
          fill={utils.hexToHSL(body, false)}
        />
        <polygon
          points="18 31 18 30 17 30 16 30 16 31 17 31 18 31"
          fill={utils.hexToHSL(body, false)}
        />
        <polygon
          points="51 17 50 17 49 17 49 16 48 16 47 16 46 16 45 16 44 16 43 16 43 17 42 17 41 17 41 18 41 19 41 20 41 21 41 22 42 22 42 23 43 23 44 23 45 23 45 24 46 24 46 25 47 25 48 25 48 24 49 24 49 23 50 23 51 23 51 22 52 22 52 21 52 20 52 19 52 18 52 17 51 17"
          fill={utils.hexToHSL(body, false)}
        />
        <rect
          x="50"
          y="27"
          width="1"
          height="1"
          fill={utils.hexToHSL(body, false)}
        />
        <rect
          x="43"
          y="27"
          width="1"
          height="1"
          fill={utils.hexToHSL(body, false)}
        />
        <polygon
          points="48 30 47 30 46 30 45 30 45 31 46 31 47 31 48 31 49 31 49 30 48 30"
          fill={utils.hexToHSL(body, false)}
        />
      </g>
      <g id="f6785964-fd77-488a-8220-8373cd48bee8" data-name="face">
        <rect
          x="10"
          y="18"
          width="1"
          height="1"
          fill={utils.hexToHSL(face, false)}
        />
        <rect
          x="16"
          y="18"
          width="1"
          height="1"
          fill={utils.hexToHSL(face, false)}
        />
        <polygon
          points="13 20 12 20 12 21 13 21 14 21 15 21 15 20 14 20 13 20"
          fill={utils.hexToHSL(face, false)}
        />
        <rect
          x="42"
          y="18"
          width="1"
          height="1"
          fill={utils.hexToHSL(face, false)}
        />
        <rect
          x="48"
          y="18"
          width="1"
          height="1"
          fill={utils.hexToHSL(face, false)}
        />
        <polygon
          points="45 20 45 21 46 21 46 20 46 19 45 19 45 20"
          fill={utils.hexToHSL(face, false)}
        />
      </g>
      <g id="b7951d15-4e25-48eb-82a9-87192afac0ff" data-name="tiger">
        <g id="afee0a89-2b8c-4538-8dfe-0ae732c3b80a" data-name="cat-shadow">
          <polygon
            points="12 14 12 13 11 13 10 13 10 14 11 14 12 14"
            fill={utils.hexToHSL(top, true)}
          />
          <polygon
            points="20 12 19 12 19 13 19 14 20 14 20 13 20 12"
            fill={utils.hexToHSL(top, true)}
          />
          <polygon
            points="20 15 20 16 19 16 18 16 18 17 19 17 19 18 20 18 20 19 20 20 20 21 20 22 19 22 19 23 18 23 17 23 17 24 17 25 18 25 18 24 19 24 20 24 20 23 21 23 21 22 21 21 21 20 21 19 21 18 21 17 21 16 21 15 21 14 20 14 20 15"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="18"
            y="25"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="11"
            y="26"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="18"
            y="29"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="9"
            y="23"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <polygon
            points="44 14 44 13 43 13 42 13 42 14 43 14 44 14"
            fill={utils.hexToHSL(top, true)}
          />
          <polygon
            points="52 12 51 12 51 13 51 14 52 14 52 13 52 12"
            fill={utils.hexToHSL(top, true)}
          />
          <polygon
            points="52 14 52 15 52 16 51 16 50 16 50 17 51 17 51 18 52 18 52 19 52 20 52 21 52 22 51 22 51 23 50 23 49 23 49 24 49 25 50 25 50 24 51 24 52 24 52 23 53 23 53 22 53 21 53 20 53 19 53 18 53 17 53 16 53 15 53 14 52 14"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="50"
            y="25"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="43"
            y="26"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="50"
            y="29"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="41"
            y="23"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
        </g>
        <g id="a3ce6561-28f0-4b40-bf21-4a74e69fff7f" data-name="cat-ear">
          <polygon
            points="10 13 10 12 9 12 9 13 9 14 9 15 10 15 11 15 11 14 10 14 10 13"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="18 12 18 13 18 14 17 14 17 15 18 15 19 15 19 14 19 13 19 12 18 12"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="42 13 42 12 41 12 41 13 41 14 41 15 42 15 43 15 43 14 42 14 42 13"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="50 12 50 13 50 14 49 14 49 15 50 15 51 15 51 14 51 13 51 12 50 12"
            fill={utils.hexToHSL(body, false)}
          />
        </g>
        <g id="adff04e8-54f0-4ad1-af8b-cc1050d4301b" data-name="cat-pattern">
          <rect
            x="12"
            y="14"
            width="1"
            height="2"
            fill={utils.hexToHSL(pattern, false)}
          />
          <rect
            x="14"
            y="14"
            width="1"
            height="2"
            fill={utils.hexToHSL(pattern, false)}
          />
          <polygon
            points="17 26 16 26 16 25 14 25 14 26 13 26 13 27 12 27 12 28 13 28 13 29 17 29 17 28 18 28 18 27 17 27 17 26"
            fill={utils.hexToHSL(pattern, false)}
          />
          <rect
            x="20"
            y="28"
            width="1"
            height="1"
            fill={utils.hexToHSL(pattern, false)}
          />
          <rect
            x="44"
            y="14"
            width="1"
            height="2"
            fill={utils.hexToHSL(pattern, false)}
          />
          <rect
            x="46"
            y="14"
            width="1"
            height="2"
            fill={utils.hexToHSL(pattern, false)}
          />
          <polygon
            points="49 26 48 26 48 25 46 25 46 26 45 26 45 27 44 27 44 28 45 28 45 29 49 29 49 28 50 28 50 27 49 27 49 26"
            fill={utils.hexToHSL(pattern, false)}
          />
          <rect
            x="52"
            y="28"
            width="1"
            height="1"
            fill={utils.hexToHSL(pattern, false)}
          />
        </g>
        <g id="f2af06-f2af06" data-name="cat-body">
          <rect
            x="10"
            y="12"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, false)}
          />
          <rect
            x="9"
            y="11"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, false)}
          />
          <polygon
            points="14 15 14 14 13 14 13 15 13 16 14 16 14 15"
            fill={utils.hexToHSL(top, false)}
          />
          <polygon
            points="17 16 17 17 18 17 19 17 19 18 20 18 20 17 20 16 20 15 20 14 19 14 19 15 18 15 17 15 17 14 18 14 18 13 18 12 17 12 17 13 16 13 16 14 15 14 15 15 15 16 16 16 17 16"
            fill={utils.hexToHSL(top, false)}
          />
          <rect
            x="18"
            y="11"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, false)}
          />
          <polygon
            points="18 28 17 28 17 29 16 29 15 29 14 29 13 29 13 28 12 28 12 29 12 30 12 31 13 31 14 31 14 30 15 30 16 30 16 31 17 31 18 31 18 30 18 29 19 29 20 29 20 28 19 28 18 28"
            fill={utils.hexToHSL(top, false)}
          />
          <polygon
            points="20 27 20 28 21 28 22 28 22 27 21 27 20 27"
            fill={utils.hexToHSL(top, false)}
          />
          <polygon
            points="10 23 10 24 11 24 12 24 12 25 12 26 12 27 13 27 13 26 14 26 14 25 15 25 16 25 16 26 17 26 17 27 18 27 19 27 19 26 18 26 18 25 18 24 17 24 17 23 16 23 15 23 14 23 13 23 12 23 11 23 11 22 10 22 9 22 9 21 9 20 9 19 9 18 9 17 10 17 11 17 11 16 12 16 12 15 12 14 11 14 11 15 10 15 9 15 9 14 9 13 9 12 8 12 8 13 8 14 8 15 8 16 8 17 8 18 8 19 8 20 8 21 8 22 8 23 9 23 10 23"
            fill={utils.hexToHSL(top, false)}
          />
          <rect
            x="42"
            y="12"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, false)}
          />
          <rect
            x="41"
            y="11"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, false)}
          />
          <polygon
            points="46 15 46 14 45 14 45 15 45 16 46 16 46 15"
            fill={utils.hexToHSL(top, false)}
          />
          <polygon
            points="49 16 49 17 50 17 51 17 51 18 52 18 52 17 52 16 52 15 52 14 51 14 51 15 50 15 49 15 49 14 50 14 50 13 50 12 49 12 49 13 48 13 48 14 47 14 47 15 47 16 48 16 49 16"
            fill={utils.hexToHSL(top, false)}
          />
          <rect
            x="50"
            y="11"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, false)}
          />
          <polygon
            points="51 28 50 28 49 28 49 29 48 29 47 29 46 29 45 29 45 28 44 28 44 29 44 30 45 30 45 31 46 31 48 31 49 31 49 30 50 30 50 29 51 29 52 29 52 28 51 28"
            fill={utils.hexToHSL(top, false)}
          />
          <polygon
            points="53 29 52 29 52 30 53 30 54 30 54 29 53 29"
            fill={utils.hexToHSL(top, false)}
          />
          <polygon
            points="42 23 42 24 43 24 44 24 44 25 44 26 44 27 45 27 45 26 46 26 46 25 47 25 48 25 48 26 49 26 49 27 50 27 51 27 51 26 50 26 50 25 50 24 49 24 49 23 48 23 47 23 46 23 45 23 44 23 43 23 43 22 42 22 41 22 41 21 41 20 41 19 41 18 41 17 42 17 43 17 43 16 44 16 44 15 44 14 43 14 43 15 42 15 41 15 41 14 41 13 41 12 40 12 40 13 40 14 40 15 40 16 40 17 40 18 40 19 40 20 40 21 40 22 40 23 41 23 42 23"
            fill={utils.hexToHSL(top, false)}
          />
        </g>
      </g>
    </g>
  );
};

export default Tiger;
