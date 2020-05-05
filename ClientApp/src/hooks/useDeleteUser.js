import { useState } from "react";

function useDeleteUser() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (id) => {
    setIsLoading(true);
    const response = await fetch(`/api/User/${id}`, {
      body: JSON.stringify(data),
      method: "DELETE",
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

  return [handleDelete, { data, error, isLoading }];
}

export default useDeleteUser;
