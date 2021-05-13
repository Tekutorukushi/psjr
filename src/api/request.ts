import { createEffect } from 'effector';
import {} from 'next/';
import axios from 'redaxios';

interface RequestParams {
  path: string;
  method: 'GET' | 'POST';
  query: Record<string, string>;
}

const requestFx = createEffect<RequestParams, any, Error>(
  async ({ path, method, query }: RequestParams) => {
    const search = new URLSearchParams(query);

    const fullPath = `prefix/${path}?${search.toString()}`;

    const { data } = await axios.request(fullPath, { method });

    return data;
  },
);

export { requestFx };
