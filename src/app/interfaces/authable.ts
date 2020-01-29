
export interface Authable{
   
    signUp(email : string, password : string , cpassword: string) : boolean ;

    login(email : string, password : string) : boolean;

    logout();

    
}