export default class Transaction {
    private _id: string;
    private _userId: string;
    private _sourceAccountId: string;
    private _destinyAccountId: string;
    private _type: string;
    private _value: number;

    constructor(id: string, userId: string, sourceAccountId: string, destinyAccountId: string, type: string, value: number) {
        this._id = id;
        this._userId = userId;
        this._sourceAccountId = sourceAccountId;
        this._destinyAccountId = destinyAccountId;
        this._type = type;
        this._value = value;
    }

    public isValidTransactio() {
        if (! this._id) {
            throw Error("Invalid Transaction");
        }
    }
}