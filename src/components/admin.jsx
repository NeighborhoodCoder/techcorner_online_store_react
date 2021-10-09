import "./admin.css";
import { useState } from "react";
import ItemService from "./../services/itemService";

const Admin = () => {
  const [product, setProduct] = useState({});

  const saveProduct = (event) => {
    let prod = { ...product };
    let name = event.target.name;
    let value = event.target.value;

    prod[name] = value;
    console.log(prod);
    setProduct(prod);
  };

  const btnSave = () => {
    let copy = { ...product };
    copy.price = parseFloat(copy.price);
    copy.discount = parseFloat(copy.discount);
    copy.stock = +copy.stock;
    copy.minimum = copy.minimum * 1;

    let service = new ItemService();
    service.saveProduct(copy);
    console.log(copy);
  };

  return (
    <div className="admin">
      <h1 className="mb-3">Admin</h1>
      <div className="form">
        <div className="form-item">
          <label htmlFor="">Title</label>
          <input name="title" onChange={saveProduct} type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="">Price</label>
          <input name="price" onChange={saveProduct} type="number" />
        </div>
        <div className="form-item">
          <label htmlFor="">Category</label>
          <input name="category" onChange={saveProduct} type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="">Image</label>
          <input name="image" onChange={saveProduct} type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="">Discount</label>
          <input name="discount" onChange={saveProduct} type="number" />
        </div>
        <div className="form-item">
          <label htmlFor="">Stock</label>
          <input name="stock" onChange={saveProduct} type="number" />
        </div>
        <button onClick={btnSave} className="btn btn-secondary mb-3">
          Save Product
        </button>
      </div>
    </div>
  );
};

export default Admin;
