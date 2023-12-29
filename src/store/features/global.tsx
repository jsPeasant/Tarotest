import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '@tarojs/taro'

// 获取用户信息列表
export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const res = await Promise.resolve({
        data: {
            name: '悟空'
        }
    })
    return res.data
})
  


export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        loading: false,
        userInfo: {
            name: 'Mark'
        }
    },
    reducers: {
        updateUserInfo: (state) => {
            state.userInfo.name = 'Global Mark'
        }
    },
    // extraReducers(builder) {
    //     builder.addCase(fetchUsers.pending, (state) => {
    //         state.loading = true
    //     })
    //     .addCase(fetchUsers.fulfilled, (state, action) => {
    //         state.loading = false
    //         state.userInfo = action.payload
    //     })
    //     .addCase(fetchUsers.rejected , (state) => {
    //         state.loading = false
    //     })
    // }
})

export default globalSlice.reducer