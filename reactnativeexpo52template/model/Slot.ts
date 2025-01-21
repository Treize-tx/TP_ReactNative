export abstract class Slot {
  private _name: string;
  private _id: number;

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get type(): string{
    return this.type
  }
}