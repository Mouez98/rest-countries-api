import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]),
    [error, setError] = useState(null),
    [isLoading, setIsLoading] = useState(true);

  const fetchApi = useCallback(async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      // console.log(json);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setData(null);
    }
    setIsLoading(false);
  }, [url]);



  useEffect(() => {
    fetchApi();
    return () => new AbortController()
  }, [fetchApi]);
  return {data,isLoading,error}
};

export default useFetch;
