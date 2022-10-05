import axios from 'axios';
import { NoNetworkError } from '~config/exceptions';
import { BASE_URL, CLIENT_ID } from '@env';
import * as device from '~utils';

const defaultConfig = {
  baseURL: `https://${BASE_URL}/`,
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-key': `${CLIENT_ID}`,
    'trakt-api-version': '2',
    'X-Private-User': false,
    'X-Sort-By': 'rank',
    'X-Sort-How': 'asc'
  },
};

export const client = axios.create(defaultConfig);

export function isCancel(exception: any) {
  return axios.isCancel(exception) || exception instanceof AbortSignal;
}

client.interceptors.request.use(async config => {
  if (await device.isConnectedNetwork()) {
    return config;
  }

  throw new NoNetworkError();
});
