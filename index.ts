import { PreloadedState, configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer,
    preloadedState,
  });
}

const store = setupStore();

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
