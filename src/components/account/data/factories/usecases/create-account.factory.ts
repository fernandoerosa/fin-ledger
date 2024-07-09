import { ICreateAccount } from "@/components/account/domain/usecases/icreate-account";
import CreateAcconut from "@/components/account/data/usecases/create-account/create-account";
import MongoAccountRepository from "@/components/account/infra/mongo/repository/mongo-account.repository";

export default class CreateAccountFactory {

    constructor() {
        throw new Error("Utility Class");   
    }

    static create(): ICreateAccount {
        return new CreateAcconut(new MongoAccountRepository());
    }
}