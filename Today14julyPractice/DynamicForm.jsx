// 8. Create a dynamic form that allows users to add or remove fields dynamically.

import React, { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([""]);

  // Handle input change
  const handleChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index] = value;
    setFields(updatedFields);
  };

  // Add new field
  const addField = () => {
    setFields([...fields, ""]);
  };

  // Remove field
  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  // Optional: Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(fields));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 shadow-md rounded-xl space-y-4"
    >
      <h2 className="text-xl font-bold mb-4 text-center">📝 Dynamic Form</h2>

      {fields.map((field, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="text"
            value={field}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Field ${index + 1}`}
            className="flex-1 px-3 py-2 border rounded"
          />
          <button
            type="button"
            onClick={() => removeField(index)}
            className="px-3 py-2 bg-red-500 text-white rounded"
          >
            ❌
          </button>
        </div>
      ))}

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={addField}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ➕ Add Field
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          ✅ Submit
        </button>
      </div>
    </form>
  );
};

export default DynamicForm;
