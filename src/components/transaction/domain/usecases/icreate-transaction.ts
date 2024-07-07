export interface ICreateTransaction {
    create: (transaction: ICreateTransaction.Params) => Promise<ICreateTransaction.Result>
}

export namespace ICreateTransaction {
    export type Params = {
        userId: string;
        accountId: string;
        type: string;
        value: number;
    };

    export type Result = {
        status: string;
        message: string;
    };
}