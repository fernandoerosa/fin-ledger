import { ICaptureAccount } from "@/components/account/domain/usecases/icapture-account";
import MongoAccountRepository from "@/components/account/infra/mongo/repository/mongo-account.repository";
import { CaptureAccount } from "../../usecases/capture-account/capture-account";

export default class CaptureAccountFactory {

    constructor() {
        throw new Error("Utility Class");   
    }

    static create(): ICaptureAccount {
        return new CaptureAccount(new MongoAccountRepository());
    }
}