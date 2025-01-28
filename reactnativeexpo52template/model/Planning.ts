import { Slot } from './Slot';
import { Break } from './Break';
import { Talk } from './Talk';

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

  public static fromJsonArray(jsonArray: any): Planning[] {
    let plannings = []
    jsonArray.forEach(jsonObject => {
      plannings.push(Planning.fromJsonObject(jsonObject))
    });
    return plannings;
  }

  private static fromJsonObject(jsonObject: any): Planning {
    if (!jsonObject) return null;
    let result = new Planning();
    result.to = new Date(jsonObject.to);
    result.from = new Date(jsonObject.from);
    const talks:any[] = jsonObject.talks
    result.slots = []
    talks.forEach(talk =>  {
      if (talk.format === "Break") {
            result.slots.push(Break.fromJsonObject(talk));
          } else {
            result.slots.push(Talk.fromJsonObject(talk));
          }
    })
    return result;
  }
}