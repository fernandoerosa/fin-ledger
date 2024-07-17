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