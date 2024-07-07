const orders = [
  {
    id: 1,
    status: "new",
    price: 300560,
    formOfPayment: "Pay me",
    placeOfConsumption: "in the establishment",
    time: "15:22",
    productsList: [
      {
        name: "Пепси 0,5",
        count: 3,
      },
      {
        name: "Гамбургер",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
      {
        name: "Лаваш мясной Standart острый",
        count: 2,
      },
    ],
  },
  {
    id: 2,
    status: "new",
    price: 300560,
    formOfPayment: "Click Up",
    placeOfConsumption: "in the establishment",
    time: "15:22",
    productsList: [
      {
        name: "Пепси 0,5",
        count: 3,
      },
      {
        name: "Гамбургер",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
      {
        name: "Лаваш мясной Standart острый",
        count: 2,
      },
    ],
  },
  {
    id: 3,
    status: "new",
    price: 300560,
    formOfPayment: "Card",
    placeOfConsumption: "in the establishment",
    time: "15:22",
    productsList: [
      {
        name: "Пепси 0,5",
        count: 3,
      },
      {
        name: "Гамбургер",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
      {
        name: "Лаваш мясной Standart острый",
        count: 2,
      },
    ],
  },
  {
    id: 4,
    status: "new",
    price: 300560,
    formOfPayment: "Cash",
    placeOfConsumption: "with myself",
    time: "15:22",
    productsList: [
      {
        name: "Big Gamburger",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
      {
        name: "Пепси 0,5",
        count: 4,
      },
      {
        name: "Лаваш мясной Standart острый",
        count: 2,
      },
      {
        name: "Дабл Бургер",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
    ],
  },
  {
    id: 5,
    status: "new",
    price: 300560,
    formOfPayment: "Click Up",
    placeOfConsumption: "in the establishment",
    time: "15:22",
    productsList: [
      {
        name: "Пепси 0,5",
        count: 3,
      },
      {
        name: "Гамбургер",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
      {
        name: "Лаваш мясной Standart острый",
        count: 2,
      },
    ],
  },
  {
    id: 6,
    status: "workpiece",
    price: 300560,
    formOfPayment: "Card",
    placeOfConsumption: "in the establishment",
    time: "15:22",
    productsList: [
      {
        name: "Гамбургер",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
    ],
  },
  {
    id: 7,
    status: "workpiece",
    price: 300560,
    formOfPayment: "Card",
    placeOfConsumption: "in the establishment",
    time: "15:22",
    productsList: [
      {
        name: "Big Gamburger",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
      {
        name: "Пепси 0,5",
        count: 4,
      },
      {
        name: "Лаваш мясной Standart острый",
        count: 2,
      },
    ],
  },
  {
    id: 8,
    status: "workpiece",
    price: 300560,
    formOfPayment: "Card",
    placeOfConsumption: "delivery",
    time: "15:22",
    productsList: [
      {
        name: "Гамбургер",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
    ],
  },
  {
    id: 9,
    status: "ready",
    price: 300560,
    formOfPayment: "Cash",
    placeOfConsumption: "with myself",
    time: "15:22",
    productsList: [
      {
        name: "Лаваш мясной Standart острый",
        count: 2,
      },
    ],
  },
  {
    id: 10,
    status: "ready",
    price: 300560,
    formOfPayment: "Cash",
    placeOfConsumption: "in the establishment",
    time: "15:22",
    productsList: [
      {
        name: "Big Gamburger",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
      {
        name: "Пепси 0,5",
        count: 4,
      },
      {
        name: "Лаваш мясной Standart острый",
        count: 2,
      },
      {
        name: "Дабл Бургер",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
    ],
  },
  {
    id: 11,
    status: "ready",
    price: 300560,
    formOfPayment: "Cash",
    placeOfConsumption: "with myself",
    time: "15:22",
    productsList: [
      {
        name: "Лаваш мясной Standart острый",
        count: 2,
      },
    ],
  },
  {
    id: 12,
    status: "ready",
    price: 300560,
    formOfPayment: "Cash",
    placeOfConsumption: "with myself",
    time: "15:22",
    productsList: [
      {
        name: "Лаваш мясной Standart острый",
        count: 2,
      },
    ],
  },
  {
    id: 13,
    status: "courier on the way",
    price: 300560,
    formOfPayment: "Cash",
    placeOfConsumption: "delivery",
    time: "15:22",
    productsList: [
      {
        name: "Big Gamburger",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
      {
        name: "Пепси 0,5",
        count: 4,
      },
      {
        name: "Лаваш мясной Standart острый",
        count: 2,
      },
      {
        name: "Дабл Бургер",
        count: 1,
        descriptionForProduct: ["С сыром", "Без лука"],
      },
    ],
  },
];

export default orders;
