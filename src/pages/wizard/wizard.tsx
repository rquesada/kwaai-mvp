import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userAvatar from "../../assets/avatar.png";
import Details from "./details";
import Knowledge from "./knowledge";
import Llm from "./llm/llm";
import Status from "./status";
import { LlmOption, Bot } from "../../data/types";
import ConfirmationModal from "../../components/confirmationModal";
import "./wizard.css";

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [newBot, setNewBot] = useState<Bot>({
    id: 0,
    name: "",
    description: "",
    img: "",
    llm: { id: 0, name: "", image: "" },
    files: [],
    status: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const steps = [
    <Details 
      key="details" 
      bot={newBot}
      setBot={setNewBot}
    />,
    <Knowledge 
      key="knowledge" 
      bot={newBot}
      setBot={setNewBot}
    />,
    <Llm 
      key="llm" 
      onSelect={(llmOption: LlmOption) => setNewBot({ ...newBot, llm: llmOption })} 
      selectedLlmOption={newBot.llm}
    />,
    <Status 
      key="status" 
      bot={newBot}
      setBot={setNewBot}
    />,
  ];

  const handleNext = () => {
    console.log(newBot);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(true);
  };

  const handleConfirmCancel = () => {
    setIsModalOpen(false);
    navigate("/List");
  };

  return (
    <div className="wizard-container">
      <span>Create your custom robot</span>
      <div className="sections-container">
        <div className="left-section-wizard">
          <img width="100%" src={userAvatar} alt="robot" />
        </div>
        <div className="right-section-wizard">{steps[currentStep]}</div>
      </div>
      <div className="wizard-bottom-container">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="wizard-button"
        >
          Back
        </button>
        <button
          onClick={handleCancel}
          className="wizard-button"
        >
          Cancel
        </button>
        {currentStep === steps.length - 1 && (
          <button
            onClick={handleConfirmCancel}
            className="wizard-button"
          >
            Deploy
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="wizard-button"
        >
          Next
        </button>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmCancel}
      />
    </div>
  );
}
