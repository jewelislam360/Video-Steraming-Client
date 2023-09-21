import api from "./api";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user) => ({ 
        url: "/signUp", 
        method: "POST", 
        body: user }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    getAllUser: builder.query({
      query:()=>({
      url:'/users',
      method:'GET',
    }),
  providesTags:['allUser']
  }),
    deleteUser: builder.mutation({
      query: ()=>({
        url:'/users/:id',
        method: 'DELETE',
      }),
invalidatesTags: ['allUser']
    }),
    currentUser: builder.query({
      query: (email) => ({ 
        url: `/user/${email?.email}`, 
        method: "GET" }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useGetAllUserQuery, useCurrentUserQuery } = userApi;
