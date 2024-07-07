import React from "react";
import analytics from "../icons/analytics.svg";
import menuButton from "../icons/_menu icon (AAA).png";
import SearchAndIndicators from "./SearchAndIndicators";
import { useOrders } from "../context/OrdersContext";
import Order from "./Order";

const MainContent = () => {
  const { state } = useOrders();
  const newOrders = state.filter((order) => order.status === "new");
  const workpieceOrders = state.filter((order) => order.status === "workpiece");
  const readyOrders = state.filter((order) => order.status === "ready");
  const courierOnTheWayOrders = state.filter(
    (order) => order.status === "courier on the way"
  );
  return (
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
        <SearchAndIndicators />
        <div className="stages">
          <div className="stage new">
            <div className="stage-title">
              <p>Новый ({newOrders.length})</p>
            </div>
            <div className="orders">
              {newOrders.map((order) => (
                <Order key={order.id} order={order} />
              ))}
            </div>
          </div>
          <div className="stage workpiece">
            <div className="stage-title">
              <p>Заготовка ({workpieceOrders.length})</p>
            </div>
            <div className="orders">
              {workpieceOrders.map((order) => (
                <Order key={order.id} order={order} />
              ))}
            </div>
          </div>
          <div className="stage ready">
            <div className="stage-title">
              <p>Готов ({readyOrders.length})</p>
            </div>
            <div className="orders">
              {readyOrders.map((order) => (
                <Order key={order.id} order={order} />
              ))}
            </div>
          </div>
          <div className="stage onTheWay">
            <div className="stage-title">
              <p>Курьер в пути ({courierOnTheWayOrders.length})</p>
            </div>
            <div className="orders">
              {courierOnTheWayOrders.map((order) => (
                <Order key={order.id} order={order} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
