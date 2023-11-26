import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bringToShoppingList, setBringToShoppingList] = useState('')
  const [inputTextToSL, setInputTextToSL] = useState('')
  const [inputCatToSL, setInputCatToSL] = useState('')
  const [formData, setFormData] = useState(items)

  function onCategoryChange (category) {
    setSelectedCategory(category)
  }

  console.log(selectedCategory)

  function bringToSL(filter) {
    setBringToShoppingList(filter)
  }




  function bringInputTextUp(inputText) {
    setInputTextToSL(inputText)
  }

  function bringInputCatUP(inputCategory) {
    setInputCatToSL(inputCategory)
  }

  // console.log(inputTextToSL)
  // console.log(inputCatToSL)


  function bringStuffUp(e) {
    e.preventDefault()
    const addObject = { 
      id: items.length + 1,
      name: inputTextToSL, 
      category: inputCatToSL 
    }
    setFormData((items) => [...items, addObject])
    setInputTextToSL('')
    setInputCatToSL('')
  }

  console.log(formData)

  const itemsToDisplay = formData.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });



  const filteredItems = itemsToDisplay.filter(item => item.name.includes(bringToShoppingList)) 

  return (
    <div className="ShoppingList">
      <ItemForm bringInputTextUp={bringInputTextUp} bringInputCatUp={bringInputCatUP} bringStuffUp={bringStuffUp} />
      <Filter onCategoryChange={onCategoryChange} bringToSL={bringToSL}/>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />  
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
