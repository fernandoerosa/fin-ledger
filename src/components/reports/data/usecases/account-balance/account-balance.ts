import { IAccountBalanceReport } from "../../../domain/usecases/iaccount-balance.report";
import IAccountReportWrapper from "./iaccount-report.wrapper";

export default class AccountBalance implements IAccountBalanceReport {

    constructor(
        private readonly _accountReportWrapper: IAccountReportWrapper
    ) {}

    async execute(params: IAccountBalanceReport.Params): Promise<IAccountBalanceReport.Result> {
        const result = await this._accountReportWrapper.getAccountBalance(params.userId);

        return result
    }
}