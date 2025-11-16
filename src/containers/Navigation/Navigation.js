
import { Routes, Route, NavLink } from 'react-router-dom';
import { LinkingWrapper } from './Navigation.styles';
import Home from '../Home/Home';
import Catalog from '../Catalog/Catalog';
import ProductDetails from '../ProductDetails/ProductDetails';
import { Provider } from "react-redux";
import Checkout from '../../Checkout';
import { Order } from '../../cart_pages/Order';
import Success from '../../cart_pages/Success'

const Navigation = () => (

  <LinkingWrapper>
    <ul>
      <li>
        {}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'selected' : '')}
          end 
        >
          Shop
        </NavLink>
      </li>
      {}
      <li>
        <NavLink to="/Catalog" className={({ isActive }) => (isActive ? 'selected' : '')}>Catalog</NavLink>
      </li>
      <li>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'selected' : '')}>Journal</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'selected' : '')}>Stores</NavLink>
      </li>
    </ul>

    <Routes> {}
      {}
      <Route path="/catalog" element={<Catalog/>} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/blog" element={<div>Hello it is journal</div>} />
      <Route path="/contact" element={<div>Hello it is stores</div>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/success" element={<Success/>} />
      {}
      <Route path="/" element={<Home />} />
    </Routes>
  </LinkingWrapper>

);

export default Navigation;
