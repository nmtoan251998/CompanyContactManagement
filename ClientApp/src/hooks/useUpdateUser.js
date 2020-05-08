import { useState } from "react";

function useUpdateUser() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (data) => {
    setIsLoading(true);
    const response = await fetch("/api/User/", {
      body: JSON.stringify(data),
      method: "PUT",
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

  return [handleUpdate, { data, error, isLoading }];
}

export default useUpdateUser;
