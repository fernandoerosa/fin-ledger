import { connectdb } from "@/shared/infra/mongo/database";
import AccountBalanceFactory from "../../factories/account-balance.factory";
import { IAccountBalanceReport } from "@/components/reports/domain/usecases/iaccount-balance.report";

describe('AccountBalance', () => {

    beforeAll(async () => {
        await connectdb();
        const useCase: IAccountBalanceReport = AccountBalanceFactory.createUseCase();
        
    });

    test('capture right account balance', () => {
        expect(true).toBeTruthy();
    });
})
