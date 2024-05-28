
//import React
import React from 'react';
//create functional component called item display name, quantity, and category in list item

function Item(props) {
    return (
        <div className='text-white font-bold bg-zinc-700 p-5 m-5 rounded-lg'>
            <ul>
                <li>Name: {props.name}</li>
                <li>Quantity: {props.quantity}</li>
                <li>Category: {props.category}</li>
            </ul>
        </div>
    );
}
export default Item;