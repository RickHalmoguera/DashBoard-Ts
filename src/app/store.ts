// app/store.js
import { configureStore } from "@reduxjs/toolkit"
import { themeSlice } from "../features/theme/themeSlice"
import { CommentSlice } from "../features/comments/commentsSlice"
import { TypedUseSelectorHook, useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    comments: CommentSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector