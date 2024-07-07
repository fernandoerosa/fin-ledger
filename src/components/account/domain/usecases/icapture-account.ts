export default interface ICaptureAccount {
    capture: (account: ICaptureAccount.Params) => Promise<ICaptureAccount.Result>;
}

export namespace ICaptureAccount {
    export type Params = {
        userId: string
    };

    export type Result = {
        status: string;
        message: string;
    };
}