import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubReducer',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (build) => ({
    getUser: build.query<{ avatar_url: string }, string>({
      query: (path: string) => path,
    }),
  }),
});

export const { useGetUserQuery } = githubApi;
