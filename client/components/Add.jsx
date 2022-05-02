import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/AddButton.module.css'

const Add = ({ setClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value
        setPrices(currentPrices);
    }
    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value })
    }

    const handleExtra = () => {
        setExtraOptions((prev) => [...prev, extra]);
    }

    const handleCreate = async () => {
        const data = new FormData();
        data.append('file', file);
        data.append("upload_preset", "images")
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/diqfuh5ys/image/upload", data)
            const {url} = uploadRes.data;
            const newFood = {
                title,
                desc,
                extraOptions,
                prices,
                image: url
            }
            await axios.post("http://localhost:3000/api/products", newFood);
            setClose(true);
        } catch (error) {
            console.log(error);
        } 
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={() => setClose(true)} className={styles.close}>X</span>
                <h1>Add A New Food</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Choose an Image</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input className={styles.input} type="text" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Desc</label>
                    <textarea type="text" rows={4} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <div className={styles.priceContainer}>
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="number"
                            placeholder="small"
                            onChange={(e) => changePrice(e, 0)} />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="number"
                            placeholder="medium"
                            onChange={(e) => changePrice(e, 1)} />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="number"
                            placeholder="large"
                            onChange={(e) => changePrice(e, 2)} />
                    </div>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Extra</label>
                    <div className={styles.extra}>
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="text"
                            placeholder="item"
                            name='text'
                            onChange={handleExtraInput} />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="number"
                            placeholder="price"
                            name='price'
                            onChange={handleExtraInput} />
                        <button className={styles.button} onClick={handleExtra}> Add </button>
                    </div>
                    <div className={styles.extraItems}>
                        {extraOptions.map((option) => (
                            <span key={option.text} className={styles.extraItem}>{option.text}</span>
                        ))}
                    </div>
                </div>
                <button className={styles.addButton} onClick={handleCreate} > Create</button>
            </div>
        </div>
    )
}

export default Add