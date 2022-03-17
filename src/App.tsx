import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import ShoppingItem from './Components/ShoppingItem';
import { IItem } from './Interfaces';

const App: FC = () => {

  const [ item, setItem ] = useState<string>("")
  const [ quantity, setQuantity ] = useState<number>(0);
  const [ shoppingList, setShoppingList ] = useState<IItem[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "item") {
      setItem(event.target.value)
    } 
    else {
      setQuantity(Number(event.target.value))};
    }

  const handleSubmit = (): void => {
    const newItem = { itemName: item, quantity: quantity}
    setShoppingList([...shoppingList, newItem]) 
    setItem("");
    setQuantity(0);
  };
    
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Item..." name="item" value={item} onChange={handleChange} />
          <input type="number" placeholder="Quantity..." name="quantity" value={quantity} onChange={handleChange} />
        </div>
        <button onClick={handleSubmit}>+</button>
      </div>

      <div className="shoppingList">
        {shoppingList.map((item: IItem, key: number) => {
          return <ShoppingItem key={key} item={item}/>
        })}
      </div>
    </div>
  );
}

export default App;
