import { useState, useEffect } from "react";

function useRequest(requestFn, options = {}) {
  const { depedencies = [] } = options;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const request = async () => {
    try {
      setIsLoading(true);
      const data = await requestFn();
      setData(data);
    } catch (error) {
      // error.response.data: format của axios
      setError(error.response.data.message || "Something went wrong!!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    request();
  }, [...depedencies]);

  return { data, isLoading, error };
}

export default useRequest;
