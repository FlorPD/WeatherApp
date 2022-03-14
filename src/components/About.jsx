import React from 'react'
import styles from "./styles/About.module.css"
import { BsLinkedin, BsGithub } from 'react-icons/bs';


function About() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
            Hello! My name is Florencia Perez Duarte, I'm a Full-Stack web developer from Santa Fe, Argentina. I'm super passionate about the IT world and i'm always interested in learning new technologies and practicing.
            <br></br>
            I developed this weather app during Henry's Bootcamp to practice React and CSS.
            <br></br>
            If you want to see more of my work or maybe contact me, here are my social networks. Thanks for watching!
            </div>
            <div className={styles.icons}>
            <a href="https://www.linkedin.com/in/florenciaperezduarte/" target="_blank"  rel="noreferrer" className={styles.link}><BsLinkedin size={30}/></a>
            <a href=" https://github.com/FlorPD" target="_blank"  rel="noreferrer"><BsGithub size={30}/></a>
            </div>
        </div>
    )
}

export default About
