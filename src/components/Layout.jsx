import React from "react";
import analytics from "../icons/analytics.svg";
import menuButton from "../icons/_menu icon (AAA).png";
import searchIcon from "../icons/search.svg";
import shopingListIcon from "../icons/shopping-list 1.svg";
import timeIcon from "../icons/Vector.png";

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <nav className="nav">
        <div className="logo-wraper">
          <div className="logo">D</div>
        </div>
        <h1>Cегодняшние заказы</h1>
      </nav>
      <main>
        <div className="left-div">
          <div className="search-div">
            <img src={analytics} alt="search-icon" />
          </div>
          <button className="menu-btn">
            <img src={menuButton} alt="menu" />
          </button>
        </div>
        <div className="main-div">
          <div className="indicators">
            <div className="indicators-input">
              <img src={searchIcon} alt="search-icon" />
              <input placeholder="Поиск по ID" type="number" />
            </div>
            <div className="all-and-timer">
              <div className="all">
                <img src={shopingListIcon} alt="shoping list icon" />
                <p>Всего: 115</p>
                <button>^</button>
              </div>
              <div className="timer">
                <img src={timeIcon} alt="timer" />
                <p>45:08</p>
              </div>
            </div>
          </div>
          <div className="stages">
            <div className="stage new">
              <div className="stage-title">
                <p>Новый (0)</p>
              </div>
              <div className="orders"></div>
            </div>
            <div className="stage workpiece">
              <div className="stage-title">
                <p>Заготовка (0)</p>
              </div>
              <div className="orders"></div>
            </div>
            <div className="stage ready">
              <div className="stage-title">
                <p>Готов (0)</p>
              </div>
              <div className="orders"></div>
            </div>
            <div className="stage onTheWay">
              <div className="stage-title">
                <p>Курьер в пути (0)</p>
              </div>
              <div className="orders"></div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Layout;
