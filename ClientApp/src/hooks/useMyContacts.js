import { useState, useEffect } from "react";

function useMyContacts() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    fetch("/api/User/all")
      .then((response) => response.json())
      .then((data) => setData({ users_list: data }))
      .catch((error) => setError(error));
  }, [timestamp]);

  const refresh = () => {
    setTimestamp(Date.now());
  };

  return { data, error, refresh };
}

export default useMyContacts;
