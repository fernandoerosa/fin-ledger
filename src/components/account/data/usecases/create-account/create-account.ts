import { ICreateAccount } from '@/components/account/domain/usecases/icreate-account';
import { IAccountRepository } from '../../repositories/iaccount.repository';
import Account from '@/components/account/domain/entity/account';

export default class CreateAcconut implements ICreateAccount {

    constructor(
        private readonly _accountRepository: IAccountRepository
    ) {}

    async execute(params: ICreateAccount.Params): Promise<ICreateAccount.Result> {
        const account: Account = await this._accountRepository.create(params.userId, params.name, params.email, params.password);
        
        account.isValidAccount();
        
        return {
            id: account.id,
            status: 'success',
            message: 'Account created successfully'
        }
    }
}