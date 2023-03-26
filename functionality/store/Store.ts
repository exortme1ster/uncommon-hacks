import {
  configureStore,
  combineReducers,
  applyMiddleware,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import userReducer from "./UserAuth";
import toastReducer from "./Toast";

// const rootReducer = combineReducers({
//   userReducer,
//   toastReducer,
// });

export const store = configureStore({
  // @ts-ignore
  reducer: {
    userReducer,
    toastReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;
