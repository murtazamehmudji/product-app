import types from "../types";

export const addCategory = (payload) => ({
    type: types.ADD_CATEGORY,
    payload
})

export const removeCategory = (payload) => ({
    type: types.REMOVE_CATEGORY,
    payload
})

export const addProduct = (payload) => ({
    type: types.ADD_PRODUCT,
    payload
})

export const removeProduct = (payload) => ({
    type: types.REMOVE_PRODUCT,
    payload
})

export const setKey = (key, value) => ({
    type: types.SET_KEY,
    payload: { key, value }
})