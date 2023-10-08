import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemsListed, setItemsListed] = useState([...items]);
  const [currentSearchWord, setCurrentSearchWord] = useState("")


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const onItemFormSubmit = (newItem) => {
    let newArr = [...itemsListed, newItem]
    setItemsListed(newArr);
    setItems(newArr);
  }

  const onSearchChange = (e) => {
    setCurrentSearchWord(e.target.value)
    const newItems = items.filter(item => {
      if (e.target.value.trim()) {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
      } else {
        return true;
      }
    })
    setItemsListed(newItems);
  }

  const itemsToDisplay = itemsListed.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={currentSearchWord} onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;