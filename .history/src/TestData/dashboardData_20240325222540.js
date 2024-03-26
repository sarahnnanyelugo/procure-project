import Order1 from "../assets/images/order1.png";
import Order2 from "../assets/images/order2.png";

export const dashboardData = {
  orderID: "#45567HG-FGYU-YTFG",
  orderAmount: 500000,
  shippedTo: "Patrick Benson",
  date: "12 February 2024",

  data: [
    {
      id: 1,

      orderdDetail:
        " CeraVe Salicylic Acid Cleanser 16 Ounce Renewing Exfoliating FaceWash With Vitamin D for Normal Skin Fragrance Free, 16 Fl Oz (Pack)",
      images: [Order1, Order2, Order1],
      distributor: "Stalls Stationaries",
      unitPrice: 2000,
      qty: 20,
    },
    {
      id: 2,

      orderdDetail:
        " CeraVe Salicylic Acid Cleanser 16 Ounce Renewing Exfoliating FaceWash With Vitamin D for Normal Skin Fragrance Free, 16 Fl Oz (Pack)",
      images: [Order2, Order1, Order2],
      distributor: "Stalls Stationaries",
      unitPrice: 2000,
      qty: 20,
    },
  ],
};
