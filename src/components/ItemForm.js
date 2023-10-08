import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "Produce"
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setFormData({
      ...formData,
      [name]: value,
      ["id"]: uuid()
    });
    
  }

  return (
    <form onSubmit={() => {
      onItemFormSubmit(formData)
    }} className="NewItem">
      <label>
        Name:
        <input onChange={handleChange} value={formData.name} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;