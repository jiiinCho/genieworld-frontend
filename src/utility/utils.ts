import { MusicList } from "../interface";

export const utils = {
  nextPosition(direction: string): { x: number; y: number } {
    let x = 0;
    let y = 0;
    const size = 16;

    if (direction === "left") {
      x = -size;
      // y = 0.5 * size;
    } else if (direction === "right") {
      x = size;
      // y = -0.5 * size;
    } else if (direction === "up") {
      y = -size;
      // x = -size;
      // y = -0.5 * size;
    } else {
      y = size;
      // x = size;
      // y = 0.5 * size;
    }
    return { x, y };
  },
  capitalizeFirstLetter(sentence: string) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  },
  hexToHSL(hex: string, shadow?: boolean, third?: boolean) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h, s, l: number;
    if (delta === 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    if (shadow) {
      s < 17 ? (s = Math.floor(s - s * 0.5)) : (s -= 17);
    }

    if (third) {
      s < 30 ? (s = Math.floor(s - s * 0.5)) : (s -= 30);
    }
    l = +(l * 100).toFixed(1);

    return "hsl(" + h + "," + s + "%," + l + "%)";
  },
  shuffle(arr: MusicList[]) {
    for (let i = 0; i < arr.length; i++) {
      const x = Math.floor(Math.random() * arr.length);
      const y = Math.floor(Math.random() * arr.length);
      if (x === y) {
        //for dont change arr[index] with self !!!
        continue;
      }
      const temp0 = arr[x];
      arr[x] = arr[y];
      arr[y] = temp0;
    }
    return arr;
  },
  getBirthday(date: string) {
    return new Date(date).toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  },
};
