import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import authReducer from './authSlice';

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('http://localhost:5000/api/products');
    return response.data;
  }
);

// Initial state for products
const initialProductsState = [];

// Initial state for cart
const initialCartState = {
  items: [],
};

// Initial state for order
const initialStateOrder = {
  items: [],
  shipping_charge: 50,
  discount_in_percent: 10,
  shipping_address: '',
};

// Product slice
const productSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;

      // Check for duplicates
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

// Order slice
const orderSlice = createSlice({
  name: 'order',
  initialState: initialStateOrder,
  reducers: {
    setOrderCart(state, action) {
      state.items = action.payload.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
    },
    setShippingAddress(state, action) {
      state.shipping_address = action.payload;
    },
    calculateOrderTotal(state) {
      const itemTotal = state.items.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      );
      const discount = (itemTotal * state.discount_in_percent) / 100;
      state.total = itemTotal + state.shipping_charge - discount;
    },
  },
});

// Export actions
export const { addItemToCart, removeItemFromCart, updateQuantity } = cartSlice.actions;
export const { setOrderCart, setShippingAddress, calculateOrderTotal } = orderSlice.actions;

// Export the store
export default configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
    auth: authReducer,
  },
});
