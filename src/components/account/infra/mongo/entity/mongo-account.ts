import { Schema, model } from 'mongoose';

const schema = new Schema({
    userId: String,
    name: String,
    email: String,
    password: String,
    type: Number
});

export const MongoAccount = model('Account', schema);