import classes from './CartButton.module.css';
import {useDispatch} from "react-redux";
import {toggleCartActions} from "../../store/cartToggle";

const CartButton = (props) => {
  const dispatch = useDispatch();

  function toggleCart() {
      dispatch(toggleCartActions.toggleCart())
  }

  return (
    <button
      className={classes.button}
      onClick={toggleCart}
    >
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
