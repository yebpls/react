import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

function MyNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) => {
        let classes = ["nav-link"];
        if (isActive) {
          classes.push("active");
        }
        return classes.join(" ");
      }}
    >
      {children}
    </NavLink>
  );
}

function MainLayout() {
  return (
    <>
      <nav className="nav justify-content-center">
        <MyNavLink to="/">Home</MyNavLink>
        <MyNavLink to="/shoe-shop">Shoe Shop</MyNavLink>
        <MyNavLink to="/shopping-cart">Shopping Cart</MyNavLink>
      </nav>

      <Outlet />
    </>
  );
}

export default MainLayout;
