import { useEffect, useState } from "react";
import { useCallback } from "react/cjs/react.development";

const useHttp = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const getData = useCallback(async (mounted) => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();

        setData(data);
        setError(null);

      setLoading(false);
    } catch (error) {
        setData(null);
        setError(error);
        setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    getData();
  }, [ getData]);
  


  return { data, error, loading, getData };
};

export default useHttp;