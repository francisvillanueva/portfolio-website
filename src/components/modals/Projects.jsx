import AppModal from '../AppModal.jsx';

export default function ProjectsModal({ show, onClose }) {
    return (
        <AppModal show={show} onClose={onClose} title="Projects" className="projects-modal" size="lg">
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
                <h3>CalicOS</h3> <i>HTML, JavaScript, React, Vite, Supabase</i>
            </div>
            <a href="https://github.com/francisvillanueva/portfolio-website" target="_blank" rel="noopener noreferrer">View Project</a>
            <hr />
            <p>
                CalicOS is a full-stack personal portfolio website designed to present projects, self-made pixel art, and creative works within a distinctive Y2K-inspired interface. The platform combines modern web technologies with a nostalgic Windows 98 inspired aesthetic, integrating retro UI elements with contemporary development standards.
            </p>
            <p>
                The website was developed using React for building a dynamic, component-based frontend interface and Node.js for backend services such as using Supabase and API handling, while incorporating a visual design inspired by Windows 98 to achieve a Y2K desktop-style user experience.
            </p>
        </AppModal>
    );
}