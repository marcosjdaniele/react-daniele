let obj = [
  {
    id: "1",
    name: "Cheese Burger",
    categoria: "Hamburguesas",
    stock: "100",
    price: 1250,
    foto: "/assets/cheeseburger.jpg",
  },
  {
    id: "2",
    name: "Fried Onion Burger",
    categoria: "Hamburgesas",
    stock: "100",
    price: 1100,
    foto: "/assets/friedonionburger.jpg",
  },
  {
    id: "3",
    name: "Pollo",
    categoria: "Wraps",
    stock: "100",
    price: 1000,
    foto: "/assets/wrappollo.jpg",
  },
  {
    id: "4",
    name: "Vegetariano",
    categoria: "Wraps",
    stock: "100",
    price: 900,
    foto: "/assets/wrapvegeta.jpg",
  },
  {
    id: "5",
    name: "El Clasico de Mila",
    categoria: "Entrepanes",
    stock: "100",
    price: 1600,
    foto: "/assets/sandwichmilanesa.jpg",
  },
  {
    id: "6",
    name: "Bondiola Ahumada",
    categoria: "Entrepanes",
    stock: "100",
    price: 1700,
    foto: "/assets/sandwichbondiola.jpg",
  },
];

export const gFetch = (id) => {
  return new Promise((resuelto, rechazada) => {
    setTimeout(() => {
      resuelto(obj);
    }, 2000);
  });
};
