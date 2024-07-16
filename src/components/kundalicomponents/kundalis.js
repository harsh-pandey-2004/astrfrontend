import React from 'react'
import NewKundli from '../kundalicomponents/Newkundli'
import SavedKundli from '../kundalicomponents/Savedkundali'

const Kundlis = () => {
  return (
    <div className='flex flex-col gap-6 px-4 md:px-12 max-h-fit mt-10'>
        <NewKundli/>
        <SavedKundli/>
    </div>
  )
}

export default Kundlis