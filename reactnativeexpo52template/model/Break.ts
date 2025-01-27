import { Slot } from "./Slot";

export class Break extends Slot {
    constructor(name: string = '', id: number = 0) {
        super(name, id);
    }

    public type(): string {
        return 'BREAK';
    }

    public static fromJsonObject(jsonObject: any): Break {
        if (!jsonObject) return null;
        let name = jsonObject.name !== undefined ? jsonObject.name : '';
        let id = jsonObject.id !== undefined ? jsonObject.id : 0;
        let result = new Break(name, id);
        return result;
    }
}