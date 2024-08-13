import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PoojaHeader = () => {
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [poojaOptions, setPoojaOptions] = useState([]);
  const [filteredPoojaOptions, setFilteredPoojaOptions] = useState([]);
  const [selectedPooja, setSelectedPooja] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Mock data - Replace with actual API calls or data fetching
    const temples = [
      { value: 'temple1', label: 'Temple 1' },
      { value: 'temple2', label: 'Temple 2' }
    ];

    const poojaData = {
      temple1: [
        { value: 'pooja1', label: 'Pooja 1' },
        { value: 'pooja2', label: 'Pooja 2' }
      ],
      temple2: [
        { value: 'pooja3', label: 'Pooja 3' },
        { value: 'pooja4', label: 'Pooja 4' }
      ]
    };

    setPoojaOptions(poojaData);
  }, []);

  useEffect(() => {
    if (selectedTemple) {
      setFilteredPoojaOptions(poojaOptions[selectedTemple.value] || []);
    } else {
      setFilteredPoojaOptions([]);
    }
  }, [selectedTemple, poojaOptions]);

  return (
    <div className="bg-black py-6 w-full flex">
      <div className="w-full mx-auto px-6">
        <div className="flex items-center justify-center gap-5 flex-col md:flex-row mx-auto">
          {/* Select Temple */}
          <div className="w-full sm:pl-56">
            <Select
              name="temple"
              classNamePrefix="select-input"
              className="text-black w-full"
              placeholder="Select Temple"
              options={[
                { value: 'temple1', label: 'Temple 1' },
                { value: 'temple2', label: 'Temple 2' }
              ]}
              onChange={setSelectedTemple}
              value={selectedTemple}
            />
          </div>

          {/* Select Pooja */}
          <div className="w-full">
            <Select
              name="pooja"
              classNamePrefix="select-input"
              className="text-black w-full"
              placeholder="Select Pooja"
              options={filteredPoojaOptions}
              onChange={setSelectedPooja}
              value={selectedPooja}
            />
          </div>

          {/* Select Date */}
          <div className="w-full">
            <DatePicker
              className="date-input"
              placeholderText="Select Date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6">
          <button
            className="w-full hover:bg-[#f6c300] bg-transparent text-yellow-500 border-2 border-[#f6c300] transition-colors delay-75 py-2 px-4 rounded-md text-center hover:text-white"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoojaHeader;
