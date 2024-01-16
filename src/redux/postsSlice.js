import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
        query: () => "posts"
    }),
    getPostById: builder.query({
        query: (id) => `posts/${id}`
    })

  })
});
// useGetAllPostsQuery was created by RTK query for you
export const {useGetAllPostsQuery, useGetPostByIdQuery} = postsApi