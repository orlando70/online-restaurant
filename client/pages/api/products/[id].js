import dbConnect from '../../../utils/mongo'
import Product from '../../../models/Product'
import { ServiceError } from '../../../lib/errors';


export default async function handler(req, res) {
    const { method, query: { id }, cookies } = req;
    const token = cookies.token;

    await dbConnect();
    if (method === 'GET') {
        try {
            const product = await Product.findById(id)
            res.status(200).json(product)
        } catch (e) {
            throw new ServiceError(e)
        }
    }
    if (method === 'POST') {
        if (!token || token !== process.env.TOKEN) {
            return res.status(401).json('You are unauthorized to perform this action')
        }
        try {
            const product = await Product.create(req.body)
            res.status(201).json(product)
        } catch (e) {
            throw new ServiceError(e)
        }
    }

    if (method === 'DELETE') {
        if (!token || token !== process.env.TOKEN) {
            return res.status(401).json('You are unauthorized to perform this action')
        }
        try {
            await Product.findByIdAndDelete(id);
            res.status(200).json({message: 'successfully deleted.'})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}