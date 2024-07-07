import React, { useEffect, useState } from "react";
import searchIcon from "../icons/search.svg";
import shopingListIcon from "../icons/shopping-list 1.svg";
import timeIcon from "../icons/Vector.png";
import { useOrders } from "../context/OrdersContext";
import alertCircle from "../icons/alert-circle.png";
import watchLaterTime from "../icons/watch_later.png";

const SearchAndIndicators = () => {
  const { state } = useOrders();
  const [inputId, setInputId] = useState("");
  const [serarchedOrder, setSerarchedOrder] = useState([]);

  useEffect(() => {
    const filteredOrders = state.filter(
      (order) => order.id === Number(inputId)
    );
    setSerarchedOrder(filteredOrders);
  }, [inputId, serarchedOrder]);

  return (
    <>
      <div className="indicators">
        <div className="indicators-input">
          <img src={searchIcon} alt="search-icon" />
          <input
            placeholder="Поиск по ID"
            type="number"
            onChange={(e) => setInputId(e.target.value)}
          />
        </div>
        <div className="all-and-timer">
          <div className="all">
            <img src={shopingListIcon} alt="shoping list icon" />
            <p>Всего: {state.length}</p>
            <button>^</button>
          </div>
          <div className="timer">
            <img src={timeIcon} alt="timer" />
            <p>45:08</p>
          </div>
        </div>
      </div>
      <div className="searchedOrder">
        {serarchedOrder.map(({ id, price, productsList, time }) => (
          <div className="order">
            <div className="title-of-order">
              <div className="title-id">
                <h3>ID:{id}</h3>
                <img src={alertCircle} alt="alert-circle" />
              </div>
              <div className="title-descriptions">
                <p>
                  {`${Math.floor(price / 1000)} ${
                    price - Math.floor(price / 1000) * 1000
                  }`}{" "}
                  сум
                </p>
              </div>
            </div>
            <div className="products">
              {productsList.map((product, i) => (
                <h4 key={i}>
                  {product.count} x {product.name}
                  {product.descriptionForProduct?.map((description) => (
                    <p key={description}>{description}</p>
                  ))}
                </h4>
              ))}
              <p className="watch-later-time">
                <img src={watchLaterTime} alt="watch-later-time" />
                {time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchAndIndicators;
