import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PizzaForm = () => {
  const history=useNavigate();

  const [pizzaData, setPizzaData] = useState({
    name: "",
    description: "",
    quantity: 1,
    tags: "",
    price: 0,
    size: "small",
    toppings: "",
    discount: "10%",
    typeofpizza: "veg",
    base: "thin crust",
    sauce: "marinara",
  });

  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPizzaData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
    console.log({
        name: pizzaData.name,
        description: pizzaData.description,
        quantity: pizzaData.quantity,
        tags: pizzaData.tags,
        price: pizzaData.price,
        size: pizzaData.size,
        toppings: pizzaData.toppings,
        discount: pizzaData.discount,
        typeofpizza: pizzaData.typeofpizza,
        base: pizzaData.base,
        sauce: pizzaData.sauce,
        file: file,
      })
      const formdata=new FormData()
      formdata.append("file",file)
      formdata.append("name",pizzaData.name)
      formdata.append("description",pizzaData.description)
      formdata.append("quantity",pizzaData.quantity)
      formdata.append("tags",pizzaData.tags)
      formdata.append("price",pizzaData.price)
      formdata.append("size",pizzaData.size)
      formdata.append("toppings",pizzaData.toppings)
      formdata.append("discount",pizzaData.discount)
      formdata.append("typeofpizza",pizzaData.typeofpizza)
      formdata.append("base",pizzaData.base)
      formdata.append("sauce",pizzaData.sauce)
      axios
      .post("http://localhost:3001/admin/createpizza",formdata)
      .then((response) => {
        console.log(response.data);
        history("/admin"); 

      })
      .catch((error) => {
        console.error(error);
      });

    } else {
      console.log("Please select an image");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={pizzaData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={pizzaData.description} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" name="quantity" value={pizzaData.quantity} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Tags:
        <input type="text" name="tags" value={pizzaData.tags} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={pizzaData.price} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Size:
        <select name="size" value={pizzaData.size} onChange={handleInputChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <br />
      <label>
        Toppings:
        <input type="text" name="toppings" value={pizzaData.toppings} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Discount:
        <input type="text" name="discount" value={pizzaData.discount} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Type of Pizza:
        <select name="typeofpizza" value={pizzaData.typeofpizza} onChange={handleInputChange}>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
          <option value="cheese">Cheese</option>
        </select>
      </label>
      <br />
      <label>
        Base:
        <select name="base" value={pizzaData.base} onChange={handleInputChange}>
          <option value="thin crust">Thin Crust</option>
          <option value="thick crust">Thick Crust</option>
          <option value="deep dish">Deep Dish</option>
          <option value="whole wheat">Whole Wheat</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
      </label>
      <br />
      <label>
        Sauce:
        <select name="sauce" value={pizzaData.sauce} onChange={handleInputChange}>
          <option value="marinara">Marinara</option>
          <option value="barbecue">Barbecue</option>
          <option value="alfredo">Alfredo</option>
          <option value="pesto">Pesto</option>
          <option value="ranch">Ranch</option>
        </select>
      </label>
      <br />
      <label>
        Image:
        <input type="file" onChange={handleFileChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PizzaForm;
