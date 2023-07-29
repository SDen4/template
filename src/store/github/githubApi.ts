import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubReducer',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (build) => ({
    getUser: build.query<{ avatar_url: string }, void>({
      query: () => `users/a${(Math.random() * 10).toFixed()}`,
    }),
  }),
});

export const { useGetUserQuery } = githubApi;
