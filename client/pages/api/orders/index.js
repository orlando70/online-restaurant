import dbConnect from '../../../utils/mongo'
import Orders from '../../../models/Orders'
import { ServiceError } from '../../../lib/errors';


export async function handler(req, res) {
    const { method } = req;

    await dbConnect();
    if (method === 'GET') {
        try {
            const allOrders = await Orders.find()
            res.status(200).json(allOrders)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if (method === 'POST') {
        try {
            const order = await Orders.create(req.body);
            console.log(order)
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default handler;