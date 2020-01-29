class Demand {
    private id: number;
    private subject: string;
    private schedule: Schedule;
    private mobility: Mobility;
    private community: Comunity;
    private title: string;
    private level: string;


    constructor($id: number, $subject: string, $schedule: Schedule, $mobility: Mobility, $community: Comunity, $title: string, $level: string) {
        this.id = $id;
        this.subject = $subject;
        this.schedule = $schedule;
        this.mobility = $mobility;
        this.community = $community;
        this.title = $title;
        this.level = $level;
    }


    /**
     * Getter $id
     * @return {number}
     */
    public get $id(): number {
        return this.id;
    }

    /**
     * Getter $subject
     * @return {string}
     */
    public get $subject(): string {
        return this.subject;
    }

    /**
     * Getter $schedule
     * @return {Schedule}
     */
    public get $schedule(): Schedule {
        return this.schedule;
    }

    /**
     * Getter $mobility
     * @return {Mobility}
     */
    public get $mobility(): Mobility {
        return this.mobility;
    }

    /**
     * Getter $community
     * @return {Comunity}
     */
    public get $community(): Comunity {
        return this.community;
    }

    /**
     * Getter $title
     * @return {string}
     */
    public get $title(): string {
        return this.title;
    }

    /**
     * Getter $level
     * @return {string}
     */
    public get $level(): string {
        return this.level;
    }

    /**
     * Setter $id
     * @param {number} value
     */
    public set $id(value: number) {
        this.id = value;
    }

    /**
     * Setter $subject
     * @param {string} value
     */
    public set $subject(value: string) {
        this.subject = value;
    }

    /**
     * Setter $schedule
     * @param {Schedule} value
     */
    public set $schedule(value: Schedule) {
        this.schedule = value;
    }

    /**
     * Setter $mobility
     * @param {Mobility} value
     */
    public set $mobility(value: Mobility) {
        this.mobility = value;
    }

    /**
     * Setter $community
     * @param {Comunity} value
     */
    public set $community(value: Comunity) {
        this.community = value;
    }

    /**
     * Setter $title
     * @param {string} value
     */
    public set $title(value: string) {
        this.title = value;
    }

    /**
     * Setter $level
     * @param {string} value
     */
    public set $level(value: string) {
        this.level = value;
    }


}
