//add use client directive
'use client'
import { useState } from 'react';
import Item from '../week-6/item';
//create state variable 
function NewItem({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState('produce');

    // Create function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        // Create new item object with name, quantity, and category
        const newItem = { name, quantity, category };

        // Log created Item to Console
        console.log(newItem);

        // Call onAddItem function and pass item object
        onAddItem(newItem);

        // Reset state variables
        setName('');
        setQuantity(0);
        setCategory('produce');
    }

    // form for user to input new item
    return (
        <form onSubmit={handleSubmit}>
            <h1 className='text-white p-5 text-center'>New Shopping List Item</h1>
            <label className='text-white p-5'>
                Name:
                <input className='text-black'
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <label className='text-white p-5'>
                Quantity:
                <input className='text-black'
                    type='number'
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                />
            </label>
            <label className='text-white p-5'>
                Category:
                <input className='text-black'
                    type='text'
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
            </label>
            <button className='text-white bg-zinc-700 m-10' type='submit'>Add Item</button>
        </form>
    );
}
export default NewItem;