
//import React
import React from 'react';
//create functional component called item display name, quantity, and category in list item

function Item({name,quantity,category, onSelect}) {
    return (
        <div className='text-white font-bold bg-zinc-700 p-5 m-5 rounded-lg' onClick={()=> onSelect()}>
            <ul >
                <li>Name: {name}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ul>
        </div>
    );
}
export default Item;