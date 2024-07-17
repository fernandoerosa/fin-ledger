import { IAccountRepository } from "@/components/account/data/repositories/iaccount.repository";
import IAccountReportWrapper from "@/components/reports/data/usecases/account-balance/iaccount-report.wrapper";
import { ITransactionRepository } from "@/components/transaction/data/repositories/itransaction.repository";

export default class AccountReportWrapper implements IAccountReportWrapper {
    
    constructor(
        private readonly _accountRepository: IAccountRepository,
        private readonly _transactionRepository: ITransactionRepository
    ) {}
    
    async getAccountBalance(userId: string): Promise<any> {
        const accounts = await this._accountRepository.capture(userId);
        const balanceAccountDto: any[] = [];

        accounts.map(async account => {
            const receivedTransactions = await this._transactionRepository.captureReceived(account.id);
            const sentTransactions = await this._transactionRepository.captureSent(account.id);
            let balance = 0;
          
            receivedTransactions.map((transaction) => {
                balance += transaction.value;
            });

            sentTransactions.map((transaction) => { 
                balance -= transaction.value;
            });

            balanceAccountDto.push({
                accountId: account.id,
                balance: balance
            });
        });

        return balanceAccountDto;
    };
}