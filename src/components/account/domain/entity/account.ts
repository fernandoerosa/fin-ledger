export default class Account {
    private readonly _id: string;
    private readonly _userId: string;
    private _name: string;
    private _email: string;
    private _password: string;
    private _type: AccountType;

    constructor(id: string, userId: string, name: string, email: string, password: string, type: AccountType) {
        this._id = id;
        this._userId = userId;
        this._name = name;
        this._email = email;
        this._password = password;
        this._type = type;
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get email(): string {
        return this._email;
    }   

    public get type(): AccountType {
        return this._type;
    }

    public isValidAccount() {
        if (this._id) {
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