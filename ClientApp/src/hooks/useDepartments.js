import { useState, useEffect } from "react";

function useDepartments() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch("/api/department/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  return { data, error };
}

export default useDepartments;
