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
    id: 98,
    name: "Hair clip ",
    parent_id: 9,
  },
  {
    id: 99,
    name: "18 caret gold ring ",
    parent_id: 9,
  },
  {
    id: 100,
    name: "Arm bag ",
    parent_id: 9,
  },
  {
    id: 101,
    name: "Inhaler ",
    parent_id: 10,
  },
  {
    id: 102,
    name: "BP monitor ",
    parent_id: 10,
  },
  {
    id: 103,
    name: "Plaster",
    parent_id: 10,
  },
  {
    id: 104,
    name: "Medical Cotton Products",
    parent_id: 10,
  },
  {
    id: 105,
    name: "Walker & Rollator",
    parent_id: 10,
  },
  {
    id: 106,
    name: "Iodine Pad & Swab",
    parent_id: 10,
  },
  {
    id: 107,
    name: "Hand sanitizer",
    parent_id: 10,
  },
  {
    id: 108,
    name: "Elastic Bandage ",
    parent_id: 10,
  },
  {
    id: 109,
    name: "Antibacterial Wet Wipes",
    parent_id: 10,
  },
  {
    id: 110,
    name: "Medical Goggles ",
    parent_id: 10,
  },
  {
    id: 111,
    name: "Surgical Towel",
    parent_id: 10,
  },
  {
    id: 112,
    name: "Burger",
    parent_id: 11,
  },
  {
    id: 113,
    name: "Cheese cake",
    parent_id: 11,
  },
  {
    id: 114,
    name: "Shawama",
    parent_id: 11,
  },
  {
    id: 115,
    name: "Ice cream",
    parent_id: 11,
  },
  {
    id: 116,
    name: "African meals",
    parent_id: 11,
  },
  {
    id: 117,
    name: "Chinese cuisine",
    parent_id: 11,
  },
  {
    id: 118,
    name: "Cookies",
    parent_id: 11,
  },
  {
    id: 119,
    name: "Egg rolls",
    parent_id: 11,
  },
  {
    id: 120,
    name: "Intercontinental meals",
    parent_id: 11,
  },
  {
    id: 121,
    name: "Lipstics",
    parent_id: 12,
  },
  {
    id: 122,
    name: "Face wipes",
    parent_id: 12,
  },
  {
    id: 123,
    name: "Face cleanser",
    parent_id: 12,
  },
  {
    id: 124,
    name: "Concealer",
    parent_id: 12,
  },
  {
    id: 125,
    name: "Foundation",
    parent_id: 12,
  },
  {
    id: 126,
    name: "Eye liner",
    parent_id: 12,
  },
  {
    id: 127,
    name: "Eye pencil",
    parent_id: 12,
  },
  {
    id: 128,
    name: "Lip gloss",
    parent_id: 12,
  },
  {
    id: 129,
    name: "Eye shadow",
    parent_id: 12,
  },
  {
    id: 130,
    name: "Setting spray",
    parent_id: 12,
  },
  {
    id: 131,
    name: "Rods and tackle",
    parent_id: 13,
  },
  {
    id: 132,
    name: "Bats",
    parent_id: 13,
  },
  {
    id: 133,
    name: "Racquets",
    parent_id: 13,
  },
  {
    id: 134,
    name: "Wickets and bases",
    parent_id: 13,
  },
  {
    id: 135,
    name: "Joggers",
    parent_id: 13,
  },
  {
    id: 136,
    name: "Balls and discs",
    parent_id: 13,
  },
  {
    id: 137,
    name: "Treadmills",
    parent_id: 13,
  },
  {
    id: 138,
    name: "Skates",
    parent_id: 13,
  },
  {
    id: 139,
    name: "Sleds",
    parent_id: 13,
  },
  {
    id: 140,
    name: "Pumps",
    parent_id: 13,
  },
  {
    id: 141,
    name: "Skis",
    parent_id: 13,
  },
  {
    id: 142,
    name: "Chair",
    parent_id: 14,
  },
  {
    id: 143,
    name: "Table",
    parent_id: 14,
  },
  {
    id: 144,
    name: "Bed",
    parent_id: 14,
  },
  {
    id: 145,
    name: "Ottoman",
    parent_id: 14,
  },
  {
    id: 146,
    name: "Sofa",
    parent_id: 14,
  },
  {
    id: 147,
    name: "Cabinet",
    parent_id: 14,
  },
  {
    id: 148,
    name: "Drawer",
    parent_id: 14,
  },
  {
    id: 149,
    name: "Bookshelf",
    parent_id: 14,
  },
  {
    id: 150,
    name: "Wardrope",
    parent_id: 14,
  },
  {
    id: 151,
    name: "Wall console",
    parent_id: 14,
  },
];
const products = [
  {
    id: 1,
    name: "40 leaves exercise book",
    image: Img9,
    category_id: 17,
  },
  {
    id: 2,
    name: "Homework Diary",
    image: Img9,
    category_id: 17,
  },
  {
    id: 3,
    name: "Reading Record ",
    image: Img9,
    category_id: 17,
  },
  {
    id: 4,
    name: "Handwriting",
    image: Img9,
    category_id: 17,
  },
  {
    id: 5,
    name: "Math Exercise Book",
    image: Img9,
    category_id: 17,
  },
  {
    id: 6,
    name: "Scrab Books & Project Books",
    image: Img9,
    category_id: 17,
  },
  {
    id: 7,
    name: "Tinted Exercise Books",
    image: Img9,
    category_id: 17,
  },
  {
    id: 8,
    name: "school bag",
    image: Img9,
    category_id: 18,
  },
  {
    id: 9,
    name: "Sling Bag",
    image: Img9,
    category_id: 18,
  },
  {
    id: 9,
    name: "Sling Bag",
    image: Img9,
    category_id: 18,
  },
  {
    id: 9,
    name: "Sling Bag",
    image: Img9,
    category_id: 18,
  },
  {
    id: 9,
    name: "Sling Bag",
    image: Img9,
    category_id: 18,
  },
  {
    id: 9,
    name: "Sling Bag",
    image: Img9,
    category_id: 18,
  },
  {
    id: 9,
    name: "Sling Bag",
    image: Img9,
    category_id: 18,
  },
];
