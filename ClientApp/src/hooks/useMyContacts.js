import { useState, useEffect } from "react";

function useMyContacts() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch("/api/User/all")
      .then((response) => response.json())
      .then((data) => setData({ users_list: data }))
      .catch((error) => setError(error));
  }, []);

  return { data, error };
}

export default useMyContacts;
