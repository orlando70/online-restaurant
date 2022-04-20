import dbConnect from '../../../utils/mongo'
import Orders from '../../../models/Orders'
import { ServiceError } from '../../../lib/errors';


export default async function handler (req, res) {
    const { method, query:{id} } = req;

    dbConnect().then(async ()=>{
        if (method === 'GET') {
            try {
                const order = Orders.findById(id);
                res.status(200).json(order)
            } catch (error) {
                res.status(500).json(error)
            }
        }
        if (method === 'PUT') {
            try {
                
            } catch (error) {
                console.log(error);
            }
        }
        if (method === 'DELETE') {
            try {
                
            } catch (error) {
                console.log(error);
            }
        }
    })
}

export default handler;