

export class User {
    private _name: string;
    private _lastname: string;
    private _password: string;

    /**
     * Getter location
     * @return {any}
     */
	public get location(): any {
		return this._location;
	}

    /**
     * Setter location
     * @param {any} value
     */
	public set location(value: any) {
		this._location = value;
	}
    private _location: any;
    private _email: string;

    constructor() {  
    }


    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter lastname
     * @return {string}
     */
    public get lastname(): string {
        return this._lastname;
    }

    /**
     * Getter password
     * @return {string}
     */
    public get password(): string {
        return this._password;
    }


    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter lastname
     * @param {string} value
     */
    public set lastname(value: string) {
        this._lastname = value;
    }

    /**
     * Setter password
     * @param {string} value
     */
    public set password(value: string) {
        this._password = value;
    }


    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }








}