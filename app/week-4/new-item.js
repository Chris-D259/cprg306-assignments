//add use client directive
'use client'
import { useState } from 'react';
import Item from '../week-3/item';
//create state variable 
function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState('produce');
    //create function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        //create new item object with name, quantity, and category
        Item.newItem = { name, quantity, category };
        //Log createed Item to Console
        console.log({ name, quantity, category });
        //display alert to user with current name, quantity and category state
        alert(`New item: ${name}, ${quantity}, ${category}`);
        //reset state variables
        setName('');
        setQuantity(0);
        setCategory('produce');
    }
    //return form for user to input new item
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