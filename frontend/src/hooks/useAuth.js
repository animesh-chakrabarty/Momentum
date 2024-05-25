import { useState } from "react";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState({});

  //   making API call
  const fetchAuth = async (url, email, password) => {
    setIsLoading(true);
    setError(null);

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res_json = await res.json();

    if (!res.ok) {
      setIsLoading(false);
      setError(res_json.error);
    }

    if (res.ok) {
      setResponse(res_json);
      // save the user & token to localStorage
      // localStorage.setItem(
      //   "momentum-user-credentials",
      //   JSON.stringify(res_json)
      // );
      // update loading state
      setIsLoading(false);
    }
  };

  return { fetchAuth, isLoading, error, response };
};
