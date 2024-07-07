export default class Account {
    readonly _id: string;
    readonly _userId: string;
    _name: string;
    _email: string;
    _password: string;

    constructor(id: string, userId: string, name: string, email: string, password: string) {
        this._id = id;
        this._userId = userId;
        this._name = name;
        this._email = email;
        this._password = password;
    }
}