import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { uiActions } from "./store/uiSlice";

function App() {
  const dispatch = useDispatch();
  const isCartShowed = useSelector(state => (state.uiSlice.cartIsVisible));
  const cartItems = useSelector(state => (state.cartSlice.items));
  const notification = useSelector(state => (state.uiSlice.notification));

  useEffect(() => {
    if (cartItems.length === 0) return;

    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }));

      const response = await fetch('https://react-shop-65415-default-rtdb.firebaseio.com/cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cartItems),
      })

      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      }));
    }

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      }));
    })

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
