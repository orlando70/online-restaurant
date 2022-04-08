import mongoose from 'mongoose';
import { NotFoundError } from '../lib/errors';

const MONGO_URL = process.env.MONGO_URL

if (!MONGO_URL) {
    throw new NotFoundError('Mongodb url is missing in .env file')
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        }
        cached.promise = await mongoose.connect(MONGO_URL, opts).then((mongoose) => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect