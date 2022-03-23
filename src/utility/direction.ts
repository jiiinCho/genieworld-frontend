import { KeyPressed } from "../interface";

export default class DirectionInput {
  private heldDirections: string[];
  private map: { [keys in KeyPressed | any]: string };
  constructor() {
    this.heldDirections = [];
    this.map = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right",
    };
  }

  get direction() {
    return this.heldDirections[0];
  }

  update(callback: (dir: string) => void) {
    callback(this.heldDirections[0]);
    this.heldDirections.splice(0, 1);
  }

  init(callback: (dir: string) => void) {
    document.addEventListener("keydown", (e) => {
      const dir = this.map[e.code];
      if (dir === undefined) {
        return;
      }
      if (this.heldDirections.indexOf(dir) === -1) {
        //to prevent user keep pressing a key long time, the input can be missing
        //only insert when the key does not exist
        this.heldDirections.unshift(dir); //add the latest one in the begining of array
      }
      callback(this.heldDirections[0]);
      this.heldDirections.splice(0, 1);
    });
  }
}
