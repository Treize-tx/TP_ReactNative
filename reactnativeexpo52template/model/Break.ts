import { format } from "date-fns";
import { Slot } from "./Slot";

export class Break extends Slot {

  public override type(): string {
    return "BREAK";
  }

  public static fromJsonObject(jsonObject: any): Break {
    if (!jsonObject) return null;
    let result = new Break();
    result.name = jsonObject.name;
    result.id = jsonObject.id;

    return result;
  }
}