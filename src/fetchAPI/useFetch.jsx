import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (response.data != null)
          setData(response.data);
        else
          throw new Error();
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
