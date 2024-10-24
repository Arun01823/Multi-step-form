import React from 'react';

const Step2 = ({ formData, setFormData, errors, nextStep, previousStep }) => {
  const handleNext = () => {
    if (!formData.email) {
      errors({ email: 'Email is required' });
    } else {
      errors({});
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 2</h2>
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </label>
      {errors.email && <p>{errors.email}</p>}
      <button onClick={previousStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;
