import AccountReportWrapper from "@/shared/infra/mongo/wrappers/account-report.wrapper";
import AccountBalance from "../usecases/account-balance/account-balance";
import MongoAccountRepository from "@/components/account/infra/mongo/repository/mongo-account.repository";
import MongoTransactionRepository from "@/components/transaction/infra/mongo/repositories/mongo-transaction.repository";

export default class AccountBalanceFactory {

    private constructor() {
        throw Error("Utility Class");
    }

    static createUseCase() {
        return new AccountBalance(new AccountReportWrapper(new MongoAccountRepository(), new MongoTransactionRepository()));
    }
}