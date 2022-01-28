import React, { useState } from "react";
import "./todo.css";

function Todo() {
  const [inp, setInp] = useState("");
  const [item, setItem] = useState([]);
  const [isTrue, setIsTrue] = useState(true);
  const [arr, setArr] = useState("");

  const addItem = () => {
    setItem((old) => {
      return [...old, inp];
    });
    console.log(item);
    setInp("");
    setArr("")
    setIsTrue(!isTrue);
  };

const deleteItem = (e) =>{
var newItem = item.splice(e,1);
console.log(newItem);
setInp(newItem);
}

  return (
    <div className="todo-main">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="todo-main2">
        <div className="card">
          <div className="content">
            <div>
              <h1>ToDo List</h1>
            </div>
            <div className="input-div">
              <div>
                <input
                  type="text"
                  className="input"
                  value={arr}
                  onChange={(e) => {setInp(e.target.value); setArr(e.target.value)}}
                  placeholder="Ex: Read Books"
                />
              </div>
              <div>
                
                <button className="input-btn" onClick={addItem}>
                  Add
                </button>
              </div>
            </div>
            <div className="val-div">
              {item.map((itemval, key) => {
                return (
                  <div key={key} className="val-in-div">
                    <div className="plus-div">
                      <button className="plus" onClick={() => deleteItem(key)} >+</button>
                    </div>
                    {itemval}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
