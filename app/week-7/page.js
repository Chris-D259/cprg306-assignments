'use client'
import MealIdeas from './meal-ideas';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from '../week-7/new-item';
import itemsData from './items.json';
import { useState } from 'react';
export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  //create event handler to add new item to list
  function handleAddItem(newItem) {
    itemsData.push(newItem);
  }
  function handleItemSelect(item) {
    const itemName = item.name;
    const itemNameFilter = /^[^\W_]+(?: [^\W_]+)*/;
    const matchedName = item.name.match(itemNameFilter);
    const strippedName = matchedName ? matchedName[0].trim() : itemName.trim();
    setSelectedItemName(strippedName);
  }
    return (
      <>
      <header className="p-4 bg-zinc-900 text-white font-bold flex justify-between items-center">
      <Link href="/" className='underline'>Back to Dashboard</Link>
        <h1 className="text-xl">Christopher Duke CPRG306 Assignments</h1>
        </header>
      <main className="flex items-center justify-center min-h-screen bg-zinc-700">
        
        <div className='text-white font-bold bg-zinc-800 p-5 rounded-lg'>
          <h1 className='text-center'>Shopping List</h1>
          {/*pass handleAddItem function to NewItem component*/}
            <NewItem onAddItem={handleAddItem}/>
            <div className='flex justify-center items-start'>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <MealIdeas ingredient={selectedItemName}/>
            </div>
        </div>
      </main>
      </>
    );
  }