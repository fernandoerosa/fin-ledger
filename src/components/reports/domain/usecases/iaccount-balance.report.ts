export interface IAccountBalanceReport {
    execute(params: IAccountBalanceReport.Params): Promise<IAccountBalanceReport.Result>;
}

export namespace IAccountBalanceReport {
    export type Params = {
        userId: string
    };

    export type Result = any;
}