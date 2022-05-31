import dbConnect from '../../../utils/mongo'
import Orders from '../../../models/Orders'
import { ServiceError } from '../../../lib/errors';


export async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect();
    if (method === 'GET') {
        try {
            const order = await Orders.findById(id);
            res.status(200).json(order)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if (method === 'PUT') {
        try {
            const product = await Orders.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json({ message: 'updated successfully.', data: product });
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if (method === 'DELETE') {
        try {
            await Orders.findByIdAndDelete(id);
            res.status(200).json({message: 'successfully deleted.'})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default handler;