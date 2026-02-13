import React from "react";
import mock01 from '../assets/images/compiler.png';
import mock02 from '../assets/images/crypto-hunter.png';
import mock03 from '../assets/images/wordle.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return(
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                {/* 1. Jack Compiler Project */}
                <div className="project">
                    <a href="https://github.com/nithin1249/NAND2TETRIS-JackCompiler" target="_blank" rel="noreferrer">
                        <img src={mock01} className="zoom" alt="Jack Compiler Thumbnail" width="100%"/>
                    </a>
                    <a href="https://github.com/nithin1249/NAND2TETRIS-JackCompiler" target="_blank" rel="noreferrer">
                        <h2>Nand2Tetris: Jack Compiler</h2>
                    </a>
                    <p>
                        This high-performance Jack Compiler is a systems-level tool built in C++ that transforms high-level
                        Jack source code into Hack VM instructions through a rigorous four-stage pipeline. The architecture
                        utilizes a zero-allocation philosophy and a multi-threaded parallel engine that achieves throughput
                        speeds of 100,000 lines/sec on a single core.
                    </p>
                    <p>
                        I implemented a robust CI/CD pipeline using GitHub Actions that automatically builds, tests, and
                        packages native binaries for Windows, macOS, and Linux, handling complex environmental setup including
                        permanent PATH configuration and headless verification via xvfb.
                    </p>
                </div>

                {/* 2. Crypto-Hunter Dashboard */}
                <div className="project">
                    <a href="https://github.com/nithin1249/Crypto-Hunter-Real-Time-Analytics-Dashboard-" target="_blank" rel="noreferrer">
                        <img src={mock02} className="zoom" alt="Crypto-Hunter Thumbnail" width="100%"/>
                    </a>
                    <a href="https://github.com/nithin1249/Crypto-Hunter-Real-Time-Analytics-Dashboard-" target="_blank" rel="noreferrer">
                        <h2>Crypto-Hunter: Analytics Dashboard</h2>
                    </a>
                    <p>
                        A full-stack, real-time cryptocurrency dashboard built using React and Material UI with a
                        mobile-first, dark-themed aesthetic. To manage global states—such as switching between USD/INR or
                        tracking login status—I implemented the React Context API to ensure a smooth experience without
                        performance lag.
                    </p>
                    <p>
                        The backend uses Node.js and MongoDB to securely store personalized watchlists, while Firebase handles
                        OAuth and secure authentication. The application is deployed via Netlify, providing a fast environment
                        for real-time market tracking.
                    </p>
                </div>

                {/* 3. Wordle Clone */}
                <div className="project">
                    <a href="https://github.com/nithin1249/Wordle-Clone" target="_blank" rel="noreferrer">
                        <img src={mock03} className="zoom" alt="Wordle Clone Thumbnail" width="100%"/>
                    </a>
                    <a href="https://github.com/nithin1249/Wordle-Clone" target="_blank" rel="noreferrer">
                        <h2>Interactive Wordle Clone</h2>
                    </a>
                    <p>
                        Developed using MATLAB App Designer, this interactive application replicates the classic 5x6 word grid
                        using event-driven programming to handle real-time UI updates. The core engine features a
                        custom-built matching algorithm providing color-coded feedback while accurately managing
                        duplicate letters.
                    </p>
                    <p>
                        I implemented a robust input validation system and a dedicated state management system that
                        tracks attempts in real-time. This project showcases the intersection of Object-Oriented Programming
                        and GUI design within a polished MATLAB environment.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;