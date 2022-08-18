// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
	cartItems:[],
	amount:4,
	total:0,
	isLoading:false
};

// Variables
const url = 'https://course-api.com/react-useReducer-cart-project';

// Load data from server
// We can pass params with createAsyncThunk, here type see dispatch(getCartItems('smartphones')) in App.js
export const getCartItems = createAsyncThunk('cart/getCartItems', async(type, thunkAPI) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error){
		return thunkAPI.rejectWithValue('Something went wrong...');
	}
});

// Slice
const cartSlice = createSlice({
	name:'cart',
	initialState,
	reducers:{
		// Clear cart
		clearCart:(state) => {
			state.cartItems = [];
		},
		// Remove item
		removeItem:(state, action) => {
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter((item) => {
				return item.id !== itemId;
			});
		},
		// Increase
		increase:(state, { payload }) => {
			const itemId = payload.id;
			const item = state.cartItems.find((item) => {
				return item.id === itemId;
			});
			item.amount++;
		},
		// Decrease
		decrease:(state, { payload:id }) => {
			const item = state.cartItems.find((item) => {
				return item.id === id;
			});
			item.amount--;
		},
		// Calculate totals
		calculateTotals:(state) => {
			const { amount, total } = state.cartItems.reduce((acc, current) => {
				acc.amount += current.amount;
				acc.total += current.amount * current.price;
				return acc;
			},{ amount:0, total:0 });
			state.amount = amount;
			state.total = total;
		}
	},
	extraReducers:{
		[getCartItems.pending]:(state) => {
			state.isLoading = true;
		},
		[getCartItems.fulfilled]:(state, action) => {
			state.isLoading = false;
			state.cartItems = action.payload;
		},
		[getCartItems.rejected]:(state, action) => {
			console.log(action.payload); // Something went wrong...
			state.isLoading = false;
		}
	}
});

// Actions export
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

// Reducer export
export default cartSlice.reducer;