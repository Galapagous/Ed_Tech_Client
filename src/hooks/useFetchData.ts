import { useState, useEffect } from 'react';
import { useLogout } from './useLogout';
import { useAxiosAuth } from './axiosAuth';

export const useFetchData = <T>(url: string) => {
  const [response, setResponse] = useState<T | null>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<any>({});
  const [pagination, setPagination] = useState<any>({});
  const [requestUrl, setrequestUrl] = useState('');
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const logout = useLogout();

  const axiosAuth = useAxiosAuth();
  useEffect(() => {
    axiosCall(url);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  async function axiosCall(url: string) {
    setrequestUrl(url);
    setLoading(true);
    try {
      const res = await axiosAuth.get(url);
      if (res.data.status || res.data.success) {
        setMeta(res?.data?.metadata);
        setPagination(res?.data?.pagination);
        setResponse(res?.data?.data);
        setError('');
      } else {
        setError('Something went wrong');
      }
    } catch (err: any) {
      setStatusCode(err?.response?.status);
      if (err?.response?.status === 401) {
        return logout();
      }
      setError(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function refetch(url?: string) {
    console.log({ url, requestUrl });
    axiosCall(url || requestUrl);
  }

  return {
    data: response,
    error,
    loading,
    meta,
    refetch,
    pagination,
    statusCode,
  };
};
