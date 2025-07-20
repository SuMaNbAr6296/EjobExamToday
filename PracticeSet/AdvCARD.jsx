import React, { useState } from "react";
const AdvCARD = () => {
    const [records, setRecords] = useState([]);
    const [formData, setFormData] = useState({ Name: "", Age: "", Phone: "", Email: "", Course: [], Duration: "", File: null });
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState("");
    const [error, setError] = useState("");
    const [viewData, setViewData] = useState(null);

    const CourseOption = ["React.js", "Angular.js", "Node.js", "Vue.js", "Flutter", "Laravel", "Django", "Spring", "Python", "PHP", "Java", "C++", "C#", "C", "HTML", "CSS", "JavaScript", "SQL", "NoSQL", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "DevOps", "Machine Learning", "Data Science", "Artificial Intelligence"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCouseSelect = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setFormData({ ...formData, course: selectedOptions });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/pdf"];
            if (!allowedTypes.includes(file.type)) {
                showAlert("error", "Only PDF, JPEG, PNG, and GIF files are allowed.");
                return
            }
        }
        setFormData({ ...formData, file: file });
    };

    const validate = () => {
        return (formData.Name && formData.Age && formData.Phone && formData.Email && formData.Course && formData.Duration && formData.File);
    };

    const showAlert = (type, message) => {
        if (type === "error") {
            setError(message);
            setAlert("");
        } else {
            setError("");
            setAlert(message);
        }
    };

    const handleSubmit = () => {
        if (!validate()) {
            showAlert("error", "All fields are required & at  least 2 courese should be selected.");
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
        setFormData({ Name: "", Age: "", Phone: "", Email: "", Course: [], Duration: "", File: null });
        setEditId(null);
        setError("");
    }

    const handleEdit = (id) => {
        const selected = records.find((rec) => rec.id === id);
        setFormData({ Name: selected.Name, Age: selected.Age, Phone: selected.Phone, Email: selected.Email, Course: selected.Course, Duration: selected.Duration, File: selected.File });
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

      {(alert || error) && (
        <div className="mb-2">
          {alert && <div className="p-2 bg-green-200 text-green-800">{alert}</div>}
          {error && <div className="p-2 bg-red-200 text-red-800">{error}</div>}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border" />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="p-2 border" />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="p-2 border" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border" />

        <select multiple name="course" value={formData.course} onChange={handleCourseSelect} className="p-2 border h-32">
          {courseOptions.map((course) => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>

        <input type="text" name="duration" placeholder="Course Duration" value={formData.duration} onChange={handleChange} className="p-2 border" />
        <input type="file" name="file" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" onChange={handleFileChange} className="p-2 border" />
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
          <p><strong>Course:</strong> {viewData.course.join(', ')}</p>
          <p><strong>Duration:</strong> {viewData.duration}</p>
          {viewData.file && <p><strong>File:</strong> {viewData.file.name}</p>}
        </div>
      )}
    </div>
    );
};

export default AdvCARD;