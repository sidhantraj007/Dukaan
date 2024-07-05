import React, { useState } from 'react';
import style from './TimeFilter.module.scss';

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleOptionHover = (option) => {
    setHoveredOption(option);
  };

  const handleOptionLeave = () => {
    setHoveredOption(null);
  };

  return (
    <div className={style.dropdowncontainer}>
      <select
        className={style.dropdown}
        value={selectedOption}
        onChange={(e) => handleOptionChange(e.target.value)}
      >
        <option value="" disabled>
          Select an option
        </option>
        <option
          value="thisMonth"
          onMouseEnter={() => handleOptionHover('thisMonth')}
          onMouseLeave={handleOptionLeave}
          style={{
            height: '40px',
            backgroundColor: hoveredOption === 'thisMonth' ? '#007bff' : '',
            color: hoveredOption === 'thisMonth' ? '#fff' : '#333',
          }}
        >
          This Month
        </option>
        <option
          value="thisWeek"
          onMouseEnter={() => handleOptionHover('thisWeek')}
          onMouseLeave={handleOptionLeave}
          style={{
            height: '40px',
            backgroundColor: hoveredOption === 'thisWeek' ? '#007bff' : '',
            color: hoveredOption === 'thisWeek' ? '#fff' : '#333',
          }}
        >
          This Week
        </option>
        <option
          value="thisYear"
          onMouseEnter={() => handleOptionHover('thisYear')}
          onMouseLeave={handleOptionLeave}
          style={{
            height: '40px',
            backgroundColor: hoveredOption === 'thisYear' ? '#007bff' : '',
            color: hoveredOption === 'thisYear' ? '#fff' : '#333',
          }}
        >
          This Year
        </option>
      </select>
    </div>
  );
};

export default DropdownMenu;
