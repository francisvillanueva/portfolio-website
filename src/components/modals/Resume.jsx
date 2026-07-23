import AppModal from '../AppModal.jsx';

export default function ResumeModal({ show, onClose }) {
    return (
        <AppModal show={show} onClose={onClose} title="Resume" className="resume-modal" size="lg">
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
                            <p className="resume-degree"><b>Languages:</b> Python, Java, C#, JavaScript, HTML/CSS, PHP</p>
                            <p className="resume-degree"><b>Frameworks/Libraries:</b> React, Node.js, Express, Flask, Laravel</p>
                            <p className="resume-degree"><b>Tools:</b> Git, Visual Studio, Visual Studio Code, InteliJ, Eclipse, Android Studio, XAMPP, DB Browser for SQLite</p>
                            <p className="resume-degree"><b>Database:</b> MySQL, SQLite, PostgreSQL, Supabase</p>
                            <p className="resume-degree"><b>Operating Systems:</b> Windows, Linux (Ubuntu, Debian, Raspberry Pi OS), Android</p>
                            <p className="resume-degree"><b>Libraries:</b> Panda, NumPy, Matplotlib, Seaborn</p>
                            <p className="resume-degree"><b>Other Tools:</b> Word, Excel, PowerPoint, Da Vinci Resolve, OBS Studio, Blender, Figma, Claude, ChatGPT, Gemini, Perplexity, Windsurf</p>
                        </div>
                    </div>
                </div>
            </div>
        </AppModal>
    );
}