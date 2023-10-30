import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
// import css styles
import "../../styles/services/customdropdown.css";

// Define the props for the CustomDropdown component

interface CheckboxDropdownProps {
  options: string[];  // Array of available options
  selectedOptions: string[];  // Array of selected options
  setSelectedOptions: Dispatch<SetStateAction<string[]>>;  // Function to set selected options

}

// CustomDropdown is a functional component that renders a dropdown with checkboxes
const CustomDropdown: React.FC<CheckboxDropdownProps> = ({ options, selectedOptions, setSelectedOptions }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track whether the dropdown is open

    // Function to toggle the dropdown open or closed
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    // Function to handle changes when a checkbox is clicked
  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
            // If the option is already selected, remove it

      setSelectedOptions(selectedOptions.filter(selected => selected !== option));
    } else {
            // If the option is not selected, add it
      setSelectedOptions([...selectedOptions, option]);
    }
  };

    // Function to select or deselect all options

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      // If all options are already selected, clear the selection
      setSelectedOptions([]);
    } else {
       // If not all options are selected, select all options
      setSelectedOptions([...options]);
    }
  };

  return (
    <div className="checkbox-dropdown">
            {/* Button to toggle the dropdown */}
      <button className="dropdown-button" onClick={toggleDropdown}>
        Staff List
      </button>
      {isOpen && (
                // Render the dropdown content when isOpen is true
        <div className="dropdown-content">
          <label>
                        {/* Checkbox to select or deselect all options */}
            <input
              type="checkbox"
              checked={selectedOptions.length === options.length}
              onChange={handleSelectAll}
            />
            All Staff
          </label>
          <ul>
            {options.map((option) => (
              <li>
                <label key={option}>
                                    {/* Checkbox for each individual option */}
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


// Export the CustomDropdown component
export default CustomDropdown;

