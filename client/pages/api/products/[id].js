import dbConnect from '../../../utils/mongo'
import Product from '../../../models/Product'
import { ServiceError } from '../../../lib/errors';


export default async function handler(req, res) {
    const { method, query: {id} } = req;

    dbConnect()

    if (method === 'GET') {
        try {
            const product = await Product.findById(id)
            res.status(200).json(product)
        } catch (e) {
            throw new ServiceError(e)
        }
    }
    if (method === 'POST') {
        try {
            const product = await Product.create(req.body)
            res.status(201).json(product)
        } catch (e) {
            throw new ServiceError(e)
        }
    }
}