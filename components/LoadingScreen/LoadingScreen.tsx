import styles from "./LoadingScreen.module.sass";
import React from "react";
import Popup from "../Popup/Popup";
import HelixSpinner from "../spinners/HelixSpinner/HelixSpinner";


interface LoadingScreenProps {
    open: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ open }) => {
    return (
        <Popup open={open}>
            <div className={styles.content} data-test="loadingScreen">
                <HelixSpinner />
            </div>
        </Popup>
    );
}

export default LoadingScreen;
