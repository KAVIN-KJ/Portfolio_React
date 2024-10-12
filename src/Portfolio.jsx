import React, { useState } from 'react';
import './App.css';
import './index.css';
import profile from './assets/profile_new1.jpeg'
import gmail from './assets/gmail.svg'
import git from './assets/githublogo.svg'
import linked from './assets/linkedinlogo.svg'
import insta from './assets/instagramlogo.svg'
import frontend from './assets/Frontend.png'
import android from './assets/Android.png'
import react from './assets/react.svg'
import linux from './assets/Linux.png'
import resume from './assets/UPDATED RESUME.pdf'
import problemsolving from './assets/ProblemSolving.png'
const Portfolio = () => {
    const[img,setImg] = useState(frontend);
    return (
        <div className='portfolio-container'>
            <div className="scroll-watcher"></div>
            <nav className="nav">
                <div className="navbar">
                    <div className="links"><a className="home" href="#home">Home</a></div>
                    <div className="links"><a className="about" href="#About">About</a></div>
                    <div className="links"><a className="education" href="#education">Education</a></div>
                    <div className="links"><a className="skills" href="#skills">Skills</a></div>
                    <div className="links"><a className="projects" href="#projects">Projects</a></div>
                    <div className="links"><a className="connect" href="#connect">Connect With Me</a></div>
                </div>
            </nav>

            <section id="home">
                <div className="container">
                    <img src={profile} alt="Profile" className="profile" />
                    <div className="greeting">
                        <h1>Hi <label role="img" aria-label="wave">👋🏻</label> I'm <span>Kavin Raja</span></h1>
                    </div>
                    <div className="resume">
                        <a href={resume} download>Download CV</a>
                    </div>
                </div>
            </section>

            <section id="About">
                <h1>ABOUT ME <span role="img" aria-label="emoji">⁉️</span></h1>
                <div className="container">
                    <div className="content">
                        <h2>I'm an <span className="ece">Electronics Engineer</span></h2>
                        <p>
                            I am currently pursuing a degree in Electronics and Communication Engineering at Sri Krishna College of Technology, Coimbatore.
                            Despite being from a core engineering branch, I have a strong interest in developing web applications. To further this passion,
                            I am actively learning MERN Stack Development. Additionally, I excel in problem solving and have a solid foundation in Java OOP,
                            MySQL, and Data Structures and Algorithms (DSA).
                        </p>
                    </div>
                    <div className="interest">
                        <div> 
                            <h1>I'm Interested in</h1>
                            <ul>
                                <li onClick={()=>{setImg(frontend)}} className="fntend">Frontend Development</li>
                                <li onClick={()=>{setImg(android)}} >Android App Development</li>
                                <li onClick={()=>{setImg(react)}}>ReactJS</li>
                                <li onClick={()=>{setImg(problemsolving)}}> Problem solving</li>
                                <li onClick={()=>{setImg(linux)}}>Linux</li>
                            </ul>
                        </div>
                        <div className='interest-image'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="education">
                <h1>EDUCATION <span role="img" aria-label="graduation">🎓</span></h1>
                <div className="container">
                    <div className="clg">
                        <h3>B.E Electronics and Communication Engineering</h3>
                        <b style={{ color: 'purple' }}>2022 - 2026</b> - Sri Krishna College of Technology, Coimbatore
                    </div>
                    <div className="schl">
                        <h3>Higher Secondary</h3>
                        <b style={{ color: 'purple' }}>2022</b> - L.M.H.S.S, Pollachi
                    </div>
                </div>
            </section>

            <section id="skills">
                <h1>SKILLS <span role="img" aria-label="tools">🔧</span></h1>
                <div class="container">
            <div style={{margin:"15px"}}>
                Java
                <div class="skill">
                    <div id="skill" class="skill-java"></div>
                </div>
            </div>

            <div style={{margin:"15px"}}>
                Kotlin
                <div class="skill">
                    <div id="skill" class="skill-kotlin"></div>
                </div>
            </div>
            <div style={{margin:"15px"}}>
                C++
                <div class="skill">
                    <div id="skill" class="skill-cpp"></div>
                </div>
            </div>
            <div style={{margin:"15px"}}>
                HTML, CSS & JS
                <div class="skill">
                    <div id="skill" class="skill-html"></div>
                </div>
            </div>
            <div style={{margin:"15px"}}>
                Android
                <div class="skill">
                    <div id="skill" class="skill-android"></div>
                </div>
            </div>
            <div style={{margin:"15px"}}>
                ReactJS
                <div class="skill">
                    <div id="skill" class="skill-react"></div>
                </div>
            </div>
            <div style={{margin:"15px"}}>
                MySQL DBMS
                <div class="skill">
                    <div id="skill" class="skill-dbms"></div>
                </div>
            </div>
            <div style={{margin:"15px"}}>
                Linux
                <div class="skill">
                    <div id="skill" class="skill-linux"></div>
                </div>
            </div>
        </div>
            </section>

            <section id="projects">
                <h1>PROJECTS <span role="img" aria-label="projects">🧑🏻‍💻</span></h1>
                <div className="container">
                    {projects.map((project) => (
                        <div key={project.title} className={project.className}>
                            <div>
                                <h3>{project.title}</h3>
                                <b>Description</b>
                                <p>{project.description}</p>
                                <b>Technologies Used</b>
                                <ul>
                                    {project.technologies.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <a className="repo-link" target="_blank" rel="noreferrer" href={project.link}>
                                    Github
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="connect">
                <div className="container">
                    <h1>CONNECT WITH ME <span role="img" aria-label="earth">🌐</span></h1>
                    <div className="connect-links">
                        {socialLinks.map((social) => (
                            <a key={social.link} target="_blank" rel="noreferrer" href={social.link}>
                                <img src={social.image} alt={social.alt} style={{ padding: social.padding }} />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const projects = [
    {
        title: 'TIC-TAC-TOE using Java',
        description: 'Developed a simple Tic Tac Toe game for Android using Java. Featured an intuitive interface, turn-based gameplay, and basic win logic.',
        technologies: ['Android Studio', 'Java'],
        link: 'https://github.com/KAVIN-KJ/TIC_TAC_TOE-using-java.git',
        className: 'tictac',
    },
    {
        title: 'Web Based Calculator using HTML, CSS & JS',
        description: 'Designed and implemented a basic calculator application using ReactJS. Enabled users to perform arithmetic operations with real-time updating.',
        technologies: ['HTML', 'CSS', 'Javascript'],
        link: 'https://github.com/KAVIN-KJ/Calculator.git',
        className: 'calci',
    },
    {
        title: 'Frontend Replica of Google-Chrome',
        description: 'Designed a Replica of a browser using ReactJS inspired from Google chrome with implementation of various APIs like search engine, image search, Dictionary, News and an API for weather',
        technologies: ['ReactJS', 'Javascript (ES6)', 'Axios for API Requests'],
        link: 'https://github.com/KAVIN-KJ/Zeno-Search.git',
        className: 'zeno',
    },
    {
        title: 'SkySage - A real time Weather Application',
        description: 'Created a weather application that fetches real time weather data of a requested city. Used open source API(openweathermap.org) for retrieving weather parameters like Temperature, Pressure, Humidity, Hourly and Daily Forecast',
        technologies: ['ReactJS', 'Javascript (ES6)', 'Axios for API Requests', 'MongoDB', 'Express'],
        link: 'https://github.com/KAVIN-KJ/SkySage',
        className: 'skysage',
    },
];

const socialLinks = [
    { link: 'mailto:kavinkj2004@gmail.com', image: gmail, alt: 'Gmail', padding: '0px 50px 0px 50px' },
    { link: 'https://github.com/KAVIN-KJ', image: git, alt: 'Github' },
    { link: 'https://www.linkedin.com/in/kavin-raja-k-j-53773b256/', image: linked, alt: 'LinkedIn' },
    { link: 'https://www.instagram.com/k_j_k_r/', image: insta, alt: 'Instagram' },
];

export default Portfolio;