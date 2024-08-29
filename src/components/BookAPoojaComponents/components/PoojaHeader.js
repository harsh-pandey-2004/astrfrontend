import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import templeData from './data';
import { usePoojaContext } from '../TemplePoojaBooking/TempleDataBookingContext';

const PoojaHeader = ({ onSearch }) => {
  const [templeOptions, setTempleOptions] = useState([]);
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [poojaOptions, setPoojaOptions] = useState([]);
  const [filteredPoojaOptions, setFilteredPoojaOptions] = useState([]);
  const [selectedPooja, setSelectedPooja] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const { setFormData } = usePoojaContext();

  useEffect(() => {
    // Mock data - Replace with actual API calls or data fetching
    // const temples = [
    //   { value: 'temple1', label: 'Temple 1' },
    //   { value: 'temple2', label: 'Temple 2' }
      
    // ];
    console.log('templeData:', templeData);
    const templeOptions = templeData.map(temple => ({
      value: temple.name,
      label: temple.name
    }));
    console.log('Mapped templeOptions:', templeOptions);
    setTempleOptions(templeOptions);

    // const poojaData = {
    //   temple1: [
    //     { value: 'pooja1', label: 'Pooja 1' },
    //     { value: 'pooja2', label: 'Pooja 2' }
    //   ],
    //   temple2: [
    //     { value: 'pooja3', label: 'Pooja 3' },
    //     { value: 'pooja4', label: 'Pooja 4' }
    //   ]
    // };
    const poojaOptions = [
      { value: "Satyanarayan Puja", label: "Satyanarayan Puja" },
      { value: "Durga Puja", label: "Durga Puja" },
      { value: "Ganesh Puja", label: "Ganesh Puja" },
      { value: "Lakshmi Puja", label: "Lakshmi Puja" },
      { value: "Saraswati Puja", label: "Saraswati Puja" },
      { value: "Shivratri Puja", label: "Shivratri Puja" },
      { value: "Navratri Puja", label: "Navratri Puja" },
      { value: "Hanuman Puja", label: "Hanuman Puja" },
      { value: "Kali Puja", label: "Kali Puja" },
      { value: "Janmashtami Puja", label: "Janmashtami Puja" },
      { value: "Vastu Shanti Puja", label: "Vastu Shanti Puja" },
      { value: "Griha Pravesh Puja", label: "Griha Pravesh Puja" },
      { value: "Wedding Puja", label: "Wedding Puja" },
      { value: "Namkaran Puja", label: "Namkaran Puja" },
      { value: "Annaprashan Puja", label: "Annaprashan Puja" },
      { value: "Mundan Puja", label: "Mundan Puja" },
      { value: "Akshaya Tritiya Puja", label: "Akshaya Tritiya Puja" },
      { value: "Karva Chauth Puja", label: "Karva Chauth Puja" },
      { value: "Sankranti Puja", label: "Sankranti Puja" },
      { value: "Bhoomi Puja", label: "Bhoomi Puja" },
    ];

    const poojaData = templeData.reduce((acc, temple) => {
      acc[temple.name] = poojaOptions;
      return acc;
    }, {});
    // setSelectedTemple(templeOptions);
    setPoojaOptions(poojaData);

  }, []);

  useEffect(() => {
    if (selectedTemple) {
      console.log('Selected Temple:', selectedTemple); 
      console.log('Pooja Options:', poojaOptions); 
      setFilteredPoojaOptions(poojaOptions[selectedTemple.value] || []);
    } else {
      setFilteredPoojaOptions([]);
    }
  }, [selectedTemple, poojaOptions]);

  const handleSubmit=(event)=>{
    event.preventDefault();
    
    const formData = {
      temple: selectedTemple,
      pooja: selectedPooja,
      date: selectedDate
    };
    
    console.log('Form Data:', formData);
    setFormData(formData);
    onSearch(); 
  }

  return (
    <div className="bg-black pb-6 w-full flex">
      <div className="w-full mx-auto px-6">
        
        <div className="flex items-center justify-center gap-5 flex-col md:flex-row mx-auto">
          {/* Select Temple */}
          <div className="w-full sm:pl-56">
            <Select
              name="temple"
              classNamePrefix="select-input"
              className="text-black w-full"
              placeholder="Select Temple"
              // options={[
              //   { value: 'temple1', label: 'Temple 1' },
              //   { value: 'temple2', label: 'Temple 2' }
              // ]}
              options={templeOptions}
              onChange={setSelectedTemple}
              value={selectedTemple}
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: '#333333', // Dark gray background for control
                  borderColor: '#F6C300', // Orange border
                  borderRadius: '0.375rem',
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: '#333333', // Dark gray background for menu
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? '#F6C300' : '#444444', // Highlighted and non-highlighted option backgrounds
                  color: state.isSelected ? '#FFFFFF' : '#F6C300', // Text color for highlighted and non-highlighted options
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: '#F6C300', // Text color for the selected item
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: '#F6C300', // Placeholder color
                }),
              }}
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
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: '#333333', // Dark gray background for control
                  borderColor: '#F6C300', // Orange border
                  borderRadius: '0.375rem',
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: '#333333', // Dark gray background for menu
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? '#F6C300' : '#444444', // Highlighted and non-highlighted option backgrounds
                  color: state.isSelected ? '#FFFFFF' : '#F6C300', // Text color for highlighted and non-highlighted options
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: '#F6C300', // Text color for the selected item
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: '#F6C300', // Placeholder color
                }),
              }}
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
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default PoojaHeader;
