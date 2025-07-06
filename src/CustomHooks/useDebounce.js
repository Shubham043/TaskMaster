import { useEffect,useState } from "react";

function useDebounce(value,delay){
     
    const [DebounceValue, setDebounceValue] = useState("");

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebounceValue(value);
      }, delay);
    
      return () => {
        clearInterval(timer)
      }
    }, [value,delay]);
    


    return DebounceValue;
}

export default useDebounce;