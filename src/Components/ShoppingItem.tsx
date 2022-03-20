import React from 'react';
import { IItem } from '../Interfaces';

interface Props {
    item: IItem;
    removeItem(itemToDelete: string): void;
}

const ShoppingItem = ({ item, removeItem }: Props) => {
    return (
        <div className="animate__animated animate__fadeInUp">
        <div className="item">
            <div className="content">
                <span className="quantity">{item.quantity}</span>
                <span>{item.itemName}</span>
            </div>
            <button onClick={() => {removeItem(item.itemName)}}>X</button>
        </div>
        </div>
    )
}

export default ShoppingItem