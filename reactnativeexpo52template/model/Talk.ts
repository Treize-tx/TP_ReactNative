import { Speaker } from "./Speaker";
import { Slot } from "./Slot";


export class Talk {
  private _room: string;
  private _theme: string;
  private _format: string;
  private _description: string;
  private _speakers: Speaker[];

  public get room(): string {
    return this._room;
  }
  public set room(value: string) {
    this._room = value;
  }

  public get theme(): string {
    return this._theme;
  }
  public set theme(value: string) {
    this._theme = value;
  }

  public get format(): string {
    return this._format;
  }
  public set format(value: string) {
    this._format = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  public get speakers(): Speaker[] {
    return this._speakers;
  }
  public set speakers(value: Speaker[]) {
    this._speakers = value;
  }
}