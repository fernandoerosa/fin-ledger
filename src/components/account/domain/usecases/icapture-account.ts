export interface ICaptureAccount {
    execute: (account: ICaptureAccount.Params) => Promise<ICaptureAccount.Result>;
}

export namespace ICaptureAccount {
    export type Params = {
        userId: string
    };

    export type Result = {
        accounts: {
            id: string
            name: string
            email: string
            type: number
        }[]
    };
}