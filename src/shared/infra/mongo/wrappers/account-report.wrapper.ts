import { IAccountRepository } from "@/components/account/data/repositories/iaccount.repository";
import IAccountReportWrapper from "@/components/reports/data/wrappers/iaccount-report.wrapper";
import { ITransactionRepository } from "@/components/transaction/data/repositories/itransaction.repository";
import { getTotalBalanceByAccountId } from "@/components/transaction/infra/mongo/entity/mongo-transaction";

export default class AccountReportWrapper implements IAccountReportWrapper {

    constructor(
        private readonly _accountRepository: IAccountRepository,
        private readonly _transactionRepository: ITransactionRepository
    ) {}

    async getAccountBalanceWithAggregate(userId: string): Promise<any> {
        const accounts = await this._accountRepository.capture(userId);
        const accountsWithBalance = [];
        
        for (const account of accounts) {
            accountsWithBalance.push(await getTotalBalanceByAccountId(account.id.toString()));
        }

        return accountsWithBalance;
    }

    async getAccountBalance(userId: string): Promise<any> {
        const accounts = await this._accountRepository.capture(userId);
        
        const sunBalancePromise = accounts.map(async (account) => {
            const receivedTransactions = await this._transactionRepository.captureReceived(account.id);
            const sentTransactions = await this._transactionRepository.captureSent(account.id);
            var balance: number = 0;

            receivedTransactions.map((transaction) => {
                balance += transaction.value;
            });

            sentTransactions.map((transaction) => {
                balance -= transaction.value;
            });

            return {
                accountId: account.id,
                balance: balance
            };
        });

        const balanceAccountDto = await Promise.all(sunBalancePromise);
        
        return balanceAccountDto;
    };
}