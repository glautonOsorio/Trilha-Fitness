import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((value) => {
          setData(value);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);

  return [data, isLoading];
}
