// 10. Create a dropdown menu component that displays a list of items when clicked.

import React, { useState } from "react";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  const items = ["Profile", "Settings", "Notifications", "Logout"];

  return (
    <div className="relative inline-block text-left">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
      >
        ☰ Menu
      </button>

      {/* Dropdown List */}
      {open && (
        <div className="absolute mt-2 w-48 bg-white rounded shadow-lg z-10 border">
          <ul className="divide-y">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  alert(`You clicked ${item}`);
                  setOpen(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
