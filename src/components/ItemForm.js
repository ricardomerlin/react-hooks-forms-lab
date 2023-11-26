import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ bringInputTextUp, bringInputCatUp, bringStuffUp }) {

  const [inputText, setInputText] = useState('')
  const [inputCategory, setInputCategory] = useState('Produce')

  function handleText (e) {
    setInputText(e.target.value)
  }
  
  function handleCat (e) {
    setInputCategory(e.target.value)
  }
  
  bringInputTextUp(inputText)
  bringInputCatUp(inputCategory)

  return (
    <form className="NewItem" onSubmit={bringStuffUp}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleText} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCat}>
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
