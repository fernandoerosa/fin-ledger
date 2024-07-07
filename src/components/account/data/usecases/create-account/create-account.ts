import { ICreateAccount } from '@/components/account/domain/usecases/icreate-account';

export default class CreateAcconut implements ICreateAccount {

    async create(account: ICreateAccount.Params): Promise<ICreateAccount.Result> {
        
        return {
            status: 'success',
            message: 'Account created successfully'
        }
    }
}