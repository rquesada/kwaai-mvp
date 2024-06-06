import { useState } from "react";
import Details from "./details/details";
import Knowledge from "./knowledge";
import Llm from "./llm/llm";
import Status from "./status/status";
import Test from "./test";
import { LlmOption, Bot } from "../../data/types";
import ConfirmationModal from "../../components/confirmationModal";
import { useBots } from "../../context/botsContext";
import { v4 as uuidv4 } from 'uuid';
import "./wizard.css";
import WizardTitle from "./wizardTitle/wizardTitle";
import WizardBottom from "./wizardBottom/wizardBottom"; // Import the new component
import Face from "./face/face";
import Voice from "./voice/voice";

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
    voice: { id: "", name: "", imageURL: "", videoURL: "" },
    face: { id: "", name: "", imageURL: "", videoURL: "" },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addBot } = useBots();

  const steps = [
    <Details 
      key="details" 
      bot={newBot}
      setBot={setNewBot}
    />,
    <Llm 
      key="llm" 
      onSelect={(llmOption: LlmOption) => setNewBot({ ...newBot, llm: llmOption })} 
      selectedLlmOption={newBot.llm}
    />,
    <Knowledge 
      key="knowledge" 
      bot={newBot}
      setBot={setNewBot}
    />,
    <Face
      key="face"
      bot={newBot}
      setBot={setNewBot}
    />,
    <Voice
      key="voice"
    />,
    <Test
      key="test" 
      bot={newBot}
      setBot={setNewBot}
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
      <WizardTitle currentStep={currentStep} />
      <div className="sections-container">
        <div className="right-section-wizard">{steps[currentStep]}</div>
      </div>
      <WizardBottom
        currentStep={currentStep}
        totalSteps={steps.length}
        onBack={handleBack}
        onNext={handleNext}
        onCancel={handleCancel}
        onDeploy={handleDeploy}
      />
      <ConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmCancel}
      />
    </div>
  );
}

export default Wizard;
