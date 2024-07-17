import { ITransactionRepository } from "@/components/transaction/data/repositories/itransaction.repository";
import Transaction from "@/components/transaction/domain/entity/transaction";
import { MongoTransaction } from "../entity/mongo-transaction";

export default class MongoTransactionRepository implements ITransactionRepository {

    async captureReceived(accountId: string): Promise<Array<Transaction>> {
        const mongoTransactions = await MongoTransaction.find({destinyAccountId: accountId});
        const transactions = new Array<Transaction>();
        
        mongoTransactions.map((transaction) => {
            transactions.push(new Transaction(transaction._id.toString(), transaction.userId!, transaction.sourceAccountId!, transaction.destinyAccountId!, transaction.type!, transaction.value!));
        });

        return transactions;
    };

    async captureSent(accountId: string): Promise<Array<Transaction>> {
        const mongoTransactions = await MongoTransaction.find({sourceAccountId: accountId});
        const transactions = new Array<Transaction>();
        
        mongoTransactions.map((transaction) => {
            transactions.push(new Transaction(transaction._id.toString(), transaction.userId!, transaction.sourceAccountId!, transaction.destinyAccountId!, transaction.type!, transaction.value!));
        });

        return transactions;
    };

    async create(userId: string, sourceAccountId: string, destinyAccountId: string, type: string, value: number): Promise<Transaction> {
        const mongoTransaction = new MongoTransaction({
            userId: userId,
            sourceAccountId: sourceAccountId,
            destinyAccountId: destinyAccountId,
            type: type,
            value: value
        });
        mongoTransaction.save();

        return new Transaction(mongoTransaction._id.toString(), mongoTransaction.userId!, mongoTransaction.sourceAccountId!, mongoTransaction.destinyAccountId!, mongoTransaction.type!, mongoTransaction.value!);
    }
}