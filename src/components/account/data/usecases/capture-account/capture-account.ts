import { ICaptureAccount } from "@/components/account/domain/usecases/icapture-account";
import { IAccountRepository } from "../../repositories/iaccount.repository";

export class CaptureAccount implements ICaptureAccount {

    constructor(
        private readonly _accountRepository: IAccountRepository
    ) {}

    async execute(params: ICaptureAccount.Params): Promise<ICaptureAccount.Result> {
        const accounts = await this._accountRepository.capture(params.userId); 
        
        if (! accounts) {
            throw new Error('Account not found');
        }

        const accountsResult = accounts.map((account) => {
            return {
                id: account.id,
                name: account.name,
                email: account.email,
                type: account.type
            }
        });

        return {
            accounts: accountsResult
        };
    } 
}