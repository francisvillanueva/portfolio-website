import Button from 'react-bootstrap/Button';
import AppModal from '../AppModal.jsx';
import Portrait from '../../assets/portrait.webp';

export default function About({ show, onClose }) {
    return (
        <AppModal
            show={show}
            onClose={onClose}
            title="About Me"
            className="info-modal"
            footer={
                <>
                    <Button variant="primary"
                        onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=fv.goose@gmail.com&su=Hello!&body=Hello Francis,', '_blank')}
                        className="retro-button">
                        Get in Touch
                    </Button>
                    <Button variant="secondary" onClick={onClose} className="retro-button">
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
    );
}