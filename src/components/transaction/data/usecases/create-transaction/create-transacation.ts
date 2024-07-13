import { ICreateTransaction } from "@/components/transaction/domain/usecases/icreate-transaction";
import { ITransactionRepository } from "../../repositories/itransaction.repository";

export default class CreateTransaction implements ICreateTransaction {

    constructor(
        private readonly _transactionRepository: ITransactionRepository
    ) {}

    async execute(params: ICreateTransaction.Params): Promise<ICreateTransaction.Result> {
        var { userId, sourceAccountId, destinyAccountId, type, value } = params;
        const transaction = await this._transactionRepository.create(userId, sourceAccountId, destinyAccountId, type, value);
        
        transaction.isValidTransactio();

        return {
            status: 100,
            message: "Sucesso"
        }
    }
}