import { IAccountRepository } from "@/components/account/data/repositories/iaccount.repository";
import Account from "@/components/account/domain/entity/account";
import { MongoAccount } from "../entity/mongo-account";
import { connect } from 'mongoose';

export default class MongoAccountRepository implements IAccountRepository {
    async create(userId: string, name: string, email: string, password: string): Promise<Account> {
        
        // TODO -> Desacoplar conexão com o MongoDB
        await connect('mongodb://127.0.0.1:27017/test');

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