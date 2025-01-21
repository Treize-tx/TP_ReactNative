import { Slot

 } from "./Slot";
export class Planning {
  private _from: Date;
  private _to: Date;
  private _slots: Slot[];

  public get from(): Date {
    return this._from;
  }
  public set from(value: Date) {
    this._from = value;
  }

  public get to(): Date {
    return this._to;
  }
  public set to(value: Date) {
    this._to = value;
  }

  public get slots(): Slot[] {
    return this._slots;
  }
  public set slots(value: Slot[]) {
    this._slots = value;
  }
  
}