import React, { useState } from "react";

const CrudApp = () => {
  const [records, setRecords] = useState([
    //{ id: 1, name: "John Doe", age: 25, phone: "1234567890", email: "john@example.com" },
    // { id: 2, name: "Jane Smith", age: 30, phone: "0987654321", email: "jane@example.com" },
  ]);

  const [formData, setFormData] = useState({ name: "", age: "", phone: "", email: "" });
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState("");
  const [error, setError] = useState("");
  const [viewData, setViewData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    return formData.name && formData.age && formData.phone && formData.email;
  };

  const handleSubmit = () => {
    if (!validate()) {
      setError("All fields are mandatory.");
      setAlert("");
      return;
    }

    if (editId) {
      const updatedRecords = records.map((rec) =>
        rec.id === editId ? { ...rec, ...formData, id: editId } : rec
      );
      setRecords(updatedRecords);
      setAlert("Record updated successfully.");
    } else {
      const newRecord = {
        id: Date.now(),
        ...formData,
      };
      setRecords([...records, newRecord]);
      setAlert("Record inserted successfully.");
    }

    setFormData({ name: "", age: "", phone: "", email: "" });
    setEditId(null);
    setError("");
  };

  const handleEdit = (id) => {
    const selected = records.find((rec) => rec.id === id);
    setFormData({ name: selected.name, age: selected.age, phone: selected.phone, email: selected.email });
    setEditId(id);
    setViewData(null);
    setAlert("");
    setError("");
  };

  const handleDelete = (id) => {
    const updatedRecords = records.filter((rec) => rec.id !== id);
    setRecords(updatedRecords);
    setAlert("Record deleted successfully.");
    setError("");
    setViewData(null);
  };

  const handleView = (id) => {
    const selected = records.find((rec) => rec.id === id);
    setViewData(selected);
    setAlert("");
    setError("");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CRUD App</h1>
      {alert && <div className="mb-2 p-2 bg-green-200 text-green-800">{alert}</div>}
      {error && <div className="mb-2 p-2 bg-red-200 text-red-800">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="p-2 border"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="p-2 border"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border"
        />
      </div>

      <button onClick={handleSubmit} className="mb-4 px-4 py-2 bg-blue-500 text-white">
        {editId ? "Update" : "Insert"}
      </button>

      <ul className="space-y-4">
        {records.map((rec) => (
          <li key={rec.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <p><strong>Name:</strong> {rec.name}</p>
              <p><strong>Age:</strong> {rec.age}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleView(rec.id)} className="px-2 py-1 bg-green-500 text-white">Show</button>
              <button onClick={() => handleEdit(rec.id)} className="px-2 py-1 bg-yellow-500 text-white">Edit</button>
              <button onClick={() => handleDelete(rec.id)} className="px-2 py-1 bg-red-500 text-white">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {viewData && (
        <div className="mt-6 p-4 border border-gray-300 rounded">
          <h2 className="text-xl font-semibold mb-2">View Record</h2>
          <p><strong>Name:</strong> {viewData.name}</p>
          <p><strong>Age:</strong> {viewData.age}</p>
          <p><strong>Phone:</strong> {viewData.phone}</p>
          <p><strong>Email:</strong> {viewData.email}</p>
        </div>
      )}
    </div>
  );
};

export default CrudApp;
