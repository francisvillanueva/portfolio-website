import AppModal from '../AppModal.jsx';
import GitHubIcon from '../../assets/icons/ghub.webp';
import YouTubeIcon from '../../assets/icons/youtube.webp';
import LinkedInIcon from '../../assets/icons/linkedin.webp';

export default function Links({ show, onClose }) {
    return (
        <AppModal show={show} onClose={onClose} title="Links" className="links-modal">
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
    );
}