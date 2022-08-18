// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	isOpen:false
};

// Slice
const modalSlice = createSlice({
	name:'modal',
	initialState,
	reducers:{
		// Show modal
		openModal:(state) => {
			state.isOpen = true;
		},
		// Hide modal
		closeModal:(state) => {
			state.isOpen = false;
		}
	}
});

// Actions export
export const { openModal, closeModal } = modalSlice.actions;

// Reducer export
export default modalSlice.reducer;