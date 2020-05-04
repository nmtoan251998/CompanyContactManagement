import { useState, useEffect } from "react";

function useMyProfile(id) {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`/api/User/${id}`)
      .then((response) => response.json())
      .then((data) => setData({ user: data }))
      .catch((error) => setError(error));
  }, [id]);

  return { data, error };
}

export default useMyProfile;
