import { v4 as uuidv4 } from "uuid";

export class Base {
    id: string;
    insertedAt: Date;
    updatedAt: Date;
  
    constructor() {
      this.id = uuidv4();
      this.insertedAt = new Date;
      this.updatedAt = new Date;
    }
  }