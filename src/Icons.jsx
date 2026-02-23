import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import DocumentsIcon from './assets/icons/Documents.webp';
import ExplorerIcon from './assets/icons/Explorer-outline.webp';
import InfoIcon from './assets/icons/Info.webp';
import MailIcon from './assets/icons/Mail.webp';
import NotepadIcon from './assets/icons/Notepad.webp';
import Portrait from './assets/portrait.webp';

function Icons(){
    const [showInfo, setShowInfo] = useState(true);
    const [showLinks, setShowLinks] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [showContact, setShowContact] = useState(false);

    return(
        <div id="icons">
            <ul>
                <li>
                    <a className="link" href="#" onClick={(e) => { e.preventDefault(); setShowInfo(true); }}><img src= {InfoIcon} alt="" />About</a>
                </li>
                <li>
                    <a className="link" href="#" onClick={(e) => { e.preventDefault(); setShowLinks(true); }}><img src={ExplorerIcon} alt="" />Links</a>
                </li>
                <li>
                    <a className="link" href="#" onClick={(e) => { e.preventDefault(); setShowProjects(true); }}><img src={DocumentsIcon} alt="" />Projects</a>
                </li>
                <li>
                    <a className="link" href="#" onClick={(e) => { e.preventDefault(); setShowResume(true); }}><img src={NotepadIcon} alt="" />Resume</a>
                </li>
                {/* To add once contact page is secured */}
                {/*
                
                <li>
                    <a className="link" href="#" onClick={(e) => { e.preventDefault(); setShowContact(true); }}><img src={MailIcon} alt="" />Contact</a>
                </li>

                */}
            </ul>

            {/* About Modal */}
            <Modal 
                show={showInfo} 
                onHide={() => setShowInfo(false)} 
                backdrop="static" 
                keyboard={false}
                className="info-modal"
                centered
            >
                <Modal.Header className="modal-header">
                    <Modal.Title>About Me</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div className="layout_1">
                        <div className="illustration">
                            <img src = {Portrait} alt="Portrait" id='portrait'/>
                        </div>
                        <div className="contact-form">
                            <h1>Hello There,</h1>
                            <h3>I'm Francis Villanueva</h3>
                            <h6>Welcome to my portfolio</h6>
                            <hr/>
                            <p>I'm a computer science student from Pamantasan ng Lungsod ng Pasig.
                                I have a passion for programming and eager to learn and grow as a developer.
                            </p>
                        </div>
                    </div>
                </Modal.Body >
                <Modal.Footer className="footer">
                    <Button variant="primary" onClick={() => setShowInfo(false)} className="retro-button">
                        Get in Touch
                    </Button>
                    <Button variant="secondary" onClick={() => setShowInfo(false)} className="retro-button">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Links Modal */}
            <Modal 
                show={showLinks} 
                onHide={() => setShowLinks(false)} 
                backdrop="static" 
                keyboard={false}
                className="links-modal"
                centered
            >
                <Modal.Header className="modal-header">
                    <Modal.Title>Links</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div className="layout_0">
                        
                    </div>
                </Modal.Body >
                <Modal.Footer className="footer">
                    <div className="layout_2">
                        
                    </div>
                    <Button variant="secondary" onClick={() => setShowLinks(false)} className="retro-button">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Projects Modal */}
            <Modal 
                show={showProjects} 
                onHide={() => setShowProjects(false)} 
                backdrop="static" 
                keyboard={false}
                className="projects-modal"
                size="lg"
                centered
            >
                <Modal.Header className="modal-header">
                    <Modal.Title>Projects</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div className="layout_0">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                        </p>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                        </p>
                    </div>
                </Modal.Body >
                <Modal.Footer className="footer">
                    <Button variant="secondary" onClick={() => setShowProjects(false)} className="retro-button">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Resume Modal */}
            <Modal 
                show={showResume} 
                onHide={() => setShowResume(false)} 
                backdrop="static" 
                keyboard={false}
                className="resume-modal"
                size="lg"
                centered
            >
                <Modal.Header className="modal-header">
                    <Modal.Title>Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body" id='resumeModal'>
                    <div className="layout_0">
                        <h1>Francis Villanueva</h1>
                        <h6>Computer Science Student | <a href="https://github.com/francisvillanueva" target="_blank" rel="noopener noreferrer">github.com/francisvillanueva</a> | <a href="https://linkedin.com/in/frncisv/" target="_blank" rel="noopener noreferrer">linkedin.com/in/frncisv/</a></h6>

                        <div className="resume-section">
                            <h3>Education</h3>
                            <hr />
                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h4>Pamantasan ng Lungsod ng Pasig</h4>
                                    <span className="resume-date">2022 – Present</span>
                                </div>
                                <p className="resume-degree">Bachelor of Science in Computer Science</p>
                            </div>
                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h4>Eusebio High School</h4>
                                    <span className="resume-date">2018 – 2020</span>
                                </div>
                                <p className="resume-degree">Senior High School - STEM <br />Graduated with Honors</p>
                            </div>
                        </div>
                        <div className="resume-section">
                            <h3>Experience</h3>
                            <hr />
                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h4>PC Technician</h4>
                                    <span className="resume-date">2020 - Present</span>
                                </div>
                                <div className="resume-item-body">
                                    <p className="resume-degree">
                                        •	Performed component installation, upgrades, maintenance, repairs, and replacements for CPU, GPUs, RAM, PSUs, and motherboards. <br />
                                        •   Communicated effectively with customers who lacked technical knowledge.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="resume-section">
                            <h3>Skills</h3>
                            <hr />
                            <div className="resume-item">
                                <div className="resume-item-body">
                                    <p className="resume-degree">
                                        <b>Languages:</b> Python, Java, C#, JavaScript, HTML/CSS, PHP
                                    </p>
                                    <p className="resume-degree">
                                        <b>Frameworks/Libraries:</b> React, Node.js, Express, Flask, Laravel
                                    </p>
                                    <p className="resume-degree">
                                        <b>Tools:</b> Git, Visual Studio, Visual Studio Code, InteliJ, Eclipse, Android Studio, XAMPP, DB Browser for SQLite
                                    </p>
                                    <p className="resume-degree">
                                        <b>Database:</b> MySQL
                                    </p>
                                    <p className="resume-degree">
                                        <b>Operating Systems:</b> Windows, Linux (Ubuntu, Debian)
                                    </p>
                                    <p className="resume-degree">
                                        <b>Libraries:</b> Panda, NumPy, Matplotlib, Seaborn
                                    </p>
                                    <p className="resume-degree">
                                        <b>Other Tools:</b> Word, Excel, PowerPoint, Da Vinci Resolve, OBS Studio, Blender, Figma, Claude, ChatGPT, Gemini, Perplexity, Windsurf
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="resume-section">
                            <h3>Certificates</h3>
                            <hr />
                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <div style={{display: 'flex', flexDirection: 'row', gap: '0.5vh'}}>
                                        <h4>SHE++</h4> | <i>PhilDev, Wells Fargo</i>
                                    </div>
                                    <span className="resume-date">2025</span>
                                </div>
                                <div className="resume-item-header">
                                    <div style={{display: 'flex', flexDirection: 'row', gap: '0.5vh'}}>
                                        <h4>Alibaba Cloud</h4> | <i>Alibaba</i>
                                    </div>
                                    <span className="resume-date">2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body >
                <Modal.Footer className="footer">
                    <Button variant="secondary" onClick={() => setShowResume(false)} className="retro-button">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Contact Modal */}
            <Modal 
                show={showContact} 
                onHide={() => setShowContact(false)} 
                backdrop="static" 
                keyboard={false}
                className="contact-modal"
                centered
            >
                <Modal.Header className="header">
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div className="layout_1">
                        <div className="contact-illustration">
                        </div>
                        <div className="contact-form">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={6} />
                                </Form.Group>
                            </Form>
                            <div className="contact-footer">
                                <Button variant="primary" className="retro-button">
                                    Send
                                </Button>
                                <Button variant="secondary" className="retro-button" onClick={() => setShowContact(false)}>
                                    Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Icons