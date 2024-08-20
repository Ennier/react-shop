import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import {useSelector} from "react-redux";

function App() {
  const isCartShowed = useSelector(state => (state.toggleCart.isShowed));

  return (
    <Layout>
      {isCartShowed && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
