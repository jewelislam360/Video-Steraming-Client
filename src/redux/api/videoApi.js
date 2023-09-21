import api from "./api";

const videoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addHistory: builder.mutation({
      query: (historyBody) => ({
        url: "/videohistory",
        body: historyBody,
        method: "POST",
      }),
    }),
  }),
});

export const { useAddHistoryMutation } = videoApi;
