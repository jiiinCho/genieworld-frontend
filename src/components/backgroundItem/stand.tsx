import React from "react";
import { FurnitureProps } from "../../interface";
import { utils } from "../../utility/utils";
const Stand = ({ colors }: FurnitureProps) => {
  const { frame = "#543119", primary = "#d28539", book = "#617761" } = colors;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 224">
      <g id="f2ce3188-04a8-4908-b00b-1f61739e4de4" data-name="stand">
        <g id="e8c8c5e8-102f-431d-bb32-ee2572d2b18f" data-name="stand-frame">
          <polygon
            points="104 100 105 100 105 99 104 99 103 99 103 100 104 100"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="102 99 103 99 103 98 102 98 101 98 101 99 102 99"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="100 98 101 98 101 97 100 97 99 97 99 98 100 98"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="98 97 99 97 99 96 98 96 97 96 97 97 98 97"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="96 96 97 96 97 95 96 95 95 95 95 96 96 96"
            fill={utils.hexToHSL(frame, false)}
          />
          <path
            d="M105,100v3H83v-3H82v22h1v-1h22v1h1V100Zm-11,4h1v7H93v-7Zm11,1v11h-2v1h2v3H83v-3h2v-1H83V104h9v8H91v1h1v2h1v-3h2v3h1v-2h1v-1H96v-8h9Z"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="85 100 85 99 84 99 83 99 83 100 84 100 85 100"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="87 99 87 98 86 98 85 98 85 99 86 99 87 99"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="89 98 89 97 88 97 87 97 87 98 88 98 89 98"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="91 97 91 96 90 96 89 96 89 97 90 97 91 97"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="93 96 93 95 92 95 91 95 91 96 92 96 93 96"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="95 95 95 94 94 94 93 94 93 95 94 95 95 95"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="102 115 101 115 101 116 102 116 103 116 103 115 102 115"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="100 115 101 115 101 114 100 114 99 114 99 115 100 115"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="98 114 99 114 99 113 98 113 97 113 97 114 98 114"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="87 116 87 115 86 115 85 115 85 116 86 116 87 116"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="87 114 87 115 88 115 89 115 89 114 88 114 87 114"
            fill={utils.hexToHSL(frame, false)}
          />
          <polygon
            points="89 113 89 114 90 114 91 114 91 113 90 113 89 113"
            fill={utils.hexToHSL(frame, false)}
          />
        </g>
        <g
          id="f4395d02-e583-4a77-9f59-93b50166f376"
          data-name="stand-glass-shadow"
        >
          <polygon
            points="104 101 103 101 102 101 101 101 100 101 99 101 98 101 97 101 96 101 95 101 94 101 93 101 92 101 91 101 90 101 89 101 88 101 87 101 86 101 85 101 84 101 83 101 83 102 83 103 84 103 85 103 86 103 87 103 88 103 89 103 90 103 91 103 92 103 93 103 94 103 95 103 96 103 97 103 98 103 99 103 100 103 101 103 102 103 103 103 104 103 105 103 105 102 105 101 104 101"
            fill={utils.hexToHSL(primary, false, true)}
          />
          <polygon
            points="103 118 102 118 101 118 100 118 99 118 98 118 97 118 96 118 95 118 94 118 93 118 92 118 91 118 90 118 89 118 88 118 87 118 86 118 85 118 84 118 83 118 83 119 83 120 84 120 85 120 86 120 87 120 88 120 89 120 90 120 91 120 92 120 93 120 94 120 95 120 96 120 97 120 98 120 99 120 100 120 101 120 102 120 103 120 104 120 105 120 105 119 105 118 104 118 103 118"
            fill={utils.hexToHSL(primary, false, true)}
          />
        </g>
        <g id="a3c4cd85-f787-4df8-bbe0-b149175250f1" data-name="stand-glass">
          <polygon
            points="104 100 103 100 103 99 102 99 101 99 101 98 100 98 99 98 99 97 98 97 97 97 97 96 96 96 95 96 95 95 94 95 93 95 93 96 92 96 91 96 91 97 90 97 89 97 89 98 88 98 87 98 87 99 86 99 85 99 85 100 84 100 83 100 83 101 84 101 85 101 86 101 87 101 88 101 89 101 90 101 91 101 92 101 93 101 94 101 95 101 96 101 97 101 98 101 99 101 100 101 101 101 102 101 103 101 104 101 105 101 105 100 104 100"
            fill={utils.hexToHSL(primary, false)}
          />
          <polygon
            points="103 117 103 116 102 116 101 116 101 115 100 115 99 115 99 114 98 114 97 114 97 113 96 113 95 113 95 112 94 112 93 112 93 113 92 113 91 113 91 114 90 114 89 114 89 115 88 115 87 115 87 116 86 116 85 116 85 117 84 117 83 117 83 118 84 118 85 118 86 118 87 118 88 118 89 118 90 118 91 118 92 118 93 118 94 118 95 118 96 118 97 118 98 118 99 118 100 118 101 118 102 118 103 118 104 118 105 118 105 117 104 117 103 117"
            fill={utils.hexToHSL(primary, false)}
          />
        </g>

        <g id="a3990fe8-e241-45f6-bbae-588b73cb3fa3" data-name="book">
          <g id="fd155aac-afcc-43b0-82f2-7882d3b9068f" data-name="book-body">
            <polygon
              points="99 98 98 98 98 97 97 97 96 97 96 96 95 96 94 96 94 95 93 95 92 95 92 96 91 96 90 96 90 97 89 97 88 97 88 98 89 98 90 98 90 99 91 99 92 99 92 100 93 100 94 100 94 101 95 101 96 101 96 100 97 100 98 100 98 99 99 99 100 99 100 98 99 98"
              fill={utils.hexToHSL(book, false)}
            />
          </g>
          <g id="a477dfbf-9cad-40e4-844b-94d9b1081c44" data-name="book-shadow">
            <polygon
              points="95 101 94 101 94 102 95 102 96 102 96 101 95 101"
              fill={utils.hexToHSL(book, false, true)}
            />
            <polygon
              points="93 100 92 100 92 101 93 101 94 101 94 100 93 100"
              fill={utils.hexToHSL(book, false, true)}
            />
            <polygon
              points="91 99 90 99 90 100 91 100 92 100 92 99 91 99"
              fill={utils.hexToHSL(book, false, true)}
            />
            <polygon
              points="89 98 88 98 88 99 89 99 90 99 90 98 89 98"
              fill={utils.hexToHSL(book, false, true)}
            />
          </g>
          <g id="bf42f759-a596-489e-83d1-d4fc58fe6431" data-name="book-paper">
            <polygon
              points="96 100 96 101 97 101 98 101 98 100 97 100 96 100"
              fill="#fcf4b9"
            />
            <polygon
              points="99 99 98 99 98 100 99 100 100 100 100 99 99 99"
              fill="#fcf4b9"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Stand;
