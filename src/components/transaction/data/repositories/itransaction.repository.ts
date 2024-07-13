import Transaction from "../../domain/entity/transaction";

export interface ITransactionRepository {
    create: (userId: string, sourceAccountId: string, destinyAccountId: string, type: string, value: number) => Promise<Transaction>;
}