import axios from 'axios';

const $unAuthHost = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.PUBLIC_BACKEND_URL,
  withCredentials: false,
});

const $authHost = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.PUBLIC_BACKEND_URL,
  withCredentials: true,
});


// const authInterceptors = async (config: any) => {
//   const res = await fetch(`${import.meta.env.BACKEND_URL}/api/auth-next/token`, { method: 'GET' });
//   const resData = await res.json();
//   const token = resData?.access_token;
//   config.headers.authorization = `Bearer ${token}`;
//   return config;
// };
//
// $authHost.interceptors.request.use(authInterceptors, error => {
//   return Promise.reject(error);
// });

export {
  $authHost,
  $unAuthHost,
};
