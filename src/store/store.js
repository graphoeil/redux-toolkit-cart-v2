// Imports
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import modalReducer from "./features/modalSlice";

// Store
const store = configureStore({
	reducer:{
		cart:cartReducer,
		modal:modalReducer
	}
});

// Export
export default store;