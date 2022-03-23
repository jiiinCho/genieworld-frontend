import React from "react";
import { ColorBase } from "../../interface";
import { utils } from "../../utility/utils";

const Base = ({ colors }: ColorBase) => {
  const {
    body = "#edc5a9",
    hair = "#573626",
    face = "#513e3a",
    top = "#f9f9f9",
    pants = "#353535",
    shoes = "#eaeaea",
  } = colors;

  return (
    <g id="ee144d1a-7a0c-44f7-aee4-8736939412345e8d" data-name="base">
      <g id="ee144d1a-7a0c-44f7-aee4-873693948e8d" data-name="body">
        <g id="fcff2dbf-4868-44e2-8316-d74a0087b256" data-name="body-shadow">
          <rect
            x="16"
            y="23"
            width="1"
            height="1"
            fill={utils.hexToHSL(body, true)}
          />
          <polygon
            points="19 17 19 18 19 19 19 20 19 21 19 22 20 22 20 21 20 20 20 19 20 18 20 17 19 17"
            fill={utils.hexToHSL(body, true)}
          />
          <polygon
            points="17 22 17 23 18 23 19 23 19 22 18 22 17 22"
            fill={utils.hexToHSL(body, true)}
          />
          <rect
            x="10"
            y="22"
            width="1"
            height="1"
            fill={utils.hexToHSL(body, true)}
          />
        </g>
        <g id="a3ef3b93-31f8-4b74-a892-48c619a02eb6" data-name="body-shadow">
          <rect
            x="48"
            y="23"
            width="1"
            height="1"
            fill={utils.hexToHSL(body, true)}
          />
          <polygon
            points="51 17 51 18 51 19 51 20 51 21 51 22 52 22 52 21 52 20 52 19 52 18 52 17 51 17"
            fill={utils.hexToHSL(body, true)}
          />
          <polygon
            points="49 22 49 23 50 23 51 23 51 22 50 22 49 22"
            fill={utils.hexToHSL(body, true)}
          />
          <rect
            x="42"
            y="22"
            width="1"
            height="1"
            fill={utils.hexToHSL(body, true)}
          />
        </g>
        <g id="fc9fe4b1-6f78-4069-9399-12679a8467b1" data-name="body">
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
            points="18 17 17 17 17 16 16 16 15 16 14 16 13 16 12 16 11 16 11 17 10 17 9 17 9 18 9 19 9 20 9 21 9 22 10 22 11 22 11 23 12 23 13 23 13 24 14 24 14 25 15 25 16 25 16 24 17 24 17 23 17 22 18 22 19 22 19 21 19 20 19 19 19 18 19 17 18 17"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="12 30 12 31 13 31 14 31 14 30 13 30 12 30"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="16 30 16 31 17 31 18 31 18 30 17 30 16 30"
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
            points="50 17 49 17 49 16 48 16 47 16 46 16 45 16 44 16 43 16 43 17 42 17 41 17 41 18 41 19 41 20 41 21 41 22 42 22 43 22 43 23 44 23 45 23 45 24 46 24 46 25 47 25 48 25 48 24 49 24 49 23 49 22 50 22 51 22 51 21 51 20 51 19 51 18 51 17 50 17"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="45 30 45 31 47 31 49 31 49 30 47 30 45 30"
            fill={utils.hexToHSL(body, false)}
          />
        </g>
      </g>
      <g id="acd557d3-3f93-41df-88e6-44a9c33ac029" data-name="hair-long">
        <g id="bf750284-4c70-4146-ad67-1db0f3e0ffe0" data-name="hair-long">
          <polygon
            points="18 16 18 15 17 15 17 14 16 14 15 14 14 14 13 14 12 14 11 14 11 15 10 15 10 16 9 16 9 17 9 18 10 18 10 17 11 17 12 17 13 17 14 17 15 17 16 17 17 17 18 17 18 18 19 18 19 17 19 16 18 16"
            fill={utils.hexToHSL(hair, false)}
          />
          <polygon
            points="50 16 50 15 49 15 49 14 48 14 47 14 46 14 45 14 44 14 43 14 43 15 42 15 42 16 41 16 41 17 41 18 42 18 42 17 43 17 44 17 45 17 46 17 47 17 48 17 49 17 50 17 50 18 51 18 51 17 51 16 50 16"
            fill={utils.hexToHSL(hair, false)}
          />
        </g>
        <g
          id="a9d39a53-69ab-4489-bd36-ec99d2cc16a3"
          data-name="hair-long-shadow"
        >
          <rect
            x="17"
            y="14"
            width="1"
            height="1"
            fill={utils.hexToHSL(hair, true)}
          />
          <polygon
            points="20 16 20 15 19 15 18 15 18 16 19 16 19 17 19 18 20 18 20 19 20 20 20 21 20 22 19 22 19 23 18 23 17 23 17 24 18 24 18 25 19 25 20 25 20 24 21 24 21 23 21 22 21 21 21 20 21 19 21 18 21 17 21 16 20 16"
            fill={utils.hexToHSL(hair, true)}
          />
          <polygon
            points="11 23 10 23 10 22 9 22 9 23 9 24 10 24 10 25 11 25 12 25 12 24 13 24 13 23 12 23 11 23"
            fill={utils.hexToHSL(hair, true)}
          />
        </g>
        <g
          id="a899fd6f-762a-4889-8c2e-82a64bfc0bfc"
          data-name="hair-long-shadow"
        >
          <rect
            x="49"
            y="14"
            width="1"
            height="1"
            fill={utils.hexToHSL(hair, true)}
          />
          <polygon
            points="52 16 52 15 51 15 50 15 50 16 51 16 51 17 51 18 52 18 52 19 52 20 52 21 52 22 51 22 51 23 50 23 49 23 49 24 50 24 50 25 51 25 52 25 52 24 53 24 53 23 53 22 53 21 53 20 53 19 53 18 53 17 53 16 52 16"
            fill={utils.hexToHSL(hair, true)}
          />
          <polygon
            points="43 23 42 23 42 22 41 22 41 23 41 24 42 24 42 25 43 25 44 25 44 24 45 24 45 23 44 23 43 23"
            fill={utils.hexToHSL(hair, true)}
          />
        </g>
      </g>
      <g id="b3bba89f-4611-4733-823e-f2d11296aff4" data-name="face">
        <g id="ace460c3-cc75-42b4-8fad-89ed95d9927a" data-name="face">
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
      </g>
      <g id="bce4dde0-f269-4dce-9b92-9cfbc6d85539" data-name="top">
        <g id="ebf2a735-64b9-4b84-8a69-9dcf3883ed33" data-name="top-shadow">
          <rect
            x="11"
            y="26"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="17"
            y="24"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <polygon
            points="18 25 18 26 18 27 19 27 19 26 19 25 18 25"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="12"
            y="24"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <polygon
            points="17 28 17 29 18 29 18 28 18 27 17 27 17 28"
            fill={utils.hexToHSL(top, true)}
          />
        </g>
        <polygon
          id="f40b1bfb-7220-4af1-8bd4-f7a787f0310b"
          data-name="top"
          points="17 25 17 24 16 24 15 24 14 24 13 24 13 25 12 25 12 26 12 27 12 28 12 29 13 29 14 29 15 29 16 29 17 29 17 28 17 27 18 27 18 26 18 25 17 25"
          fill={utils.hexToHSL(top, false)}
        />
        <g id="aee76741-4951-43d0-9c63-2649edc95f77" data-name="top-shadow">
          <rect
            x="43"
            y="26"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="49"
            y="24"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <polygon
            points="50 25 50 26 50 27 51 27 51 26 51 25 50 25"
            fill={utils.hexToHSL(top, true)}
          />
          <rect
            x="44"
            y="24"
            width="1"
            height="1"
            fill={utils.hexToHSL(top, true)}
          />
          <polygon
            points="49 28 49 29 50 29 50 28 50 27 49 27 49 28"
            fill={utils.hexToHSL(top, true)}
          />
        </g>
        <polygon
          id="ab2c4cec-b479-4ea4-82b2-2b19f6e86674"
          data-name="top"
          points="49 25 49 24 48 24 47 24 46 24 45 24 45 25 44 25 44 26 44 27 44 28 44 29 45 29 46 29 47 29 48 29 49 29 49 28 49 27 50 27 50 26 50 25 49 25"
          fill={utils.hexToHSL(top, false)}
        />
      </g>
      <g id="acf27f7e-09fa-461b-bbbb-1cd03897d16c" data-name="pants">
        <polygon
          points="17 29 16 29 15 29 14 29 13 29 12 29 12 30 13 30 14 30 15 30 16 30 17 30 18 30 18 29 17 29"
          fill={utils.hexToHSL(pants, false)}
        />
        <polygon
          points="49 29 48 29 47 29 46 29 45 29 44 29 44 30 45 30 46 30 47 30 48 30 49 30 50 30 50 29 49 29"
          fill={utils.hexToHSL(pants, false)}
        />
      </g>
      <g id="eb206ce4-5f32-44d1-8324-a5ffa7e66f41" data-name="shoes">
        <polygon
          points="12 30 12 31 13 31 14 31 14 30 13 30 12 30"
          fill={utils.hexToHSL(shoes, false)}
        />
        <polygon
          points="17 30 16 30 16 31 17 31 18 31 18 30 17 30"
          fill={utils.hexToHSL(shoes, false)}
        />
        <polygon
          points="45 30 45 31 47 31 49 31 49 30 47 30 45 30"
          fill={utils.hexToHSL(shoes, false)}
        />
      </g>
    </g>
  );
};

export default Base;
