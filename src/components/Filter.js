import React, { useState } from "react";

function Filter({ onCategoryChange, bringToSL }) {

  const [filter, setFilter] = useState('')
  const [category, setCategory] = useState('All')




  function handleInput (e) {
    setFilter(e.target.value)
  }

  bringToSL(filter)





  function handleCategory (e) {
    setCategory(e.target.value)
  }

  onCategoryChange(category)





  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={handleInput} />
      <select name="filter" onChange={handleCategory}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
