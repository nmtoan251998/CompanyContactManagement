import { useState } from "react";

function useCreateUser() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async (data) => {
    setIsLoading(true);
    const response = await fetch("/api/User/", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonData = await response.json();
    setIsLoading(false);
    if (response.status === 201) {
      setData(jsonData);
      return { data: jsonData, error: null };
    } else {
      setError(jsonData);
      return { data: null, error: jsonData };
    }
  };

  return [handleCreate, { data, error, isLoading }];
}

export default useCreateUser;
