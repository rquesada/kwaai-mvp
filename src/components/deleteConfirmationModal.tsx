import React from "react";
import Modal from "react-modal";
import "./confirmationModal.css"; // Reuse the existing styles or create new ones

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onRequestClose,
  onConfirm,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
      <h2>Are you sure you want to delete this bot?</h2>
      <div className="modal-buttons">
        <button onClick={onRequestClose} className="modal-button">No</button>
        <button onClick={onConfirm} className="modal-button">Yes</button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
