import { Schema, model } from 'mongoose';

const schema = new Schema({
    userId: String,
    sourceAccountId: { type: String, index: true },
    destinyAccountId: { type: String, index: true },
    type: String,
    value: Number,
});

schema.index({ sourceAccountId: 1, destinyAccountId: 1 });

export const MongoTransaction = model('Transaction', schema);

export const getTotalBalanceByAccountId = async (accountId: string) => {
    try {
        const result = await MongoTransaction.aggregate([
            {
                $match: {
                    $or: [
                        { destinyAccountId: accountId },
                        { sourceAccountId: accountId }
                    ]
                }
            },
            {
                $group: {
                    _id: accountId,
                    totalCredit: {
                        $sum: {
                            $cond: [
                                { $eq: ["$destinyAccountId", accountId] },
                                "$value",
                                0
                            ]
                        }
                    },
                    totalDebit: {
                        $sum: {
                            $cond: [
                                { $eq: ["$sourceAccountId", accountId] },
                                "$value",
                                0
                            ]
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    accountId: "$_id",
                    TotalBalance: { $subtract: ["$totalCredit", "$totalDebit"] }
                }
            }
        ]);

        return result[0];
    } catch (error) {
        console.error("Erro ao calcular o saldo total:", error);
    }
}