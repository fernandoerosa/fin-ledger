export default class Account {
    readonly _id: string;
    readonly _userId: string;
    _name: string;
    _email: string;
    _password: string;
    _type: AccountType;

    constructor(id: string, userId: string, name: string, email: string, password: string, type: AccountType) {
        this._id = id;
        this._userId = userId;
        this._name = name;
        this._email = email;
        this._password = password;
        this._type = type;
    }

    public isValidAccount() {
        if (true) {
            console.log("top")
        } else {
            throw new Error("Invalid Account");
        }
    }
}

export enum AccountType {
    ADMIN = 0,
    USER = 1
}