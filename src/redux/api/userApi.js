import api from "./api";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user) => ({
        url: "/signUp",
        method: "POST",
        body: user
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      providesTags: ['allUser']
    }),
    deleteUser: builder.mutation({
      query: () => ({
        url: '/users/:id',
        method: 'DELETE',
      }),
      invalidatesTags: ['allUser']
    }),
    currentUser: builder.query({
      query: (email) => {
        console.log(email, "emon"); return ({
          url: `/user/${email.email}`,
          method: "GET"
        })
      },
    }),
    editUser: builder.mutation({
      query: (user) => ({
        url: `/userEdit/${user?.Email}`,
        method: "PATCH",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useGetAllUserQuery, useCurrentUserQuery, useEditUserMutation } = userApi;
