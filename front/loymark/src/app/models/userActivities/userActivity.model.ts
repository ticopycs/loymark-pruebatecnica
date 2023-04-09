import { Base } from "../base.model";

export class UserActivity extends Base{
    create: Date | null;
    userId: Number;
    actividad: String;

    constructor(){
        super(),
        this.create = null
        this.userId = 0
        this.actividad = ""
    }
}