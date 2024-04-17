import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiService = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(response.data.results[0]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { userData, loading, error };
};

export default useApiService;
