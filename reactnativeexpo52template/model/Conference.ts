export class Conference {
  private _name: string;
  private _from: Date;
  private _to: Date;

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
}