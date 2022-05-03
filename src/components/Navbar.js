import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/">
          <h1>Bookstore CMS</h1>
        </NavLink>
        <ul className="ul-navbar">
          <li className="li-navbar" key={1}>
            <NavLink
              style={({ isActive }) => ({
                display: 'block',
                textDecoration: 'none',
                color: isActive ? 'black' : 'lightgrey',
              })}
              to="/"
              // exact
            >
              BOOKS
            </NavLink>
          </li>
          <li className="li-navbar" key={2}>
            <NavLink
              style={({ isActive }) => ({
                display: 'block',
                textDecoration: 'none',
                color: isActive ? 'black' : 'lightgrey',
              })}
              to="/categories"
              // exact
            >
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="user">LOGIN</div>
    </nav>
    <Outlet />
  </div>
);

export default Navbar;
