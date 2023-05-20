import React, { useState } from 'react';
import NotesInput from './notes';
import TestQuestions from './questions';
import FinishedNotes from './done';

const NotesProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const [data, setData] = useState(null);

  // Render components based on the current step
  let currentComponent;
  switch (currentStep) {
    case 1:
      currentComponent = <NotesInput onNext={handleNext} data={data} setData={setData} />;
      break;
    case 2:
      currentComponent = <TestQuestions onNext={handleNext} data={data} setData={setData} />;
      break;
    case 3:
      currentComponent = <FinishedNotes />;
      break;
    default:
      currentComponent = null;
  }

  return (
    <div>
      <h1>Notes in take lol</h1>
      {currentComponent}
    </div>
  );
};

export default NotesProcess;