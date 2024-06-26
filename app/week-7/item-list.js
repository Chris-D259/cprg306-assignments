'use client';
import Item from './item';
import { useState } from 'react';

// Create a functional component called ItemList with new items prop passed to it
function ItemList({ items, onItemSelect}) {
    // Create state variable
    const [sortBy, setSortBy] = useState('name');
    // Create a function to sort items by name or category
    function sortItems() {
        let itemsArray = [...items]; // Create a copy of the items prop
        if (sortBy === 'name') {
            itemsArray.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            itemsArray.sort((a, b) => a.category.localeCompare(b.category));
        }
        return itemsArray;
    }

    return (
        <div>
            {/* Create buttons to sort items by name or category */}
            {/* Use Conditional Styling */}
            <button
                className={`text-white m-5 p-5 ${sortBy === 'category' ? 'bg-violet-700' : 'bg-zinc-700'}`}
                onClick={() => setSortBy('category')}
            >
                Sort by Category
            </button>
            <button
                className={`text-white m-5 p-5 ${sortBy === 'name' ? 'bg-violet-700' : 'bg-zinc-700'}`}
                onClick={() => setSortBy('name')}
            >
                Sort by Name
            </button>

            <div>
                {/* Map over sorted items array and display each item */}
                
                {sortItems().map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)} />
                ))}
            </div>
        </div>
    );
}

export default ItemList;
