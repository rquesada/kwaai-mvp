import { useState } from "react";
import Details from "./details";
import Knowledge from "./knowledge";
import Llm from "./llm/llm";
import Status from "./status";
import { LlmOption, Bot } from "../../data/types";
import ConfirmationModal from "../../components/confirmationModal";
import { useBots } from "../../context/botsContext";
import { v4 as uuidv4 } from 'uuid';
import "./wizard.css";

interface WizardProps {
  showList: () => void;
}

const Wizard: React.FC<WizardProps> = ({ showList }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [newBot, setNewBot] = useState<Bot>({
    id: uuidv4(),
    name: "",
    description: "",
    img: "",
    llm: { id: uuidv4(), name: "", image: "" },
    files: [],
    status: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addBot } = useBots();

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
    showList();
  };

  const handleDeploy = () => {
    console.log("New bot to add", newBot);
    addBot(newBot);
    showList();
  };

  return (
    <div className="wizard-container">
      <span>Create your custom robot</span>
      <div className="sections-container">
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
            onClick={handleDeploy}
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

export default Wizard;
