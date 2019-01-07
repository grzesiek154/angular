export interface User {
    firstName: string;
    lastName: string;
    email: string;
    // image?:String,
    isActive?:boolean,
    balance?: number,
    registered?: any,
    hide?: boolean
}