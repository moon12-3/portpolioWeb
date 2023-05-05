import React from 'react';
import styles from './Main.module.css';
import arrow from './img/arrow.png'
import {Link} from "react-router-dom";

function Main() {
    return(
    <div>
            <div className={styles.title}>
                <div className={styles.de}>DEVELOPER PORTPOLIO</div>
                <div className={styles.hi}>Hello, World.</div>
                <div className={styles.name}>문채영입니다.</div>
            </div>

            <div className={styles.arrow}>
                <img src={arrow}/>
                <div><Link to='/projects'>프로젝트 보러가기</Link></div>
            </div>
    </div>
    )
}

export default Main;