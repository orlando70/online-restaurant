import styles from '../../styles/Admin.module.css';
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'

const Index = ({orders, foods}) => {
    const [foodList, setFoodList] = useState(foods);
    const [orderList, setOrderList] = useState(orders);
    const status = ['preparing', 'on the way', 'delivered']

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete('http://localhost:3000/api/products/' + id)
            setFoodList(foodList.filter((food) => {food._id !== id}));
        } catch (error) {
            console.log(error);
        }
    }

    const handleNextStage = async (id) => {
        const order = orderList.filter((order) => order._id === id)[0]
        try {
            const res = await axios.put('http://localhost:3000/api/orders/' + id, {status: order.status + 1})
            setOrderList([
                ...orderList.filter(order => order._id !== id),
                res.data,
            ])
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {foodList.map((food) => (
                    <tbody key={food._id}>
                        <tr className={styles.trTitle}>
                            <td>
                                <Image src={food.image} alt="" width={50} height={50} objectFit='cover' />
                            </td>
                            <td>{food._id}</td>
                            <td>{food.title}</td>
                            <td>${food.prices[0]}</td>
                            <td>
                                <button className={styles.button} >Edit</button>
                                <button className={styles.button} onClick={() => handleDelete(food._id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </div>
            <div className={styles.items}>
                <h1 className={styles.title}>Orders</h1>

                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {orderList.map((order) => (
                    <tbody key={order._id}>
                        <tr className={styles.trTitle}>
                            <td>{order._id}</td>
                            <td>{order.customer}</td>
                            <td>${order.total}</td>
                            <td>{order.method === 0 ? <span>cash</span> : <span>paid</span>}</td>
                            <td>{status[order.status]}</td>
                            <td>
                                <button onClick={() => handleNextStage(order._id)}>Next stage</button>
                            </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const foodList = await axios.get('http://localhost:3000/api/products')
    const orderList = await axios.get('http://localhost:3000/api/orders')

    return {
        props: {
            orders: orderList.data,
            foods: foodList.data
        }
    }
}

export default Index