import React from 'react';

const Step1 = ({ formData, setFormData, errors, nextStep }) => {
  const handleNext = () => {
    if (!formData.firstName) {
      errors({ firstName: 'First name is required' });
    } else {
      errors({});
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
      </label>
      {errors.firstName && <p>{errors.firstName}</p>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
