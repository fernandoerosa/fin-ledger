import { Schema, model } from 'mongoose';

const schema = new Schema({
    userId: String,
    sourceAccountId: String,
    destinyAccountId: String,
    type: String,
    value: Number,
});

export const MongoTransaction = model('Transaction', schema);