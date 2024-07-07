import React, { createContext, useContext, useReducer } from "react";
import data from "../data";

function reducer(state, action) {
  const i = state.findIndex((order) => order.id === action.payload);
  switch (action.type) {
    case "cancel":
      return state.filter((order) => order.id !== action.payload);
    case "get":
      state[i].status = "workpiece";
      return [...state];
    case "ready":
      state[i].status = "ready";
      return [...state];
    case "to courier":
      state[i].status = "courier on the way";
      return [...state];
    case "done":
      return state.filter((order) => order.id !== action.payload);
    default:
      return [...state];
  }
}

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);
  return (
    <OrdersContext.Provider value={{ state, dispatch }}>
      {children}
    </OrdersContext.Provider>
  );
};

function useOrders() {
  return useContext(OrdersContext);
}

export { OrdersProvider, useOrders };
