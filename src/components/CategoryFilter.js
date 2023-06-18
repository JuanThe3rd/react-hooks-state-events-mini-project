import React from "react";

function CategoryFilter({categories, categorySelect, selectedCategories}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button 
          key={category} 
          onClick={() => categorySelect(category)}
          className={selectedCategories.includes(category) ? "selected" : null}
        >{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;