import { ICreateAccount } from "@/components/account/domain/usecases/icreate-account";
import { connectdb } from "@/shared/mongo/database";
import CreateAccountFactory from "../../factories/usecases/create-account.factory";
import { ICaptureAccount } from "@/components/account/domain/usecases/icapture-account";
import CaptureAccountFactory from "../../factories/usecases/capture-account.factory";

describe('CaptureAccount', () => {
    beforeAll(async () => {
        await connectdb();
        const useCase: ICreateAccount = CreateAccountFactory.create();
        await useCase.execute({userId: 'abc123', name: 'any_name', email: 'any_email', password: 'any_password'} as ICreateAccount.Params); 
    });
    test('capture right account', async () => {
        const useCase: ICaptureAccount = CaptureAccountFactory.create();
        const result: ICaptureAccount.Result = await useCase.execute({userId: 'abc123'});
        expect(result.accounts);
    });
})
