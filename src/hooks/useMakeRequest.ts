import toast from 'react-hot-toast';
import { useAxiosAuth } from './axiosAuth';
import { useLogout } from './useLogout';

interface IOptions {
  dontNotifyOnSuccess?: boolean;
  dontNotifyOnFailure?: boolean;
}

export function useMakeRequest() {
  const logout = useLogout();
  const axiosAuth = useAxiosAuth();
  return async (
    url: string,
    method: string,
    formData: any,
    onSuccess: (data?: any, meta?: any, headers?: any) => void,
    onFail: (err: any) => void,
    onFinal: () => void,
    options?: IOptions
  ) => {
    try {
      const response = await axiosAuth[method.toLowerCase()](url, formData);
      const message = response?.data?.message || 'success';
      if (response?.status) {
        if (!options?.dontNotifyOnSuccess) {
          toast.success(message);
        }
        const { data, meta, headers } = response.data;
        onSuccess(data, meta, headers);
      } else {
        if (!options?.dontNotifyOnFailure) {
          toast.error(message);
        }
      }
    } catch (error: any) {
      const message = error?.response?.message || 'Something went wrong';
      if (error?.response?.request?.status === 401) logout();
      if (!options?.dontNotifyOnFailure) {
        toast.error(message);
      }
      onFail(error);
    } finally {
      onFinal();
    }
  };
}
