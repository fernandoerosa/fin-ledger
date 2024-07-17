import { connectdb } from "@/shared/infra/mongo/database";
import CreateTransactionFactory from "../../factories/create-transaction.factory";
import MongoTransactionRepository from "@/components/transaction/infra/mongo/repositories/mongo-transaction.repository";

describe('Create Transaction Test', () => {
    
    beforeAll(async () => {
        await connectdb();
    });

    test('creating right transaction test', async () => {
        const useCase = CreateTransactionFactory.create(new MongoTransactionRepository());
        const result = await useCase.execute({userId: 'any_user_id', sourceAccountId: 'any_source_account_id', destinyAccountId: 'any_destiny_account_id', type: 'any_type', value: 10});
        expect(result.status).toBe(100);
    })
})
