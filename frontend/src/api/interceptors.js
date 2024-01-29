// import state from "../state";

/**
 *
 * @param {import("axios").AxiosResponse} res
 */
export function responseSuccessInterceptor(res) {
  // state.loading = false;
  return {
    success: true,
    data: res.data?.data || res.data,
    message: res.data?.data?.message || res.data?.error || res.data?.message,
    metadata: res?.data?.meta,
  };
}

/**
 *
 * @param {AxiosError} err
 */

export function responseErrorInterceptor(err) {
  // state.loading = false;
  return {
    success: false,
    errorType: err.response.status,
    message:
      err.response.data?.data?.message ||
      err.response.data?.error ||
      err.response?.data?.message,
  };
}
