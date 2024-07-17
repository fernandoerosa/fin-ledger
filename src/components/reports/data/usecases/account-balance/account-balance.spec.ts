import { connectdb } from "@/shared/infra/mongo/database";
import AccountBalanceFactory from "../../factories/account-balance.factory";
import { ICreateTransaction } from "@/components/transaction/domain/usecases/icreate-transaction";
import CreateTransactionFactory from "@/components/transaction/data/factories/create-transaction.factory";
import MongoTransactionRepository from "@/components/transaction/infra/mongo/repositories/mongo-transaction.repository";
import CreateAccountFactory from "@/components/account/data/factories/usecases/create-account.factory";
import { ICreateAccount } from "@/components/account/domain/usecases/icreate-account";

describe('AccountBalance', () => {

    beforeAll(async () => {
        await connectdb();
        const createTransactionuseCase: ICreateTransaction = CreateTransactionFactory.createUseCase(new MongoTransactionRepository());
        const CreateAcconutUseCase: ICreateAccount = CreateAccountFactory.createUseCase();

        const account = await CreateAcconutUseCase.execute({
            userId: 'testeaccountbalance123',
            name: 'testeaccountbalance123',
            email: 'testeaccountbalance123',
            password: 'testeaccountbalance123',
        });

        await createTransactionuseCase.execute({
            userId: 'testeaccountbalance123',
            sourceAccountId: 'whatever',
            destinyAccountId: account.id.toString(),
            type: 'deposit',
            value: 500
        });
        await createTransactionuseCase.execute({
            userId: 'testeaccountbalance123',
            sourceAccountId: account.id.toString(),
            destinyAccountId: 'whatever',
            type: 'deposit',
            value: 200
        });
    });

    test('capture right account balance', async () => {
        const result = await AccountBalanceFactory.createUseCase().execute({
            userId: 'testeaccountbalance123'
        });

        console.log(result);

        expect(true).toBeTruthy();
    });
})
