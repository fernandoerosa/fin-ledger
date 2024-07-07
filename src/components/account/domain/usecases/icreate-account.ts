export interface ICreateAccount {
    create: (account: ICreateAccount.Params) => Promise<ICreateAccount.Result>;
}

export namespace ICreateAccount {
    export type Params = {
        userId: string;
        name: string;
        email: string;
        password: string;
    };

    export type Result = {
        status: string;
        message: string;
    };
}