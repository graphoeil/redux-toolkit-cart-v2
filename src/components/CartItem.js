// Imports
import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../store/features/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";

// Component
const CartItem = ({ id, title, price, img, amount }) => {

	// Dispatch
	const dispatch = useDispatch();

	// Decrease or remove
	const handleDecrease = () => {
		if (amount === 1){
			dispatch(removeItem(id));
			return;
		}
		dispatch(decrease(id));
	};

	// Return
	return(
		<article className="cart-item">
			<img src={ img } alt={ title } />
			<div>
				<h4>{ title }</h4>
				<h4 className="item-price">${ price }</h4>
				<button className="remove-btn" onClick={ () => { dispatch(removeItem(id)); } }>
					Remove
				</button>
			</div>
			<div>
				<button className="amount-btn" onClick={ () => { dispatch(increase({ id:id })); } }>
					<ChevronUp/>
				</button>
				<p className="amount">{ amount }</p>
				<button className="amount-btn" onClick={ handleDecrease }>
					<ChevronDown/>
				</button>
			</div>
		</article>
	);

};

// Export
export default CartItem;