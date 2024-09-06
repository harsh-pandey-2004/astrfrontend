import { createContext ,useContext,useState } from "react";

const PoojaContext=createContext();

export const PoojaProvider=({children})=>{
    const [formData,setFormData]=useState([]);

    return (
        <PoojaContext.Provider value={{formData,setFormData}}>
            {children}
        </PoojaContext.Provider>
    )
}

export const usePoojaContext=()=>useContext(PoojaContext);