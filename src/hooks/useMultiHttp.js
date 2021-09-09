import { useEffect, useState } from "react";
import {notify} from '../components/UI/Notification';

const useMultiHttp = (url, callsCount, options) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    const promiseArr = [];
    for (let i = 0; i < callsCount; i++) {
      promiseArr.push(fetch(url, options));
    }

    Promise.all(promiseArr)
      .then((responses) => Promise.all(responses.map(res => res.json())))
      .then((data) => {
        if (mounted) {
          setData(data);
          setLoading(false);
          setError(null);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
          setLoading(false);
          notify('Connection problem!', 'Danger')
        }
      });

    return () => (mounted = false);
  }, [url, callsCount, options]);

  return { data, error, loading };
};

export default useMultiHttp;
