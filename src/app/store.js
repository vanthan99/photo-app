import { configureStore } from "@reduxjs/toolkit";
import photoReducer from 'features/Photo/photoSlice';
import { string } from 'yup';

const rootReducer = {
    photos: photoReducer,
}
const store = configureStore({
   reducer: rootReducer,
})

export default store;