'use client'
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from '../week-6/new-item';
import itemsData from './items.json';
import { useState } from 'react';
export default function Page() {
  const [items, setItems] = useState(itemsData);
  //create event handler to add new item to list
  function handleAddItem(newItem) {
    itemsData.push(newItem);
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
            {/*pass items state to ItemList component*/}
            <ItemList items={items}/>
        </div>
      </main>
      </>
    );
  }