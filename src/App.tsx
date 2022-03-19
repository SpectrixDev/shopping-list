import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import ShoppingItem from './Components/ShoppingItem';
import { IItem } from './Interfaces';

const App: FC = () => {

  const [ item, setItem ] = useState<string>("")
  const [ quantity, setQuantity ] = useState<number>(1);
  const [ shoppingList, setShoppingList ] = useState<IItem[]>([]);
  const [ infoText, setInfoText ] = useState<string>("Add items to your list");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "item") {
      setItem(event.target.value)
    } 
    else {
      setQuantity(Number(event.target.value))};
    }

  const handleSubmit = (): void => {
    const newItem = { itemName: item, quantity: quantity}
    /* Make sure it's not less than 1, cuz like why */
    if (Number(quantity) < 1) {
      /* Change the value of the infoText to reflect this */
      setInfoText("🚨 Must be greater than 0 🚨")
    }
    /* Check if item is already in list */
    else if (shoppingList.some(item => item.itemName === newItem.itemName)) {
      setInfoText("🚨 Item already in list 🚨")
    }
    /* Make sure item is not empty */
    else if (newItem.itemName === "") {
      setInfoText("🚨 Item cannot be empty 🚨")
    }
    else {
      /* Add to the list and set things back to default value */
      setShoppingList([...shoppingList, newItem]) 
      setItem("");
      setQuantity(1);
      setInfoText("Add items to your list");
    }
  };

  const removeItem = (itemToDelete: string): void => {
    setShoppingList(shoppingList.filter((item) => {
      return item.itemName !== itemToDelete
    }))
  };
    
  return (
    <div className="App">

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

      <div className="animate__animated animate__fadeIn">
      <h1>Shopping List 🛒</h1>
      <h2 className="subtitle">{infoText}</h2>
      <div className="header">
          <div className="inputContainer">
            <input type="text" placeholder="Item..." name="item" value={item} onChange={handleChange} />
            <input type="number" placeholder="Quantity..." name="quantity" min="1" value={quantity} onChange={handleChange} />
          </div>
        <button onClick={handleSubmit}>+</button>
      </div>
      <br />
      </div>
    

      <div className="shoppingList">
        {shoppingList.map((item: IItem, key: number) => {
          return <ShoppingItem key={key} item={item} removeItem={removeItem}/>
        })}
      </div>
    </div>
  );
}

export default App;
