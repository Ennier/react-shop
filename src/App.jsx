import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import {useSelector} from "react-redux";

function App() {
  const isCartShowed = useSelector(state => (state.uiSlice.cartIsVisible));

  const cartItems = useSelector(state => (state.cartSlice.items));

  useEffect(() => {
    const sendCartData = async () => {
      await fetch('https://react-shop-65415-default-rtdb.firebaseio.com/cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cartItems),
      })
    }

    sendCartData();
  }, [cartItems])

  return (
    <Layout>
      {isCartShowed && <Cart/>}
      <Products/>
    </Layout>
  );
}

export default App;
