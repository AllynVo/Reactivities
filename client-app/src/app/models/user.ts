export interface IUser { // what we will recieve back from the server
    username: string;
    displayName: string;
    token: string;
    image?: string;
}

export interface IUserFormValues { // what we will send
    email: string;
    password: string;
    displayName?: string;
    username?: string;
}