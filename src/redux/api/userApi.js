import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user) => ({ url: "/signUp", method: "POST", body: user }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export default userApi;
export const { useLoginMutation, useSignUpMutation } =
  userApi;
