import "./catalog.css";
import Item from "./item";
import { useEffect, useState } from "react";
import ItemService from "../services/itemService";
import axios from "axios";

const Catalog = () => {
  // state variables
  let [products, setProducts] = useState([]);
  let [displayItems, setDisplayItems] = useState([]);
  let [categories, setCategories] = useState([]);

  // logic (fns)
  const retrieveCatalog = async () => {
    let service = new ItemService();
    let cat = await service.getCatalog();
    setProducts(cat);
    setDisplayItems(cat);
    console.log(cat);

    let categ = [];
    for (let i = 0; i < cat.length; i++) {
      let prod = cat[i];
      if (!categ.includes(prod.category)) {
        categ.push(prod.category);
      }
    }
    setCategories(categ);
    console.log(categ);
  };

  const handleFilter = (item) => {
    let filtered = products.filter((prod) => prod.category === item);
    setDisplayItems(filtered);
  };

  const clearFilter = () => {
    setDisplayItems(products);
  };

  const capFirstLetter = (word) => {
    if (word === `msi`) {
      return word.toUpperCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  };

  // Effects
  useEffect(() => {
    console.log(`Component Loaded`);
    retrieveCatalog();
  }, []);

  // return
  return (
    <div className="catalog">
      <h3 className="display-5">Check our amazing products!</h3>
      <h6>Currently we have {products.length} items for you.</h6>
      <div className="categories my-2">
        {categories.map((prod) => (
          <button
            onClick={() => handleFilter(prod)}
            key={prod}
            className="btn btn-sm btn-success mx-1"
          >
            {capFirstLetter(prod)}
          </button>
        ))}
        <button onClick={clearFilter} className="btn btn-sm btn-secondary">
          Clear Filter
        </button>
      </div>
      <div className="item-box">
        {displayItems.map((prod) => (
          <Item key={prod._id} data={prod} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
