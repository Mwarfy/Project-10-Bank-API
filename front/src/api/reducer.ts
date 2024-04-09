import { createAction, createSlice } from "@reduxjs/toolkit";

export type IReducer = {
  token?: string;
  emailReducer?: string;
  passwordReducer?: string;
  firstName?: string;
  lastName?: string;
};

export const initialState: IReducer = {
  token: undefined,
  emailReducer: undefined,
  passwordReducer: undefined,
  firstName: undefined,
  lastName: undefined,
};

export const setToken = createAction<string>("setToken");
export const setEmailReducer = createAction<string>("setEmail");
export const setPasswordReducer = createAction<string>("setPassword");
export const setFirstName = createAction<string>("setFirstName");
export const setLastName = createAction<string>("setLastName");

export const reducer = createSlice({
  name: "reducer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(setToken, (state, { payload }) => {
        state.token = payload;
      })
      .addCase(setEmailReducer, (state, { payload }) => {
        state.emailReducer = payload;
      })
      .addCase(setPasswordReducer, (state, { payload }) => {
        state.passwordReducer = payload;
      })
      .addCase(setFirstName, (state, { payload }) => {
        state.firstName = payload;
      })
      .addCase(setLastName, (state, { payload }) => {
        state.lastName = payload;
      }),
});
