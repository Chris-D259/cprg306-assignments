'use client'
import Item from './item';
import { useState } from 'react';
// import items.json
import items from './items.json';
//create functional component called item list
function itemList(){
    //create state variable
    const [sortBy, setSortBy] = useState('name');
    const itemsArray = items;
    //create function to sort items by name or category
    function sortItems() {
      if (sortBy === 'name') {
        itemsArray.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        itemsArray.sort((a, b) => a.category.localeCompare(b.category));
      }
    }
    return (
      <div>
        {/* create buttons to sort items by name or category*/}
        {/* Use Conditional Styling*/}
        
        <button className={`text-white bg-zinc-700 m-5 p-5 ${sortBy === 'category' ? 'bg-violet-700': 'bg-zinc-700'}`} onClick={() => setSortBy('category')}>Sort by Category</button>
        <button className={`text-white bg-zinc-700 m-5 p-5 ${sortBy === 'name' ? 'bg-violet-700': 'bg-zinc-700'}`} onClick={() => setSortBy('name')}>Sort by Name</button>

        
        <div>
          {/* map over items array and display each item */}
          {sortItems()}
          {itemsArray.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </div>
      </div>
    );
}

    
    
        

export default itemList;



