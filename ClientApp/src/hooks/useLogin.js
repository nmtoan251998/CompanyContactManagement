import { useState } from "react";

function useLogin() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleLogin = async (data) => {
    setIsLoading(true);
    const response = await fetch("/api/user/login", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonData = await response.json();
    setIsLoading(false);
    if (response.status === 200) {
      setData(jsonData);
      return { data: jsonData, error: null };
    } else {
      setError(jsonData);
      return { data: null, error: jsonData };
    }
  };

  return [handleLogin, { data, error, isLoading }];
}

export default useLogin;
