
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
          Home
        </NavLink>
      </li>
      {}
      <li>
        <NavLink to="/shop" className={({ isActive }) => (isActive ? 'selected' : '')}>Shop</NavLink>
      </li>
      <li>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'selected' : '')}>Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'selected' : '')}>Contact</NavLink>
      </li>
    </ul>

    <Routes> {}
      {}
      <Route path="/shop" element={<div>Hello it is shop</div>} />
      <Route path="/blog" element={<div>Hello it is blog</div>} />
      <Route path="/contact" element={<div>Hello it is contact</div>} />

      {}
      <Route path="/" element={<Home />} />
    </Routes>
  </LinkingWrapper>
);

export default Navigation;
