import styles from '../../styles/Login.module.css'
import {useState} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = async() => {
        try {
            await axios.post('http://localhost:3000/api/login', {username, password})
            router.push('/admin')
        } catch (error) {
            setError(true);
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1> Admin Dashboard </h1>
            <input placeholder={'username'} className={styles.input} onChange={(e) =>setUsername(e.target.value)} />
            <input placeholder={'password'} type="password" className={styles.input} onChange={(e) =>setPassword(e.target.value)} />
            <button className={styles.button} onClick={handleLogin}>
                Sign in
            </button>
            {error && <span className={styles.error}> Incorrect username or password. </span>}
        </div>
    </div>
  )
}

export default Login