
export interface Authable {

    regis(email: string, password: string, cpassword: string): boolean;

    log(email: string, password: string): boolean;

    logOut();


}