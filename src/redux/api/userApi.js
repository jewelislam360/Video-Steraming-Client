import api from "./api";

const userApi = api.injectEndpoints({
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

export const { useLoginMutation, useSignUpMutation } = userApi;
