import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://video-streaming-server-sigma.vercel.app" }),
  tagTypes:['allUser'],
  endpoints: (builder) => ({}),
});

export default api;
