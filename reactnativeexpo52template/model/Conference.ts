export class Conference {
  private _name: string;
  private _from: Date;
  private _to: Date;

  constructor(name: string = '', from: Date = new Date(), to: Date = new Date()) {
    this._name = name;
    this._from = from;
    this._to = to;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

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

  public static fromJsonObject(jsonObject: any): Conference {
    if (!jsonObject) return null;
    let result = new Conference();
    result.name = jsonObject.name.toString();
    result.from = new Date(jsonObject.from);
    result.to = new Date(jsonObject.to);

    return result;
  }
}