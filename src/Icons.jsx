import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import DocumentsIcon from './assets/icons/Documents.webp';
import ExplorerIcon from './assets/icons/Explorer-outline.webp';
import InfoIcon from './assets/icons/Info.webp';
import MailIcon from './assets/icons/Mail.webp';
import NotepadIcon from './assets/icons/Notepad.webp';
import PCBuilderIcon from './assets/icons/PCBuilder.webp';
import Portrait from './assets/portrait.webp';
import GitHubIcon from './assets/icons/ghub.png';
import YouTubeIcon from './assets/icons/youtube.png';
import LinkedInIcon from './assets/icons/linkedin.png';

{/* Weather */}
import ClearDayIcon from './assets/icons/weather/clear-day.svg';

import AppModal from './components/AppModal.jsx';
import PartPicker from './components/PartPicker';

function Icons(){
    const [activeModal, setActiveModal] = useState('info');

    const openModal = (name) => setActiveModal(name);
    const closeModal = () => setActiveModal(null);

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000 * 30);
        return () => clearInterval(id);
    }, []);

    const timeStr = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    const dateStr = now.toLocaleDateString([], { day: '2-digit', month: 'short' });

    return(
        <div id="icons">
            {/* Desktop: original flat list */}
            <ul className="desktop-icon-list">
                <li><button className="icon-trigger" onClick={() => openModal('info')}><img src={InfoIcon} alt="info" />About</button></li>
                <li><button className="icon-trigger" onClick={() => openModal('links')}><img src={ExplorerIcon} alt="links" />Links</button></li>
                <li><button className="icon-trigger" onClick={() => openModal('projects')}><img src={DocumentsIcon} alt="projects" />Projects</button></li>
                <li><button className="icon-trigger" onClick={() => openModal('resume')}><img src={NotepadIcon} alt="resume" />Resume</button></li>
                <li><button className="icon-trigger" onClick={() => openModal('builder')}><img src={PCBuilderIcon} alt="PC Builder" />PC Builder</button></li>
            </ul>

            {/* Mobile: tiered layout */}
            <div className="mobile-home">
                <div className="floating-tier">
                    <div className="widget-badge weather-widget">
                        <img src={ClearDayIcon} alt="Clear Day" />
                        <span className="widget-time">{timeStr} | {dateStr}</span>
                        <span className="widget-condition">Clear</span>
                    </div>

                    <div className="WidgetContainers">
                        <div className="app-badge-row">
                            <div className="app-badge-item">
                                <button className="app-badge" onClick={() => openModal('info')}>
                                    <img src={InfoIcon} alt="About" />
                                    <span className="app-label">About</span>
                                </button>
                            </div>

                            <div className="app-badge-item">
                                <button className="app-badge" onClick={() => openModal('builder')}>
                                    <img src={PCBuilderIcon} alt="PC Builder" />
                                    <span className="app-label">PC Builder</span>
                                </button>
                            </div>
                        </div>

                        <div className="taskbar-tier">
                            <button className="icon-trigger" onClick={() => openModal('links')}>
                                <img src={ExplorerIcon} alt="Links" />Links
                            </button>
                            <button className="icon-trigger" onClick={() => openModal('projects')}>
                                <img src={DocumentsIcon} alt="Projects" />Projects
                            </button>
                            <button className="icon-trigger" onClick={() => openModal('resume')}>
                                <img src={NotepadIcon} alt="Resume" />Resume
                            </button>
                            <button className="icon-trigger" onClick={() => openModal('contact')}>
                                <img src={MailIcon} alt="Contact" />Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Modal */}
            <AppModal
                show={activeModal === 'info'}
                onClose={closeModal}
                title="About Me"
                className="info-modal"
                footer={
                    <>
                        <Button variant="primary"
                            onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=fv.goose@gmail.com&su=Hello!&body=Hello Francis,', '_blank')}
                            className="retro-button">
                            Get in Touch
                        </Button>
                        <Button variant="secondary" onClick={closeModal} className="retro-button">
                            Close
                        </Button>
                    </>
                }
            >
                <div className="illustration">
                    <img src={Portrait} alt="Portrait" id='portrait'/>
                </div>
                <div className="contact-form">
                    <h1>Hello There,</h1>
                    <h3>I'm Francis Villanueva</h3>
                    <h6>Welcome to my portfolio</h6>
                    <hr/>
                    <p>I'm a computer science graduate from Pamantasan ng Lungsod ng Pasig.
                        I have a passion for programming and eager to learn and grow as a developer.
                    </p>
                </div>
            </AppModal>

            {/* Links Modal */}
            <AppModal show={activeModal === 'links'} onClose={closeModal} title="Links" className="links-modal">
                <div className="layout_0">
                        <div className="links-card">
                            <div className="social-icons">
                                <a href="https://github.com/francisvillanueva" target="_blank" rel="noopener noreferrer">
                                    <img src={GitHubIcon} alt="GitHub" className="social-icon" />
                                    <h3>GitHub</h3>
                                </a>
                            </div>
                            <div className="social-icons"> 
                                <a href="https://www.youtube.com/@GooseInShoes" target="_blank" rel="noopener noreferrer">
                                    <img src={YouTubeIcon} alt="YouTube" className="social-icon" />
                                    <h3>YouTube</h3>
                                </a>
                            </div>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/frncisv/" target="_blank" rel="noopener noreferrer">
                                    <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
                                    <h3>LinkedIn</h3>
                                </a>
                            </div>
                        </div>
                    </div>
            </AppModal>

            {/* Projects Modal */}
            <AppModal show={activeModal === 'projects'} onClose={closeModal} title="Projects" className="projects-modal" size="lg">
                <div className="project-header">
                    <h3>FacePass</h3> <i>Python, OpenCV, Flask</i>
                </div>
                <a href="https://github.com/francisvillanueva/FacePass" target="_blank" rel="noopener noreferrer">View Project</a>
                <hr />
                <p>
                    FacePass is an Internet of Things (IoT)-enabled facial identification logbook system developed to modernize facility management. The system replaces traditional manual logbooks with automated entrance and exit tracking through AI-based facial verification, enhancing operational efficiency, accuracy, and security.
                </p>
                <p>
                    FacePass integrates computer vision, deep learning, and IoT infrastructure to provide real-time facility access monitoring. It leverages MobileFaceNet for high-accuracy facial recognition and YOLOv8 for fast and reliable face detection. These models are deployed within a locally hosted IoT framework to ensure low-latency processing and enhanced data privacy.
                </p>
                <br />
                <div className="project-header">
                    <h3>GamingRigz Website</h3> <i>HTML, JavaScript, React, Node.js</i>
                </div>
                <a href="https://github.com/francisvillanueva/GamingRigz" target="_blank" rel="noopener noreferrer">View Project</a>
                <hr />
                <p>
                    A full-stack e-commerce web application developed to provide an online retail platform for computer hardware and gaming components. The project was collaboratively designed and implemented to support product browsing, order management, and secure transaction workflows for a local retail store.
                </p>
                <p>
                    The GamingRigz website was developed using the Laravel framework and deployed within a local development environment powered by XAMPP, where I collaboratively co-programmed and implemented the proposed e-commerce platform for the store Gamingrigz.
                </p>
                <div className="project-header">
                    <h3>CalicOS</h3> <i>HTML, JavaScript, React, Node.js</i>
                </div>
                <a href="https://github.com/francisvillanueva/CalicOS" target="_blank" rel="noopener noreferrer">View Project</a>
                <hr />
                <p>
                    CalicOS is a full-stack personal portfolio website designed to present projects, self-made pixel art, and creative works within a distinctive Y2K-inspired interface. The platform combines modern web technologies with a nostalgic Windows 98 inspired aesthetic, integrating retro UI elements with contemporary development standards.
                </p>
                <p>
                    The website was developed using React for building a dynamic, component-based frontend interface and Node.js for backend services such as using Supabase and API handling, while incorporating a visual design inspired by Windows 98 to achieve a Y2K desktop-style user experience.
                </p>
            </AppModal>

            {/* Resume Modal */}
            <AppModal show={activeModal === 'resume'} onClose={closeModal} title="Resume" className="resume-modal" size="lg">
                <div className="layout_0">
                        <h1>Francis Villanueva</h1>
                        <h6>Computer Science Graduate | <a href="https://github.com/francisvillanueva" target="_blank" rel="noopener noreferrer">github.com/francisvillanueva</a> | <a href="https://linkedin.com/in/frncisv/" target="_blank" rel="noopener noreferrer">linkedin.com/in/frncisv/</a></h6>

                        <div className="resume-section">
                            <h3>Education</h3>
                            <hr />
                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h4>Pamantasan ng Lungsod ng Pasig</h4>
                                    <span className="resume-date">2022 – 2026</span>
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
                                    <h4><b>Salenga Law Firm |</b> Full Stack Dev & DevOps Engineer (Internship)</h4>
                                    <span className="resume-date">2026</span>
                                </div>
                                <div className="resume-item-body">
                                    <p className="resume-degree">
                                        •   Deployed a production-ready law firm website by designing and implementing secure server infrastructure, deployment pipelines, and SSL-secured multi-domain hosting.
                                        •	Developed and optimized the application's full-stack architecture by implementing authentication, backend services, frontend functionality, and containerized deployment using Docker, Nginx, Strapi, Vue 3, TypeScript, and Redis.
                                    </p>
                                </div>
                            </div>
                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h4>PC Technician</h4>
                                    <span className="resume-date">2020 - Present</span>
                                </div>
                                <div className="resume-item-body">
                                    <p className="resume-degree">
                                        •	Delivered reliable computer repair and upgrade services by diagnosing hardware issues and installing, maintaining, and replacing PC components.
                                        •	Improved customer satisfaction by communicating technical issues and hardware recommendations in clear, accessible language to customers with varying levels of technical knowledge.
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
                                        <b>Database:</b> MySQL, SQLite, PostgreSQL, Supabase
                                    </p>
                                    <p className="resume-degree">
                                        <b>Operating Systems:</b> Windows, Linux (Ubuntu, Debian, Raspberry Pi OS), Android
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
                    </div>
            </AppModal>

            {/* PC Builder Modal */}
            <AppModal show={activeModal === 'builder'} onClose={closeModal} title="PC Builder" className="builder-modal" size="lg">
                <PartPicker />
            </AppModal>

            {/* Contact Modal */}
            <AppModal show={activeModal === 'contact'} onClose={closeModal} title="Contact" className="contact-modal">
            <div className="construction-notice">
                <strong>Feature under Construction</strong>
            </div>
        </AppModal>
{/*
            <Modal show={activeModal === 'contact'} onHide={closeModal} backdrop="static" className="contact-modal" centered>
                <Modal.Header className="header">
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div className="layout_1">
                        <div className="contact-illustration"></div>
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
                                <Button variant="secondary" className="retro-button" onClick={closeModal}>
                                    Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
*/}
        </div>
    );
}

export default Icons