import { ITransactionRepository } from "../repositories/itransaction.repository";
import CreateTransaction from "../usecases/create-transaction/create-transacation";

export default class CreateTransactionFactory {
    private constructor() {
        throw Error("Utility Class");
    }

    static createUseCase(transactionRepository: ITransactionRepository) {
        return new CreateTransaction(transactionRepository);
    }
}