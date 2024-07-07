import PayMeIcon from "../icons/PayMe.png";
import ClickUpIcon from "../icons/ClickUp.png";
import CardIcon from "../icons/credit-card.png";
import MoneyIcon from "../icons/money 1.png";

import inTheEstablishmentIcon from "../icons/inTheEstablishment.png";
import withMyselfIcon from "../icons/directions_walk.png";
import deliveryIcon from "../icons/Delivery.png";

function currentImgOfPayment(formOfPayment) {
  switch (formOfPayment) {
    case "Card":
      return CardIcon;
    case "Click Up":
      return ClickUpIcon;
    case "Pay me":
      return PayMeIcon;
    case "Cash":
      return MoneyIcon;
    default:
      return null;
  }
}

function currentPlaceOfConsumption(placeOfConsumption) {
  switch (placeOfConsumption) {
    case "in the establishment":
      return inTheEstablishmentIcon;
    case "with myself":
      return withMyselfIcon;
    case "delivery":
      return deliveryIcon;

    default:
      break;
  }
}

export { currentImgOfPayment, currentPlaceOfConsumption };
