import { ICaptureAccount } from "@/components/account/domain/usecases/icapture-account";
import { IAccountRepository } from "../../repositories/iaccount.repository";

export class CaptureAccount implements ICaptureAccount {

    constructor(
        private readonly _accountRepository: IAccountRepository
    ) {}

    async execute(params: ICaptureAccount.Params): Promise<ICaptureAccount.Result> {
        const account = await this._accountRepository.capture(params.userId); 
        
        if (! account) {
            throw new Error('Account not found');
        }

        return {
            accounts: []
        }
    } 
}