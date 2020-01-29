import { User } from "./user";

export class Student extends User {
    private demands: Array<Demand>;


    constructor() {
        super();
    }

    /**
     * Getter $demands
     * @return {Array<Demand>}
     */
    public get $demands(): Array<Demand> {
        return this.demands;
    }

    /**
     * Setter $demands
     * @param {Array<Demand>} value
     */
    public set $demands(value: Array<Demand>) {
        this.demands = value;
    }


}