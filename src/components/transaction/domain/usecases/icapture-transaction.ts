export interface ICaptureTransaction {
    capture: (transaction: ICaptureTransaction.Params) => Promise<ICaptureTransaction.Result>
}

export namespace ICaptureTransaction {
    export type Params = {
        transactionId: string
    };

    export type Result = {
        status: string;
        userId: string;
        accountId: string;
        type: string;
        value: number;
    };
}