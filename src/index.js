import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';

let nextListId = 0;

export default function Todolist() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [finishedlist, setFinishedlist] = useState([]);

  console.log(nextListId);

  return (
    <>
      <div>
        <h1>TODOLIST</h1>
        <input
          value={item}
          onChange={e => setItem(e.target.value)}
        ></input>
        <button onClick={() => {
          setItem('');
          //这里的作用方法，注释掉之后点击按钮不会渲染？
          // let nextListId = 0;
          setList(
            [...list,
            {
              id: nextListId,
              item: item,
            }]);
          nextListId++;
        }}>add</button>
        <hr />
        <div>未完成</div>
        <ul>
          {list.map(todoItem => (
            <>
              <li key={todoItem.id}>
                {todoItem.item}{'-'}
                <button
                  onClick={() => {
                    setList(list.filter(a => a.id !== todoItem.id))
                    setFinishedlist(finishedlist.concat(list.filter(a => a.id == todoItem.id)))
                  }}
                >done</button>
              </li>
            </>
          ))}
        </ul>
        <hr />
        <div>已完成</div>
        <ul>
          {finishedlist.map(finishedItem => (
            <>
              {/* <button onClick={() => {console.log(finishedlist)}}></button> */}
              <li key = {finishedItem.id}>
                {finishedItem.item}{'-'}
              </li>
            </>
          ))
          }
        </ul>




      </div>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todolist />);