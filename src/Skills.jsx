import React from 'react';
import Navbar from './Navbar';
import Mainframe from './assets/mainframe-146403_960_720.png';
import COBOL from './assets/cobol.png';
import JCL from './assets/jcl.png';
import VSAM from './assets/VSAM.jpg';
import DB2 from './assets/db2.png';
import IMSDB from './assets/ims.png';
import SQL from './assets/sql.png';
import Python from './assets/python.png';
import HTML from './assets/html-icon.png';
import css from './assets/css-icon.png';
import Bootstrap from './assets/bootstrap-5-logo-icon.png';
import ReactJS from './assets/react-js-icon.png';
import GitHub from './assets/github-icon.png';
import './Skills.css'

function Section({icon, items, alt}) {
    return (
        <div className='section-container'>
            <div className='icon-container'>
                <img src={icon} className='skill-icon' alt={alt}/>
            </div>
            <div className='content-container'>
                {items.map((item, index) =>
                    <div key = {index}>
                        <p>{item.skill} - {item.proficiency}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function Skills() {
    const mainframeSkill = [{skill: 'IBM Mainframe', proficiency: 'Expert'}];
    const cobolSkill = [{skill: 'COBOL', proficiency: 'Expert'}];
    const jclSkill = [{skill: 'JCL', proficiency: 'Expert'}];
    const vsamSkill = [{skill: 'VSAM', proficiency: 'Intermediate'}];
    const db2Skill = [{skill: 'DB2', proficiency: 'Intermediate'}];
    const imsdbSkill = [{skill: 'IMS DB', proficiency: 'Intermediate'}];
    const sqlSkill = [{skill: 'SQL', proficiency: 'Intermediate'}];
    const pythonSkill = [{skill: 'Python', proficiency: 'Intermediate'}];
    const htmlSkill = [{skill: 'HTML', proficiency: 'Intermediate'}];
    const cssSkil = [{skill: 'CSS', proficiency: 'Intermediate'}];
    const bootstrapSkill = [{skill: 'Bootstrap', proficiency: 'Intermediate'}];
    const reactSkill = [{skill: 'React.js', proficiency: 'Intermediate'}];
    const GitHubSkill = [{skill: 'GutHub', proficiency: 'Intermediate'}];

    return (
        <div className='skills-page'>
            <Navbar/>
            <div className='skills-page-container'>
                <Section icon={Mainframe} alt="Mainframe" items={mainframeSkill} />
                <Section icon={COBOL} alt="COBOL" items={cobolSkill} />
                <Section icon={JCL} alt="JCL" items={jclSkill} />
                <Section icon={VSAM} alt="VSAM" items={vsamSkill} />
                <Section icon={DB2} alt="DB2" items={db2Skill} />
                <Section icon={IMSDB} alt="IMS DB" items={imsdbSkill} />
                <Section icon={SQL} alt="SQL" items={sqlSkill} />
                <Section icon={Python} alt="Python" items={pythonSkill} />
                <Section icon={HTML} alt="HTML" items={htmlSkill} />
                <Section icon={css} alt="CSS" items={cssSkil} />
                <Section icon={Bootstrap} alt="Bootstrap" items={bootstrapSkill} />
                <Section icon={ReactJS} alt="React.js" items={reactSkill} />
                <Section icon={GitHub} alt="GitHub" items={GitHubSkill} />
            </div> 
        </div>
    );
}

export default Skills