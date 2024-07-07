import { ICreateAccount } from "@/components/account/domain/usecases/icreate-account";
import CreateAcconut from "@/components/account/data/usecases/create-account/create-account";

export default class CreateAccountFactory {

    constructor() {
        throw new Error("Utility Class");   
    }

    static create(): ICreateAccount {
        return new CreateAcconut();
    }
}