import { create } from 'zustand';
import { CartItem } from '../../types';

type Store = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

export const useShoppingCart = create<Store>()((set) => ({
  cart: [],
  addToCart: (cartItem: CartItem) =>
    set((state) => ({ cart: [...state.cart, cartItem] })),
}));
