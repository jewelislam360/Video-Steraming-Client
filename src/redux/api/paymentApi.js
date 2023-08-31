import api from "./api";

const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    paymentIntent: builder.query({
      query: (price) => ({
        url: "/create-payment-intent",
        method: "GET",
      }),
    }),
    paymentConfig: builder.query({
      query: () => ({
        url: "/config",
        method: "GET",
      }),
    }),
    paymentSuccess: builder.mutation({
      query: (success) => {
        console.log(success, "success api 19 line");
        return {
          url: "/payment-success",
          body: success,
          method: "POST",
        };
      },
    }),
  }),
});

export const {
  usePaymentConfigQuery,
  usePaymentIntentQuery,
  usePaymentSuccessMutation,
} = paymentApi;
