import { User } from './user';
import { Offer } from './offer';

export class Teacher extends User {
    private phone: string;
    private offers: Array<Offer>;
    
    constructor() {
        super();
    }
    /**
     * Getter $phone
     * @return {string}
     */
    public get $phone(): string {
        return this.phone;
    }

    /**
     * Getter $offers
     * @return {Array<Offer>}
     */
    public get $offers(): Array<Offer> {
        return this.offers;
    }

    /**
     * Setter $phone
     * @param {string} value
     */
    public set $phone(value: string) {
        this.phone = value;
    }

    /**
     * Setter $offers
     * @param {Array<Offer>} value
     */
    public set $offers(value: Array<Offer>) {
        this.offers = value;
    }

}
