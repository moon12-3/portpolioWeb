import React from 'react';
import dummy from "../db/data.json";
import styles from './Project.module.css';

// 이미지 슬라이더
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Project() {
    let list = dummy.portpolio;
    const settings = {
        slide: 'div',
        dots: true,
        infinite: true,
        speed: 500,
        vertical : false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '10px',
    };
    return(
        <div id={styles.first}>
            <div className={styles.bigTitle}>My Project</div>
            <div className={styles.pCotainer}>
                    {
                        list.map((project, idx) => (
                            <div className={styles.pContent}>
                                <a href={project.github}><h1 className={styles.pTitle}>{project.title}</h1></a>
                                <div className={styles.outline}>{project.outline}</div>
                                <div className={styles.exp}>{project.explanation}</div>
                                <div className={styles.iContainer}>
                                <Slider {...settings}>
                                {project.imgs.map(img => (
                                    <div>
                                        <img src={require(`./pImg/${img}.png`)} className={styles.pImg} alt=""/>
                                    </div>
                                ))}
                                </Slider>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default Project;