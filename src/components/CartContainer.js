// Imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../store/features/modalSlice";
import CartItem from "./CartItem";

// Component
const CartContainer = () => {

	// Store
	const { cartItems, total, amount, isLoading } = useSelector((store) => {  return store.cart; });

	// Dispatch
	const dispatch = useDispatch();

	// Returns
	if (isLoading){
		return(
			<section className="cart">
				<div className="loading"/>
			</section>
		);
	}
	if (amount < 1){
		return(
			<section className="cart">
				<header>
					<h2>Your cart</h2>
					<h4 className="empty-cart">is currently empty...</h4>
				</header>
			</section>
		);
	}
	return(
		<section className="cart">
			<header>
				<h2>Your cart</h2>
			</header>
			<div>
				{
					cartItems.map((item) => {
						return <CartItem key={ item.id } { ...item }/>
					})
				}
			</div>
			<footer>
				<hr />
				<div className="cart-total">
					<h4>Total <span>${ total.toFixed(2) }</span></h4>
				</div>
				<button className="btn clear-btn" onClick={ () => { dispatch(openModal()); } }>
					Clear cart
				</button>
			</footer>
		</section>
	);

};

// Export
export default CartContainer;