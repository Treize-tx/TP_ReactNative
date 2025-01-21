import { Slot } from "./Slot";

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

  public static fromJsonObject(jsonObject: any): Planning {
    if (!jsonObject) return null;
    let result = new Planning();
    result.to = new Date(jsonObject.to);
    result.from = new Date(jsonObject.from);
    //result.slots = ; A FAIRE

    return result;
  }

  public static fromJsonArray(jsonArray: any): Planning[] {
    let plannings = []
    jsonArray.forEach(obj => {
        plannings.push(this.fromJsonObject(obj));
    });
    return plannings;
  }


}