export class Feedback {
  private _content: string;
  private _rating: string;

  constructor(content: string = '', rating: string = '') {
    this._content = content;
    this._rating = rating;
  }

  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }

  public get rating(): string {
    return this._rating;
  }
  public set rating(value: string) {
    this._rating = value;
  }
}