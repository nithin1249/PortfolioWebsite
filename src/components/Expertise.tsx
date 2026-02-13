import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Full Stack & Web Technologies
const labelsFirst = [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Material UI",
    "Chart.js"
];

// Systems, Languages & Data
const labelsSecond = [
    "C++17",
    "Python",
    "CMake",
    "Shell Scripting",
    "LLVM",
    "System Architecture",
];

// DevOps & Tools
const labelsThird = [
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub Actions",
    "Linux",
    "CI/CD",
    "Vercel/Netlify"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    {/* Section 1: Full Stack */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Full Stack Web Development</h3>
                        <p>
                            I build responsive, data-driven web applications using the MERN stack.
                            My experience includes creating real-time dashboards (Crypto-Hunter),
                            managing global state with React Context, and integrating secure authentication flows.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Systems & C++ */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x"/>
                        <h3>Systems Programming</h3>
                        <p>
                            Deep interest in low-level systems and compiler construction.
                            I have engineered a custom Jack-to-LLVM compiler in C++17, focusing on
                            memory optimization, multi-threading, and robust error handling.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Section 3: DevOps */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <h3>DevOps & Tools</h3>
                        <p>
                            I ensure reliable software delivery through automation.
                            Proficient in setting up CI/CD pipelines with GitHub Actions,
                            containerizing applications using Docker/Kubernetes, and managing cross-platform build environments.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;