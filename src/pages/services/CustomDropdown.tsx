import React, { useState } from 'react';
import "../../styles/services/customdropdown.css";

interface CheckboxDropdownProps {
  options: string[];
}

const CustomDropdown: React.FC<CheckboxDropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(selected => selected !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions([...options]);
    }
  };

  return (
    <div className="checkbox-dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
       Staff List
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <label>
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



export default CustomDropdown;

