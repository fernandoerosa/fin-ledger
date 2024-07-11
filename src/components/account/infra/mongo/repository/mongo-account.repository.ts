import { IAccountRepository } from "@/components/account/data/repositories/iaccount.repository";
import Account from "@/components/account/domain/entity/account";
import { MongoAccount } from "../entity/mongo-account";

export default class MongoAccountRepository implements IAccountRepository {
    
    async capture(userId: string): Promise<Array<Account>> {
        const mongoAccounts = await MongoAccount.find({userId: userId});

        const accounts = new Array<Account>();

        mongoAccounts.map((account) => {
            accounts.push(new Account(account._id.toString(), account.userId!, account.name!, account.email!, account.password!, account.type!));
        });

        return accounts; 
    }

    async create(userId: string, name: string, email: string, password: string): Promise<Account> {
        const mongoAccount = new MongoAccount({
            userId: userId,
            name: name,
            email: email,
            password: password,
            type: 0
        });
        await mongoAccount.save();

        const account = new Account(mongoAccount._id.toString(), userId, name, email, password, 0);
        
        return account;
    }
}