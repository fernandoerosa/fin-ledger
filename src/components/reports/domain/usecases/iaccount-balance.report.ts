export interface IAccountBalanceReport {
    execute(userId: IAccountBalanceReport.Params): Promise<IAccountBalanceReport.Result>;
}

export namespace IAccountBalanceReport {
    export type Params = {
        userId: string
    };

    export type Result = any;
}