import { useState, useEffect } from "react";

function useUser(auth) {
  const [data, setData] = useState({ isLoading: true, user: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    const onChange = (currentUser) => {
      setData({ isLoading: false, user: currentUser });
    };
    const onError = (e) => setError(e);
    const unsubscribe = auth.onAuthStateChanged(onChange, onError);
    return unsubscribe;
  }, [auth]);

  const { isLoading, user } = data;
  return [isLoading, error, user];
}

export default useUser;
