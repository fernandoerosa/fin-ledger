export interface ICreateTransaction {
    execute: (params: ICreateTransaction.Params) => Promise<ICreateTransaction.Result>
}

export namespace ICreateTransaction {
    export type Params = {
        userId: string;
        sourceAccountId: string;
        destinyAccountId: string;
        type: string;
        value: number;
    };

    export type Result = {
        status: number;
        message: string;
    };
}