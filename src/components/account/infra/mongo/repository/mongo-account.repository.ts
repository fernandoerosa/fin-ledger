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

        mongoAccount.save();

        return new Promise((resolve) => resolve(new Account("123", userId, name, email, password, 0)));
    }
}