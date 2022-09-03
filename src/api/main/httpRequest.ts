import { API } from '../api';

export async function httpRequest() {
  const response = await API.get('getInitData').then((res) => res.data);
  return response;
}
