import React from "react";
import { useState } from "react";

function useLocalStorage(key, intialValue){
const [value, setvalue] = useState(()=>{
    const stored = localStorage.getItem(key);
    return stored != null ? JSON.parse(stored) : intialValue;
})

const setStoredValue = (newVal)=>{
    setvalue(newVal);
    if(newVal!=null){
        localStorage.setItem(key,JSON.stringify(newVal))
    }
}
return [value,setStoredValue];
}

export default useLocalStorage;