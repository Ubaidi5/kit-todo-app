import { useEffect, useState } from "react";

export const useLocalStorage = (initialValue, keyName) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(keyName, state);
  }, [state]);

  return [state, setState];
};
