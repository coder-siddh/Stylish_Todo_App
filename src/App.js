import React , {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './component/Header'
import DisplayTodo from './component/DisplayTodo';
import '../src/style/main.css'
import Navbar from './component/Navbar';

const App = () => {

  const [inputtodo, setInputtodo] = useState("");
  const [addTodo, setaddTodo] = useState([]);
  
  const addItem = () => {

    if(!inputtodo)
    {
      alert("plz input data");
      return;
    }

    setaddTodo([...addTodo , {
      data : inputtodo,
      id : uuidv4(),
      completed : false
    }])

    setInputtodo("");
  }

  const updateTodo = (id , value , e , inref) => {

    if(e.which == "13")
    {
      setaddTodo(addTodo.map((curElem) => {
        if(curElem.id == id)
        {
          return {...curElem , data : value };
        }
        return curElem;
      }
      ))

      inref.current.disabled = true;
    }
  }

  return (
    <div className='App'>
      <Header addItem= {addItem} inputtodo={ inputtodo } setInputtodo={setInputtodo}/>
      <Navbar addTodo= {addTodo} updateTodo={updateTodo} setaddTodo = {setaddTodo} />
    </div>
  )
}

export default App