import React from 'react';
import dummy from "../db/data.json";
import styles from './Project.module.css';

function Project() {
    let list = dummy.portpolio;
    return(
        <div id={styles.first}>
            <div className={styles.bigTitle}>My Project</div>
            <div className={styles.pCotainer}>
                    {
                        list.map(project => (
                            <div className={styles.pContent}>
                                <h1>{project.title}</h1>
                                <p>{project.outline}</p>
                                <p>{project.explanation}</p>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default Project;