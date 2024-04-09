import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICallLogin,
  ICallSignup,
  ICallUpdateProfile,
  IResponseLogin,
  IResponseProfil,
  IResponseUser,
} from "type/Type";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1/user",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<IResponseLogin, ICallLogin>({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
    signup: builder.mutation<IResponseUser, ICallSignup>({
      query: (body) => ({
        url: "signup",
        method: "POST",
        body,
      }),
    }),
    profile: builder.mutation<IResponseProfil, string>({
      query: (body) => ({
        url: "profile",
        method: "POST",
        headers: {
          Authorization: `Bearer ${body}`,
        },
      }),
    }),
    profileUpdate: builder.mutation<IResponseUser, ICallUpdateProfile>({
      query: ({ token, ...body }) => ({
        url: "profile",
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useProfileMutation,
  useProfileUpdateMutation,
} = api;
