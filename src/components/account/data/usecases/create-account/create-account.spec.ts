import { ICreateAccount } from "@/components/account/domain/usecases/icreate-account";
import CreateAccountFactory from "../../factories/usecases/create-account.factory"
import { connectdb } from "@/shared/infra/mongo/database";

describe('CreateAccount', () => {
  test('create right account', async () => {
    await connectdb();
    const useCase: ICreateAccount = CreateAccountFactory.create();
    
    const result: ICreateAccount.Result = await useCase.execute({userId: 'any_id', name: 'any_name', email: 'any_email', password: 'any_password'} as ICreateAccount.Params); 
    const expected: ICreateAccount.Result = {status: 'success', message: 'Account created successfully'};
  
    expect(result).toStrictEqual(expected);
  });
});
