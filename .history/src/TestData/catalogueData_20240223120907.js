import Img9 from "../assets/images/bs9.png";

const categories = [
  {
    id: 1,
    name: "Lights & Lighting",
    parent_id: 0,
  },
  {
    id: 2,
    name: "Home appliances",
    parent_id: 0,
  },
  {
    id: 3,
    name: "Construction",
    parent_id: 0,
  },
  {
    id: 4,
    name: "School supplies",
    parent_id: 0,
  },
  {
    id: 5,
    name: "Real Estate",
    parent_id: 0,
  },
  {
    id: 6,
    name: "Office Supplies",
    parent_id: 0,
  },
  {
    id: 7,
    name: "Car parts",
    parent_id: 0,
  },
  {
    id: 8,
    name: "Shoes",
    parent_id: 0,
  },
  {
    id: 9,
    name: "Gifts & Crafts",
    parent_id: 0,
  },
  {
    id: 10,
    name: "Healthcare",
    parent_id: 0,
  },
  {
    id: 11,
    name: "Food",
    parent_id: 0,
  },
  {
    id: 12,
    name: "Beauty",
    parent_id: 0,
  },
  {
    id: 13,
    name: "Sports",
    parent_id: 0,
  },
  {
    id: 14,
    name: "Funiture",
    parent_id: 0,
  },
  {
    id: 15,
    name: "Highlighters",
    parent_id: 4,
  },
  {
    id: 16,
    name: "Pencils & Pen",
    parent_id: 4,
  },
  {
    id: 17,
    name: "Notebooks",
    parent_id: 4,
  },
  {
    id: 18,
    name: "Backpacks",
    parent_id: 4,
  },
  {
    id: 19,
    name: "Textbooks",
    parent_id: 4,
  },
  {
    id: 20,
    name: "Laptops",
    parent_id: 4,
  },
  {
    id: 21,
    name: "Computer paper",
    parent_id: 4,
  },
  {
    id: 22,
    name: "Calculator",
    parent_id: 4,
  },
  {
    id: 23,
    name: "Cleaning supplies",
    parent_id: 4,
  },

  {
    id: 24,
    name: "bulbs",
    parent_id: 1,
  },
  {
    id: 25,
    name: "LEDs",
    parent_id: 1,
  },
  {
    id: 26,
    name: "Cables",
    parent_id: 1,
  },
  {
    id: 27,
    name: "Wires",
    parent_id: 1,
  },
  {
    id: 28,
    name: "Chandeliers",
    parent_id: 1,
  },
  {
    id: 29,
    name: "Search lights",
    parent_id: 1,
  },
  {
    id: 30,
    name: "Disco lights",
    parent_id: 1,
  },
  {
    id: 31,
    name: "Florescents",
    parent_id: 1,
  },
  {
    id: 32,
    name: "Lamb holders",
    parent_id: 1,
  },
  {
    id: 31,
    name: "Blenders",
    parent_id: 2,
  },
  {
    id: 32,
    name: "Juicers",
    parent_id: 2,
  },
  {
    id: 33,
    name: "Humidifiers",
    parent_id: 2,
  },
  {
    id: 34,
    name: "Portable & Wearable Fans",
    parent_id: 2,
  },
  {
    id: 35,
    name: "Air Conditioners",
    parent_id: 2,
  },
  {
    id: 37,
    name: "TV",
    parent_id: 2,
  },
  {
    id: 38,
    name: "Electric Irons",
    parent_id: 2,
  },
  {
    id: 39,
    name: "Washing Machine",
    parent_id: 2,
  },
  {
    id: 40,
    name: "Inverters & Inverter Batteries",
    parent_id: 2,
  },
  {
    id: 41,
    name: "Surface Finishing",
    parent_id: 3,
  },
  {
    id: 42,
    name: "Cement render",
    parent_id: 3,
  },
  {
    id: 43,
    name: "Tiles",
    parent_id: 3,
  },
  {
    id: 44,
    name: "Marble",
    parent_id: 3,
  },
  {
    id: 45,
    name: "Stucco",
    parent_id: 3,
  },
  {
    id: 46,
    name: "Stucco",
    parent_id: 3,
  },
  {
    id: 47,
    name: "Flooring",
    parent_id: 3,
  },
  {
    id: 48,
    name: "Wood finishing",
    parent_id: 3,
  },
  {
    id: 49,
    name: "Paints",
    parent_id: 3,
  },
  {
    id: 50,
    name: "Circuit breaker",
    parent_id: 3,
  },
  {
    id: 51,
    name: "3 units of 3 bedroom flats",
    parent_id: 5,
  },
  {
    id: 52,
    name: "4 plots of land",
    parent_id: 5,
  },
  {
    id: 53,
    name: "2 plots of dry land",
    parent_id: 5,
  },
  {
    id: 54,
    name: "6 units of terrace duplex",
    parent_id: 5,
  },
  {
    id: 55,
    name: "fully detached 6 bedroom duplex",
    parent_id: 5,
  },
  {
    id: 56,
    name: "semi detached 4 bedroom duplex",
    parent_id: 5,
  },
  {
    id: 57,
    name: "A room & palour self contain",
    parent_id: 5,
  },
  {
    id: 58,
    name: "A plot of fenced dry land",
    parent_id: 5,
  },
  {
    id: 59,
    name: "6 units of a room and palor self contain",
    parent_id: 5,
  },
  {
    id: 60,
    name: "Desks",
    parent_id: 6,
  },
  {
    id: 61,
    name: "Egonormic seats",
    parent_id: 6,
  },
  {
    id: 62,
    name: "A-4 papers",
    parent_id: 6,
  },
  {
    id: 63,
    name: "Hp laptops",
    parent_id: 6,
  },
  {
    id: 64,
    name: "Stationaries",
    parent_id: 6,
  },
  {
    id: 65,
    name: "1.5 horse power panasonic AC",
    parent_id: 6,
  },
  {
    id: 66,
    name: "Stablers",
    parent_id: 6,
  },
  {
    id: 67,
    name: "SUGs",
    parent_id: 6,
  },
  {
    id: 68,
    name: "Intercoms",
    parent_id: 6,
  },
  {
    id: 69,
    name: "Printers",
    parent_id: 6,
  },
  {
    id: 70,
    name: "Photocoping machine",
    parent_id: 6,
  },
  {
    id: 71,
    name: "Car engines",
    parent_id: 7,
  },
  {
    id: 72,
    name: "Tyres",
    parent_id: 7,
  },
  {
    id: 73,
    name: "Rareview mirror",
    parent_id: 7,
  },
  {
    id: 74,
    name: "Wipers",
    parent_id: 7,
  },
  {
    id: 75,
    name: "Starring wracks",
    parent_id: 7,
  },
  {
    id: 76,
    name: "Gear box",
    parent_id: 7,
  },
  {
    id: 77,
    name: "Break pad",
    parent_id: 7,
  },
  {
    id: 78,
    name: "Alternator belt",
    parent_id: 7,
  },
  {
    id: 78,
    name: "Battery",
    parent_id: 7,
  },
  {
    id: 79,
    name: "Seat cover",
    parent_id: 7,
  },
  {
    id: 80,
    name: "Head lights",
    parent_id: 7,
  },
  {
    id: 81,
    name: "Wheels",
    parent_id: 7,
  },
  {
    id: 82,
    name: "Stiletto heels",
    parent_id: 8,
  },
  {
    id: 83,
    name: "Block heels for ladies",
    parent_id: 8,
  },
  {
    id: 84,
    name: "Black leather shoes for men",
    parent_id: 8,
  },
  {
    id: 85,
    name: "Ballarina shoes",
    parent_id: 8,
  },
  {
    id: 86,
    name: "Babies preworkers",
    parent_id: 8,
  },
  {
    id: 87,
    name: "Ladies sandals",
    parent_id: 8,
  },
  {
    id: 88,
    name: "Men's sandals",
    parent_id: 8,
  },
  {
    id: 89,
    name: "Unisex sneakers",
    parent_id: 8,
  },
  {
    id: 90,
    name: "Unisex slipons",
    parent_id: 8,
  },
  {
    id: 91,
    name: "Flat shoes for ladies",
    parent_id: 8,
  },
  {
    id: 92,
    name: "Handmade leather bag",
    parent_id: 9,
  },
  {
    id: 93,
    name: "Gucci wrist watch",
    parent_id: 9,
  },
  {
    id: 94,
    name: "Rolex wrist watch",
    parent_id: 9,
  },
  {
    id: 95,
    name: "India george",
    parent_id: 9,
  },
  {
    id: 96,
    name: "Customizeable mug",
    parent_id: 9,
  },
  {
    id: 97,
    name: "Hair band ",
    parent_id: 9,
  },
  {
    id: 97,
    name: "Hair band ",
    parent_id: 9,
  },
  {
    id: 97,
    name: "Hair band ",
    parent_id: 9,
  },
];
const products = [
  {
    id: 1,
    name: "school bag",
    image: Img9,
    category_id: 1,
  },
  {
    id: 2,
    name: "Highlighters",
    image: Img9,
    category_id: 2,
  },
  {
    id: 3,
    name: "Supercute Waterproof Mochila Infantil Book Bag ",
    image: Img9,
    category_id: 1,
  },
  {
    id: 4,
    name: "2021 GASON",
    image: Img9,
    category_id: 1,
  },
  {
    id: 5,
    name: "Paper For Books Economic 700g Gray Board Paper",
    image: Img9,
    category_id: 3,
  },
  {
    id: 6,
    name: "school bag",
    image: Img9,
    category_id: 3,
  },
  {
    id: 7,
    name: "Wholesale B5 Softcover Notebook Exercise Book",
    image: Img9,
    category_id: 4,
  },
  {
    id: 8,
    name: "school bag",
    image: Img9,
    category_id: 4,
  },
];
