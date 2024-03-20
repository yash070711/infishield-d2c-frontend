import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAuthUser = createAsyncThunk('fetchAuthUser', async () => {
    const userinfo = await sessionStorage.getItem('userinfo')
    return (userinfo) ? JSON.parse(userinfo) : []
});
