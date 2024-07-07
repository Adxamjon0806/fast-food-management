import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <nav className="nav">
        <div className="logo-wraper">
          <div className="logo">D</div>
        </div>
        <h1>Cегодняшние заказы</h1>
      </nav>
      {children}
    </section>
  );
};

export default Layout;
