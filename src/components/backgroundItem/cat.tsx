import React from "react";
import { FurnitureProps } from "../../interface";
import { utils } from "../../utility/utils";

const Cat = ({ colors }: FurnitureProps) => {
  const { body = "#fcf5eb", pattern = "#565453" } = colors;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 224">
      <g id="b2814260-c675-4bd8-adb1-79143dd99ac2" data-name="cat">
        <g id="b2fe8fb2-b70d-4f01-9f44-a8b58f3f8b88" data-name="cat-outline">
          <polygon
            points="177 114 177 113 176 113 175 113 175 114 176 114 177 114"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="178 115 179 115 179 114 178 114 177 114 177 115 178 115"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="180 115 181 115 182 115 183 115 184 115 185 115 185 114 184 114 183 114 182 114 181 114 181 113 180 113 179 113 179 114 180 114 180 115"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <rect
            x="185"
            y="115"
            width="1"
            height="1"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <rect
            x="186"
            y="116"
            width="1"
            height="1"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="187 118 187 119 187 120 187 121 188 121 188 120 188 119 188 118 188 117 187 117 187 118"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <rect
            x="186"
            y="121"
            width="1"
            height="1"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="184 122 184 123 185 123 186 123 186 122 185 122 184 122"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <rect
            x="183"
            y="121"
            width="1"
            height="1"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="186 119 186 118 185 118 184 118 183 118 182 118 181 118 180 118 179 118 178 118 177 118 176 118 176 119 177 119 178 119 179 119 180 119 181 119 182 119 183 119 184 119 185 119 185 120 186 120 186 119"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <rect
            x="184"
            y="120"
            width="1"
            height="1"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <rect
            x="175"
            y="117"
            width="1"
            height="1"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="175 115 175 114 174 114 174 115 174 116 174 117 175 117 175 116 175 115"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="136 104 137 104 137 103 136 103 135 103 135 104 136 104"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="138 104 138 105 138 106 139 106 140 106 141 106 142 106 143 106 143 105 142 105 141 105 140 105 139 105 139 104 139 103 139 102 138 102 137 102 137 103 138 103 138 104"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <rect
            x="137"
            y="106"
            width="1"
            height="1"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="135 108 136 108 137 108 137 107 136 107 135 107 134 107 134 106 133 106 133 107 133 108 134 108 135 108"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="144 110 144 109 143 109 142 109 141 109 140 109 139 109 138 109 137 109 136 109 135 109 134 109 133 109 133 108 132 108 132 109 132 110 133 110 134 110 135 110 136 110 137 110 138 110 139 110 140 110 141 110 142 110 143 110 143 111 144 111 144 110"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="143 112 143 111 142 111 142 112 142 113 142 114 143 114 144 114 144 113 143 113 143 112"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <rect
            x="144"
            y="112"
            width="1"
            height="1"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="145 108 145 109 145 110 145 111 145 112 146 112 146 111 146 110 146 109 146 108 145 108"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="143 108 144 108 145 108 145 107 144 107 144 106 143 106 143 107 143 108"
            fill={utils.hexToHSL(pattern, false, true)}
          />
          <polygon
            points="133 104 133 103 134 103 135 103 135 102 134 102 133 102 132 102 132 103 132 104 132 105 132 106 133 106 133 105 133 104"
            fill={utils.hexToHSL(pattern, false, true)}
          />
        </g>
        <g id="bec399c0-72b6-42c0-be7a-e45e0bec6c13" data-name="cat-body">
          <polygon
            points="134 104 133 104 133 105 133 106 134 106 134 105 134 104"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="133 108 133 109 134 109 135 109 135 108 134 108 133 108"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="140 106 139 106 139 107 139 108 138 108 137 108 136 108 136 109 137 109 138 109 139 109 140 109 141 109 141 108 142 108 142 107 142 106 141 106 140 106"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="144 110 144 111 143 111 143 112 143 113 144 113 144 112 145 112 145 111 145 110 144 110"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="138 105 138 104 137 104 137 105 137 106 138 106 138 105"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="186 116 185 116 185 115 184 115 183 115 182 115 181 115 180 115 179 115 178 115 177 115 176 115 175 115 175 116 175 117 176 117 176 118 177 118 178 118 179 118 180 118 181 118 182 118 183 118 184 118 185 118 186 118 187 118 187 117 186 117 186 116"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="186 120 185 120 185 121 184 121 184 122 185 122 186 122 186 121 187 121 187 120 187 119 186 119 186 120"
            fill={utils.hexToHSL(body, false)}
          />
          <polygon
            points="137 107 137 106 136 106 136 105 136 104 135 104 135 105 135 106 134 106 134 107 135 107 136 107 137 107"
            fill={utils.hexToHSL(body, false)}
          />
        </g>
        <polygon
          points="135 103 134 103 133 103 133 104 134 104 135 104 135 103"
          fill={utils.hexToHSL(pattern, false)}
        />
        <rect
          x="135"
          y="108"
          width="1"
          height="1"
          fill={utils.hexToHSL(pattern, false)}
        />
        <polygon
          points="144 108 143 108 143 107 143 106 142 106 141 106 140 106 139 106 138 106 138 107 137 107 137 108 138 108 139 108 140 108 140 109 141 109 142 109 143 109 144 109 144 110 144 111 143 111 143 112 143 113 144 113 144 112 145 112 145 111 145 110 145 109 145 108 144 108"
          fill={utils.hexToHSL(pattern, false)}
        />
        <rect
          x="137"
          y="103"
          width="1"
          height="1"
          fill={utils.hexToHSL(pattern, false)}
        />
        <polygon
          points="175 114 175 115 176 115 177 115 177 114 176 114 175 114"
          fill={utils.hexToHSL(pattern, false)}
        />
        <rect
          x="179"
          y="114"
          width="1"
          height="1"
          fill={utils.hexToHSL(pattern, false)}
        />
        <polygon
          points="186 116 185 116 185 115 184 115 183 115 182 115 181 115 181 116 181 117 182 117 183 117 183 118 184 118 185 118 186 118 186 119 186 120 185 120 185 121 184 121 184 122 185 122 186 122 186 121 187 121 187 120 187 119 187 118 187 117 186 117 186 116"
          fill={utils.hexToHSL(pattern, false)}
        />
        <rect
          x="180"
          y="117"
          width="1"
          height="1"
          fill={utils.hexToHSL(pattern, false)}
        />
        <g id="b5775507-f4aa-4b73-a3b4-48a51de6d663" data-name="cat-face">
          <polygon
            points="134 105 134 106 135 106 135 105 135 104 134 104 134 105"
            fill="#352022"
          />
          <polygon
            points="136 104 136 105 136 106 137 106 137 105 137 104 136 104"
            fill="#352022"
          />
          <polygon
            points="175 116 175 117 176 117 177 117 177 116 176 116 175 116"
            fill="#352022"
          />
          <polygon
            points="178 116 178 117 179 117 180 117 180 116 179 116 178 116"
            fill="#352022"
          />
        </g>
      </g>
    </svg>
  );
};

export default Cat;
