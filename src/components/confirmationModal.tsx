import React from "react";
import Modal from "react-modal";
import "./confirmationModal.css";

// Set the app element for accessibility
Modal.setAppElement('#root');

interface ConfirmationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
      <h2>Are you sure you want to cancel?</h2>
      <p>All changes will be lost.</p>
      <div className="modal-buttons">
        <button onClick={onRequestClose} className="modal-button">No</button>
        <button onClick={onConfirm} className="modal-button">Yes</button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
