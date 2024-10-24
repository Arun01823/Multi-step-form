import React from 'react';

const Step3 = ({ formData, setFormData, errors, previousStep, handleSubmit }) => {
  const handleFinish = () => {
    if (!formData.password) {
      errors({ password: 'Password is required' });
    } else {
      errors({});
      handleSubmit();
    }
  };

  return (
    <div>
      <h2>Step 3</h2>
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </label>
      {errors.password && <p>{errors.password}</p>}
      <button onClick={previousStep}>Back</button>
      <button onClick={handleFinish}>Submit</button>
    </div>
  );
};

export default Step3;
