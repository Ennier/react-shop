import classes from './CartItem.module.css';
import { addItem, removeItem } from '../../store/cartItems';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleRemoveItem({ id, title, quantity, total, price })}>-</button>
          <button onClick={() => handleAddItem({ id, title, quantity, total, price })}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
