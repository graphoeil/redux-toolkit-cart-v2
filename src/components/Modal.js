// Imports
import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/features/modalSlice";
import { clearCart } from "../store/features/cartSlice";

// Component
const Modal = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Confirm
	const handleConfirm = () => {
		dispatch(clearCart());
		dispatch(closeModal());
	};

	// Cancel
	const handleCancel = () => {
		dispatch(closeModal());
	};

	// Return
	return(
		<aside className="modal-container">
			<div className="modal">
				<h4>Remove all items from your cart ?</h4>
				<div className="btn-container">
					<button type="button" className="btn confirm-btn" onClick={ handleConfirm }>
						Confirm
					</button>
					<button type="button" className="btn clear-btn" onClick={ handleCancel }>
						Cancel
					</button>
				</div>
			</div>
		</aside>
	);

};

// Export
export default Modal;