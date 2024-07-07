import React, { useState } from "react";
import alertCircle from "../icons/alert-circle.png";
import watchLaterTime from "../icons/watch_later.png";
import cancelIcon from "../icons/close.png";
import getIcon from "../icons/done.png";
import { useOrders } from "../context/OrdersContext";
import {
  currentImgOfPayment,
  currentPlaceOfConsumption,
} from "../func/currents";

const Order = ({ order }) => {
  const {
    id,
    price,
    formOfPayment,
    placeOfConsumption,
    productsList,
    time,
    status,
  } = order;
  const { dispatch } = useOrders();
  const [clicked, setClicked] = useState(false);
  let ImgOfPayment = currentImgOfPayment(formOfPayment);
  let PlaceOfConsumption = currentPlaceOfConsumption(placeOfConsumption);

  function doneOrToCourier() {
    if (placeOfConsumption === "delivery")
      dispatch({ type: "to courier", payload: id });
    else dispatch({ type: "done", payload: id });
  }

  return (
    <div className="order" onClick={() => setClicked(!clicked)}>
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
          <img src={ImgOfPayment} alt="form of payment" />
          <img src={PlaceOfConsumption} alt="place of consumption" />
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
      <div className="status-changer">
        {status === "new" && (
          <>
            <button
              className="cancel-btn"
              onClick={() => dispatch({ type: "cancel", payload: id })}
            >
              <img src={cancelIcon} alt="cancel icon" /> Отменить
            </button>
            <button
              className="get-order-btn"
              onClick={() => dispatch({ type: "get", payload: id })}
            >
              <img src={getIcon} alt="done icon" /> Принять
            </button>
          </>
        )}
        {status === "workpiece" && clicked && (
          <button
            className="ready-btn"
            onClick={() => dispatch({ type: "ready", payload: id })}
          >
            Готово
          </button>
        )}
        {status === "ready" && clicked && (
          <button className="ready-btn" onClick={doneOrToCourier}>
            {placeOfConsumption === "delivery" ? "На Доставку" : "Завершить"}
          </button>
        )}
        {status === "courier on the way" && clicked && (
          <button
            className="ready-btn"
            onClick={() => dispatch({ type: "done", payload: id })}
          >
            Завершить
          </button>
        )}
      </div>
    </div>
  );
};

export default Order;
