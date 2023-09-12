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
    })}),
    deleteUser: builder.query({
      query: ()=>({
        url:'/users/:id',
        method: 'DELETE',
      })
    })
  }),
});

export const { useLoginMutation, useSignUpMutation, useGetAllUserQuery } = userApi;
