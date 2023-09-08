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
    editUser: builder.mutation({
      query: (user) => ({ url: "/edituser", method: "PETCH", body: user }),
    }),
    currentUser: builder.query({
      query: (email) => ({ url: `/user?email=${email.email}`, method: "GET" }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useEditUserMutation,
  useCurrentUserQuery,
} = userApi;
