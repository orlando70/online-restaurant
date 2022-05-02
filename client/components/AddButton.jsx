import styles from "../styles/AddButton.module.css";

const AddButton = ({setClose}) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>Add New Food</div>
  )
}

export default AddButton