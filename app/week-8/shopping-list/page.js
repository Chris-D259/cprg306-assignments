'use client'
import MealIdeas from './meal-ideas';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from 'react';
import { useUserAuth } from '../_utils/auth-context';
export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const {user,firebaseSignOut} = useUserAuth();
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

  function ProtectAuth(){
    if(user){
      return (
        <>
      <header className="p-4 bg-zinc-900 text-white font-bold flex justify-between items-center">
      <Link href="/" className='underline'>Back to Dashboard</Link>
        <h1 className="text-xl">Christopher Duke CPRG306 Assignments</h1>
        <button className='text-white bg-violet-700 m-10 p-5' onClick={firebaseSignOut}>Sign Out</button>
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
      )
      
    } else {
      return (
        <main className="flex items-center justify-center min-h-screen bg-zinc-700">
        <button className='text-white bg-violet-700 m-10 p-5'><Link href="./">Go To Login</Link></button>
        </main>
      )
      
    }
  }
    return (
      <ProtectAuth/>
    );
  }