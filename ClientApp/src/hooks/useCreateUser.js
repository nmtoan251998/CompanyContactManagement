import { useState } from "react";

function useCreateUser() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const handleCreate = async (data) => {
    const response = await fetch("/api/User/", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonData = await response.json();
    if (response.status === 201) {
      setData(jsonData);
      return { data: jsonData, error: null };
    } else {
      setError(jsonData);
      return { data: null, error: jsonData };
    }
  };

  return [handleCreate, { data, error }];
}

export default useCreateUser;
