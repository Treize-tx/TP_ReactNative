import { Slot } from "./Slot";

export class Break extends Slot {
    constructor(name: string = '', id: number = 0) {
        super(name, id);
    }

    public type(): string {
        return this.type();
    }

    public static fromJsonObject(jsonObject: any): Break {
        if (!jsonObject) return null;
        let result = new Break();
        result.name = jsonObject.name;
        result.id = jsonObject.id;

        return result;
    }
}