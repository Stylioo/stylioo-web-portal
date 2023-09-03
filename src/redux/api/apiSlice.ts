import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getRepos: builder.query({
            query: (username) => `users/${username}/repos`,
        }),
    }),
})  