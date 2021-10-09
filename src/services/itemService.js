import axios from "axios";

var data = [
  {
    _id: "001",
    title: `ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR`,
    price: 797.88,
    category: "asus",
    image: "001.jpg",
    discount: 10,
    minimum: 1,
    stock: 4,
  },
  {
    _id: "002",
    title: `MSI GeForce GTX 1050 Ti 4GB GDDR5 PCI Express 3.0 x16 ATX Video Card GTX 1050 Ti 4GT OC`,
    price: 289.95,
    category: "msi",
    image: "002.jpg",
    discount: 3,
    minimum: 1,
    stock: 6,
  },
  {
    _id: "003",
    title: `Yeston AMD Video Card Radeon RX550 4G D5 LP Gaming Graphics Card GPU, 4G/128bit/GDDR5 PCI-Express 3.0x8 DirectX 12,DVI+HDMI+VGA Desktop Graphics Card (HTPC ITX is compatible)`,
    price: 179.0,
    category: "yeston",
    image: "003.jpg",
    discount: 3,
    minimum: 1,
    stock: 8,
  },
  {
    _id: "004",
    title: `GIGABYTE GeForce GT 1030 2GB GDDR5 PCI Express 3.0 x16 Video Card GV-N1030OC-2GI`,
    price: 85.99,
    category: "gigabyte",
    image: "004.jpg",
    discount: 3,
    minimum: 1,
    stock: 1,
  },
  {
    _id: "005",
    title: `GIGABYTE Radeon RX 6700 XT GAMING OC 12G Graphics Card, WINDFORCE 3X Cooling System, 12GB 192-bit GDDR6, GV-R67XTGAMING OC-12GD Video Card`,
    price: 899.99,
    category: "gigabyte",
    image: "005.jpg",
    discount: 3,
    minimum: 1,
    stock: 6,
  },
  {
    _id: "006",
    title: `MSI Gaming GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 Video Card RTX 3060 Ti Gaming X 8G LHR`,
    price: 1044.85,
    category: "msi",
    image: "006.jpg",
    discount: 10,
    minimum: 1,
    stock: 4,
  },
  {
    _id: "007",
    title: `GIGABYTE GeForce GTX 1660 OC 6G Graphics Card, 2 x WINDFORCE Fans, 6GB 192-Bit GDDR5, GV-N1660OC-6GD Video Card`,
    price: 679.42,
    category: "gigabyte",
    image: "007.jpg",
    discount: 10,
    minimum: 1,
    stock: 3,
  },
  {
    _id: "008",
    title: `ASUS GeForce GT 1030 2GB Phoenix Fan OC Edition HDMI DVI Graphics Card (PH-GT1030-O2G)`,
    price: 116.69,
    category: "asus",
    image: "008.jpg",
    discount: 3,
    minimum: 1,
    stock: 9,
  },
  {
    _id: "009",
    title: `GIGABYTE GeForce RTX 3060 EAGLE 12G Graphics Card, 2 x WINDFORCE Fans, 12GB 192-bit GDDR6, GV-N3060EAGLE OC-12GD (rev. 2.0) Video Card`,
    price: 924.99,
    category: "egigabyte",
    image: "009.jpg",
    discount: 10,
    minimum: 1,
    stock: 5,
  },
];

// We use ItemService.js here so that I dont need to write this code on every component that needs to GET info from the server/DataBase
class ItemService {
  async getCatalog() {
    let retrieve = await axios.get("http://127.0.0.1:5000/api/catalog");
    return retrieve.data;
    return data;
  }

  async saveProduct(product) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/catalog",
      product
    );
    console.log("saving the result of", response);
  }
}

export default ItemService;
