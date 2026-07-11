import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function AppModal({ show, onClose, title, className, size, children, footer }) {
  return (
    <Modal show={show} onHide={onClose} backdrop="static" keyboard={false} className={className} size={size} centered>
      <Modal.Header className="modal-header">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="body">{children}</Modal.Body>
      <Modal.Footer className="footer">
        {footer ?? <Button variant="secondary" onClick={onClose} className="retro-button">Close</Button>}
      </Modal.Footer>
    </Modal>
  );
}