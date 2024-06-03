import React from "react";
import Modal from "react-modal";
import PrimaryButton from "../components/buttons/primaryButton/primaryButton";
import SecondaryButton from "../components/buttons/secondaryButton/secondaryButton";
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
      <h2 className="modal-title">Are you sure?</h2>
      <p className="modal-text">Your progress will be lost if you exit.</p>
      <div className="modal-buttons">
        <SecondaryButton text="Cancel" onClick={onRequestClose} enabled={true} />
        <PrimaryButton text="Exit" onClick={onConfirm} enabled={true} />
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
