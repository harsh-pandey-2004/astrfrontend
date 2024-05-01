import React from 'react'
import NewKundli from '../kundalicomponents/Newkundli'
import SavedKundli from '../kundalicomponents/Savedkundali'

const Kundlis = () => {
  return (
    <div className=' md:flex gap-6 xs:flex-col  px-12 max-h-fit mt-10'>
        <NewKundli/>
        <SavedKundli/>
    </div>
  )
}

export default Kundlis