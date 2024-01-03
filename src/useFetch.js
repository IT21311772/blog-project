import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('Error with fetching the data');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(false);
        })
        .catch(err => {
          setError(err.message);
          setIsPending(false);
        })
    }, 1000);
  }, [url]);

  return { data, error, isPending };
}

export default useFetch;