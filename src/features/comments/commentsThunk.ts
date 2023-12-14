import { createAsyncThunk } from "@reduxjs/toolkit";
import comments from "../../assets/JSON/comments.json";
import { CommentsInterface } from "../../interfaces/CommentsInterface";

export const getCommentsListFromAPIThunk = createAsyncThunk<CommentsInterface[], void, { state: any, rejectValue: string }>("contact/getContactFromApi", async (): Promise<CommentsInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments);
        }, 2000);
    });
})