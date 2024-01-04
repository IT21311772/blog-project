import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

  useEffect(() => {
    const abortControl = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortControl.signal })
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
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setError(err.message);
            setIsPending(false);
          }
        })
    }, 500);

    return () => abortControl.abort();
  }, [url]);

  return { data, error, isPending };
}

export default useFetch;