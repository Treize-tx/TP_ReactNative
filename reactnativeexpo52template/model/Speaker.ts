export class Speaker {
  private _name: string;
  private _description: string;
  private _image: string;
  private _linkedin: string;
  private _twitter: string;

  constructor() {}

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get image(): string {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }

  public get linkedin(): string {
    return this._linkedin;
  }
  public set linkedin(value: string) {
    this._linkedin = value;
  }

  public get twitter(): string {
    return this._twitter;
  }

  public set twitter(value: string) {
    this._twitter = value;
  }

  public static fromJsonObject(jsonObject: any): Speaker {
    return null;
  }

  public static fromJsonArray(jsonArray: any): Speaker[] {
    return null;
  }
}