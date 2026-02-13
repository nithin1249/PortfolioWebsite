import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
    return (
        <div id="history">
            <div className="items-container">
                <h1>Education and Work Experience</h1>
                <VerticalTimeline>

                    {/* 1. High School Education (Past) */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Jan 2022 - Dec 2023"
                        iconStyle={{ background: '#5000ca', color: 'rgb(255, 255, 255)' }}
                        icon={<FontAwesomeIcon icon={faGraduationCap} />}
                    >
                        <h3 className="vertical-timeline-element-title">South Australian Certificate of Education</h3>
                        <h4 className="vertical-timeline-element-subtitle">Norwood International High School</h4>
                        <p>
                            <strong>ATAR: 97.90</strong><br/>
                            Subjects: Specialist Mathematics, Mathematical Methods, Physics, and Chemistry.
                        </p>
                    </VerticalTimelineElement>

                    {/* 2. University Education (Present/Future) */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="July 2024 - July 2027"
                        iconStyle={{ background: '#5000ca', color: 'rgb(255, 255, 255)' }}
                        icon={<FontAwesomeIcon icon={faGraduationCap} />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Computer Science (Advanced)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Adelaide University</h4>
                        <p>
                            <strong>GPA: 6.75 / 7.00</strong>
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;