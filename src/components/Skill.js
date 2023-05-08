import styles from "./Skill.module.css";
import sImg from "../img/skill.png"

function Skill() {
    return(
        <div className={styles.pContent}>
            <h1 className={styles.bTitle}>My Skill</h1>
            <img src={sImg} className={styles.skill}/>
        </div>
    );
}

export default Skill;