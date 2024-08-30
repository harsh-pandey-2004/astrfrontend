import React, { useEffect,useState } from 'react';
import { usePanditData } from './PanditDataContext';
import { useNavigate } from 'react-router-dom';

const AvailablePandit = () => {
    const { filteredData } = usePanditData();
    const [storedPooja, setStoredPooja] = useState('');
    const navigate=useNavigate();
    console.log(filteredData);

    useEffect(()=>{
      const poojaName=localStorage.getItem('selectedPooja')
      setStoredPooja(poojaName)
    },[storedPooja])

    return (
        <div className='p-6 bg-gray-100 rounded-lg cursor-pointer' onClick={()=>navigate('/book-a-pandit/bps')}>
            {/* <h2 className='text-2xl font-semibold mb-4'>Available Pandits</h2> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredData && filteredData.map((pandit) => (
                    <div key={pandit._id} className='bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row'>
                        
                        {/* Content Section */}
                        <div className='flex-1'>
                            <div className='mb-4 border-b border-gray-200 pb-2'>
                                <h3 className='text-3xl font-medium'>{pandit.name}</h3>
                            </div>
                            <div>
                                <p className='text-gray-700 text-xl'><strong>Pincode:</strong> {pandit.pincode}</p>
                                <p className='text-gray-700 text-xl'><strong>Skills:</strong> {pandit.Skills.join(', ')}</p>
                                <p className='text-gray-700 text-xl'><strong>Professional Qualifications:</strong> {pandit.ProfessionalQualifications.join(', ')}</p>
                                <p className='text-gray-700 text-xl'><strong>Belongs To:</strong> {pandit.belongsTo}</p>
                                <p className='text-gray-700 text-xl'><strong>Experience:</strong> {pandit.experience}</p>
                                <p className='text-gray-700 text-xl'><strong>SelectedPooja:</strong> {storedPooja}</p>
                                
                                {/* <p className='text-gray-700'><strong>Availability:</strong> {pandit.availability.date.join(', ')}</p> */}
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className='flex-shrink-0 mb-4 mt-12 sm:mb-0 sm:mr-4'>
                            <img 
                                src={pandit.imageUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKZKE-sHagMcufyqtq803lJ-1fYDmnJglfQ&s'} 
                                alt={pandit.name} 
                                className='w-32 h-32 object-cover rounded-lg'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailablePandit;


