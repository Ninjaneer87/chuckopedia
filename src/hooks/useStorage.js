import { useState, useCallback } from "react";
import { getUniqueElementsFromArray } from "../utility";

const useStorage = (key) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem(key)) || []);

  const saveData = useCallback((data) => {
    localStorage.setItem(key, JSON.stringify(data));
    setData(data)
  }, [key])

  const clearData = useCallback((key) => {
    const data = [];
    localStorage.setItem(key, JSON.stringify(data));
    setData(data)
  }, []);

  const addNewItems = useCallback((items) => {
    const allitems = [...data, ...items];
    const uniqueItems = getUniqueElementsFromArray(allitems);
    saveData(uniqueItems);
  }, [data, saveData])

  return { data, setData: saveData, clearData, addNewItems };
};

export default useStorage;