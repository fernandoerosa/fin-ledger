import { IAccountRepository } from "@/components/account/data/repositories/iaccount.repository";
import Account from "@/components/account/domain/entity/account";
import { MongoAccount } from "../entity/mongo-account";

export default class MongoAccountRepository implements IAccountRepository {
    async create(userId: string, name: string, email: string, password: string): Promise<Account> {
        const mongoAccount = new MongoAccount({
            userId: userId,
            name: name,
            email: email,
            password: password,
            type: 0
        });

        await mongoAccount.save();
        return new Promise((resolve) => resolve(new Account(mongoAccount._id!.toString(), userId, name, email, password, 0)));
    }
}