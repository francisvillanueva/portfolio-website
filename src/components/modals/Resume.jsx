import AppModal from '../AppModal.jsx';
import ResumeCarousel from './ResumeCarousel';

import Signature from '../../assets/signature.webp'
import GitHubIcon from '../../assets/icons/ghub.webp';
import YouTubeIcon from '../../assets/icons/youtube.webp';
import LinkedInIcon from '../../assets/icons/linkedin.webp';
import WebsiteIcon from '../../assets/icons/CalicOS.webp';

export default function ResumeModal({ show, onClose }) {
    return (
        <AppModal show={show} onClose={onClose} title="My Resume - ₍^. .^₎⟆" className="resume-modal" size="lg">
            <div className="layout_0">
                <div className="head-container">
                    <h1>Digital Masonry</h1>
                    <div className = "head-sub-container">
                        <p id="date">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        <p>Est. 2000</p>
                    </div>
                    <nav id='resume-nav'>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#education">Education</a>
                        <a href="#skills">Skills</a>
                    </nav>
                </div>
                
                <div className='resume-about'>
                    <img src={Signature} alt="Signature" id='signature'/>
                    <h2>Francis Villanueva</h2>
                    <h4>Your Digital Mason</h4>
                    <p id='tagline'>Building the digital world one line of code at a time.</p>
                    <p>Full-stack software engineer with hands-on experience building and deploying full-stack applications with a live CMS-driven website during internship, end-to-end computer-vision attendance system, and a complete e-commerce platform. Strong foundation in software development, problem-solving, and system design, with practical experience delivering reliable and maintainable solutions turning business and technical requirements into working software.</p>

                    <div className='resume-icons'>
                        <a href="https://github.com/francisvillanueva" target="_blank" rel="noopener noreferrer">
                            <img src={GitHubIcon} alt="GitHub" className="resume-icon"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCUZ9c_25SNsxrPsxogtNspA" target="_blank" rel="noopener noreferrer">
                            <img src={YouTubeIcon} alt="YouTube" className="resume-icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/frncisv/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="resume-icon"/>
                        </a>
                        <a href="https://francisvillanueva.is-a.dev/" target="_blank" rel="noopener noreferrer">
                            <img src={WebsiteIcon} alt="Personal Website" className="resume-icon"/>
                        </a>
                    </div>
                </div>

                <div className='resume-content'>
                    <section id='experience'>
                        <h2>Experience</h2>
                        <div className='resume-bullet'>
                            <h5>Full-Stack Developer (Intern) | <a href="https://philippinelawfirm.com/" target="_blank" rel="noopener noreferrer">Salenga Law Firm</a></h5>
                            <h5>2026</h5>
                        </div>
                        <div className='resume-carousel-container'>
                            {/*
                            <ResumeCarousel
                                images={[
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" }
                                ]}
                            />
                            */}
                        </div>
                        <ul>
                            <li>Built and implemented the backend architecture for a production law firm website, enabling non-technical staff to publish and update content, by designing the CMS content models and API layer from scratch.</li>
                            <li>Migrated a production website from WordPress to Strapi CMS with React/Vite, then deployed the application on DigitalOcean using Docker, Nginx, PostgreSQL, and Redis for a scalable and maintainable production environment. Improving consistency, environment management, and development team workflows.</li> 
                        </ul>
                        
                        <div className='resume-bullet'>
                            <h5>PC Technician | Self-Employed</h5>
                            <h5>2020 - Present</h5>
                        </div>
                        <ul>
                            <li>Restored and Diagnosed hardware issues, optimized desktop performance through repairs and upgrades, and provided technical guidance on hardware decisions.</li>
                        </ul>
                    </section>

                    <section id='projects'>
                        <h2>Projects</h2>
                        <div className='resume-bullet'>
                            <a href="https://github.com/francisvillanueva/FacePass" target="_blank" rel="noopener noreferrer"><h5>FacePass, An AI Facial Identification Attendance System</h5></a>
                            <h5>2024-2026</h5>
                        </div>
                        <h6>Python • Flask • SQLAlchemy • PostgreSQL • SQLite • OpenCV • PyTorch</h6>
                        <ul>
                            <li>Engineered an end-to-end automated identification and activity logging system that connected camera hardware, facial recognition, and a web-based administration platform to streamline entrance/exit tracking and provide administrators with centralized activity monitoring and reporting.</li>
                            <li>Developed the underlying software architecture, implementing REST-style APIs, authentication, relational data models, facial embedding storage and matching, YOLOv8 face detection, MobileFaceNet recognition, and ESP32-CAM MJPEG streaming.</li>
                        </ul>

                        <div className='resume-bullet'>
                            <a href="https://github.com/francisvillanueva/GamingRigz" target="_blank" rel="noopener noreferrer"><h5>GamingRigz, E-Commerce Platform</h5></a>
                            <h5>2025</h5>
                        </div>
                        <h6>PHP • Laravel • MySQL • Eloquent ORM • Vite</h6>
                        <ul>
                            <li>Developed an end-to-end e-commerce platform enabling product management, customer ordering, order tracking, and administrative order processing, delivering a complete shopping workflow from product creation through order fulfillment.</li>
                            <li>Implemented the application backend using Laravel building CRUD operations, relational data models, server-side validation, image upload handling, authentication and authorization controls, order lifecycle and payment-status workflows, and unique order tracking identifiers.</li>
                        </ul>
                        
                        <div className='resume-bullet'>
                            <a href="https://github.com/francisvillanueva/portfolio-website" target="_blank" rel="noopener noreferrer"><h5>CalicOS, A Personal Website Portfolio</h5></a>
                            <h5>2025</h5>
                        </div>
                        <h6>HTML • JavaScript • React • Node.js • Supabase • RESTful APIs • Vite</h6>
                        <ul>
                            <li>A personal portfolio website that implements real-time weather widgets, geolocation services, caching, and a mobile responsive UI components using React JS.</li>
                            <li>Developed a Windows-inspired portfolio website designed to contact, present projects, and showcase creative works such as pixel arts within the Y2K-inspired interface. The portfolio integrates Supabase for backend services and external RESTful APIs for dynamic weather and geolocation data.</li>
                        </ul>

                    </section>

                    <section id='education'>
                        <h2>Education</h2>
                        <div className='resume-bullet'>
                            <h5>Pamantasan ng Lungsod ng Pasig</h5>
                            <h5>GWA: 1.67</h5>
                        </div>
                        <h6>Bachelor of Science in Computer Science</h6>
                        <div className='resume-carousel-container'>
                            {/*
                            <ResumeCarousel
                                images={[
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" }
                                ]}
                            />
                            */}
                        </div>
                        <ul>
                            <li>President's Lister (2023 - 2026)</li>
                            <li>Dean's Lister (2022 - 2026)</li>
                            <li>PC Assembly and Disassembly Competition (2023)</li>
                        </ul>

                        <div className='resume-bullet'>
                            <h5>Eusebio High School</h5>
                            <h5>GWA: 90</h5>
                        </div>
                        <h6>Science, Technology, Engineering, and Mathematics (STEM)</h6>
                        <div className='resume-carousel-container'>
                            {/*
                            <ResumeCarousel
                                images={[
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" }
                                ]}
                            />
                            */}
                        </div>
                        <ul>
                            <li>Graduated with Honors</li>
                        </ul>

                        <div className='resume-bullet'>
                            <h5>ADT Montessori High School</h5>
                            <h5>GWA: 84.25</h5>
                        </div>
                        <div className='resume-carousel-container'>
                            {/*
                            <ResumeCarousel
                                images={[
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" },
                                    { src: "/images/sample.png", alt: "alt text" }
                                ]}
                            />
                            */}
                        </div>
                        <ul>
                            <li>Graduated with Honors</li>
                        </ul>
                    </section>

                    <section id='skills'>
                        <h2>Skills</h2>
                        <p><b>Languages:</b> Python, Java, C/C++, PHP, JavaScript, TypeScript, HTML/CSS, SQL</p>
                        <p><b>Frameworks & Technologies:</b> React, Vue 3, Node.js, Flask, Laravel, Strapi, Supabase, RESTful APIs, OpenCV, PyTorch, YOLOv8, Vite</p>
                        <p><b>Cloud & DevOps:</b> Docker, Nginx, Redis, PostgreSQL, MySQL, SQLite, DigitalOcean</p>
                        <p><b>Tools:</b> Git, GitHub, Visual Studio, VS Code, IntelliJ, Eclipse, Android Studio, XAMPP</p>
                    </section>
                </div>


            </div>
        </AppModal>
    );
}