
import { useState, useEffect } from 'react';

function ToDo() {

  /* setList will add a value to the list
     useState is a hook*/

  const [list, setList] = useState([]);
  const [toDo, settoDo] = useState("dog")
    useEffect(()=>{
    setList(["World Domination" , "Eat Donuts" , "Go Home"])
  }, [])
  return (
    <div className="To_Do">
      <h1>Hello World!</h1>

      <h3>Today, we will achieve:</h3>
      <ul ms-500>
        {list.map((val, id) => {return <li onClick={
          () => {setList(
            list.filter((item) => {return item !== val})
          )}
        } key={id}>{val}</li>}) }
      </ul>
      {/*the CURLY BRACES will tell the browser that the string should be printed on the document, not the code
      
         val and id are variables*/}
      
      <input value = {toDo} onChange={(e) => {settoDo(e.target.value)}} />
      <button className='btn btn-primary' onClick={()=>{setList([...list, toDo])}}>Add to Do</button>
      {/*Adds whatever value typed into the code */}
    </div>
  );
}

export default ToDo;
