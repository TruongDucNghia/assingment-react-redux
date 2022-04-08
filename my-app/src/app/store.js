import { configureStore } from '@reduxjs/toolkit';
import CategorySlice from '../features/CategorySlice';
import FavoriteSlice from '../features/FavoriteSlice';
import NewsSlice from '../features/NewsSlice';
import ProductSlice from '../features/ProductSlice';
import UserSlice from '../features/UserSlice';
export const store = configureStore({
  reducer: {
    category: CategorySlice,
    product: ProductSlice,
    user: UserSlice,
    news: NewsSlice,
    favorite: FavoriteSlice
  },
});
