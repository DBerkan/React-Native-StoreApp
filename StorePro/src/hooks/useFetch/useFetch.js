import React, {useState, useEffect} from 'react';

import axios from 'axios';

function useFetch(url) {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  async function FetchData() {
    
    try {
      const response = await axios.get(url);
      setListData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  return {listData, loading, error};
}

export default useFetch;
