// app/store.js
import { configureStore } from "@reduxjs/toolkit"
import { themeSlice } from "../features/theme/themeSlice"

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
})
