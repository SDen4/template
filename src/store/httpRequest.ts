import { API } from '../utils/api';

async function httpRequest() {
  const response = await API.get('getInitData').then((res) => res.data);
  return response;
}

export default httpRequest;
