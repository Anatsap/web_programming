
import { Routes, Route, NavLink } from 'react-router-dom';
import { LinkingWrapper } from './Navigation.styles';
import Home from '../Home/Home';

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
        <NavLink to="/shop" className={({ isActive }) => (isActive ? 'selected' : '')}>About us</NavLink>
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
      <Route path="/shop" element={<div>Hello it is about us</div>} />
      <Route path="/blog" element={<div>Hello it is journal</div>} />
      <Route path="/contact" element={<div>Hello it is stores</div>} />

      {}
      <Route path="/" element={<Home />} />
    </Routes>
  </LinkingWrapper>
);

export default Navigation;
