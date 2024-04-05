export const walletData = {
  headers: ["NAME/BUSINESS", "TYPE", "AMOUNT", "STATUS", "DATE", "INVOICE"],
  data: [
    {
      id: 1,
      name: { productType: "Iphone 13 ProMax", productDetail: "Apple.Inc" },
      type: "Mobile",
      amount: "$120.84",
      status: "Completed",
      date: "14 Mar 2023",
      invoice: "View",
    },

    {
      id: 2,
      name: { productType: "Netflix Subscription", productDetail: "Netflix" },

      type: "Entertainment",
      amount: "$620.84",
      status: "Pending",
      date: "21 Mar 2023",
      invoice: "View",
      category: ["replies"],
    },
    {
      id: 3,

      name: { productType: "Nike Emax", productDetail: "Nike" },
      type: "Shoe",
      amount: "$420.84",
      status: "Completed",
      date: "12 Apr 2023",
      invoice: "View",
      category: ["replies"],
    },
  ],
};
