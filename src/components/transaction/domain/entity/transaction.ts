export default class Transaction {
    _id: string;
    _userId: string;
    _accountId: string;
    _type: string;
    _value: number;

    constructor(id: string, userId: string, accountId: string, type: string, value: number) {
        this._id = id;
        this._userId = userId;
        this._accountId = accountId;
        this._type = type;
        this._value = value;
    }
}