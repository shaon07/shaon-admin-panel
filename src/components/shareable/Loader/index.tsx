import { styles } from "@/styles/tailwind/Loader/index.css";

const Loader = () => {
    return (
        <div className={`${styles.loaderWrapper}`}>
            <div className={`${styles.loader}`}></div>
        </div>
    );
};

export default Loader;
