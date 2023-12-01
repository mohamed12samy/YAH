import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import mineReducer from "./mineSlicer";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, mineReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (
    getDefaultMiddleware: (arg0: {
      serializableCheck: { ignoreActions: boolean };
    }) => any
  ) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }),
});

export let persistor = persistStore(store);
