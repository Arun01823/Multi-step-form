import React, { useState } from 'react';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const previousStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    console.log(formData);
  };

  const steps = [
    <Step1
      formData={formData}
      setFormData={setFormData}
      errors={setErrors}
      nextStep={nextStep}
    />,
    <Step2
      formData={formData}
      setFormData={setFormData}
      errors={setErrors}
      nextStep={nextStep}
      previousStep={previousStep}
    />,
    <Step3
      formData={formData}
      setFormData={setFormData}
      errors={setErrors}
      previousStep={previousStep}
      handleSubmit={handleSubmit}
    />,
  ];

  return <div>{steps[step]}</div>;
};

export default MultiStepForm;
