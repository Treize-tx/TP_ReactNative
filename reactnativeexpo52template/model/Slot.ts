import { Break } from "./Break";
import { Talk } from "./Talk";

export abstract class Slot {
  private _name: string;
  private _id: number;

  constructor(name: string = '', id: number = 0) {
    this._name = name;
    this._id = id;
  }

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

  public type(): string{
    if (this instanceof Break) {
      return 'BREAK';
    } else if (this instanceof Talk) {
      return 'TALK';
    } else {
      return 'UNKNOWN';
    }
  }
}