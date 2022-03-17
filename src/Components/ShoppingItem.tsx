import React from 'react';
import { IItem } from '../Interfaces';

interface Props {
    item: IItem;
}

const ShoppingItem = ({ item }: Props) => {
    return (
        <div className="item">
            <div className="content">
                <span>{item.itemName}</span>
                <span>{item.quantity}</span>
            </div>
            <button>X</button>
        </div>
    )
}

export default ShoppingItem