import AppModal from '../AppModal.jsx';

export default function ContactModal({ show, onClose }) {
    return (
        <AppModal show={show} onClose={onClose} title="Contact" className="contact-modal">
            <div className="construction-notice">
                <strong>Feature under Construction</strong>

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
        </AppModal>

        
    );
}