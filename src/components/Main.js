import React from 'react';
import styles from './Main.module.css';

function Main() {
    return(
    <div id={styles.first}>
        <div className={styles.blackBg}>
            <div className="title">
                <div className='de'>DEVELOPER PORTPOLIO</div>
                <div className='hi'>Hello, World.</div>
                <div className='name'>문채영입니다.</div>
            </div>
        </div>
    </div>
    )
}

export default Main;