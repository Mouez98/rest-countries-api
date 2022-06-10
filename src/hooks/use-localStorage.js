import { useState } from "react";

const useLocalStorage = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {   
    try {
       const stored = localStorage.getItem(key);
       return stored ? stored : value;
     } catch (err) {
       return value;
     }
  });

  const setValue = val => {
      try {
        const valueToStore = val instanceof Function ? val(storedValue) : val;
        setStoredValue(valueToStore)
        if(typeof window !== 'undefined') {
            localStorage.setItem(key, storedValue )
        }
      } catch (err) {
        console.log(err);
      }
  }

  return [storedValue, setValue]
};

export default useLocalStorage;
