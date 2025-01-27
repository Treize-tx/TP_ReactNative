import { Speaker } from "./Speaker";

export class Talk {
  private _theme: string;
  private _format: string;
  private _description: string;
  private _speakers: Speaker[];

  constructor(theme: string = '', format: string = '', description: string = '', speakers: Speaker[] = []) {
    this._theme = theme;
    this._format = format;
    this._description = description;
    this._speakers = speakers;
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

  public type(): string {
    return 'TALK';
  }

  public static fromJsonObject(jsonObject: any): Talk {
    if (!jsonObject) return null;
    let speakers = Array.isArray(jsonObject.speakers) ? jsonObject.speakers.map((speaker: any) => new Speaker(speaker.name, speaker.id)) : [];
    let result = new Talk(
      jsonObject.theme || '',
      jsonObject.format || '',
      jsonObject.description || '',
      speakers
    );
    return result;
  }
}