import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cartActions';

function App() {
  const dispatch = useDispatch();
  const isCartShowed = useSelector(state => (state.uiSlice.cartIsVisible));
  const cartItems = useSelector(state => (state.cartSlice.items));
  const notification = useSelector(state => (state.uiSlice.notification));

  useEffect(() => {
    if (cartItems.length === 0) return;

    dispatch(sendCartData(cartItems));
  }, [cartItems, dispatch]);

  return (
    <>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {isCartShowed && <Cart />}
        <Products />
      </Layout>
    </>

  );
}

export default App;
