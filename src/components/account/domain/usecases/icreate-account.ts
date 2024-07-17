export interface ICreateAccount {
    execute: (account: ICreateAccount.Params) => Promise<ICreateAccount.Result>;
}

export namespace ICreateAccount {
    export type Params = {
        userId: string;
        name: string;
        email: string;
        password: string;
    };

    export type Result = {
        id: string;
        status: string;
        message: string;
    };
}